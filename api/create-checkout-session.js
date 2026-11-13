const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || 'https://www.blessificator.com';

module.exports = async (req, res) => {
  // CORS: allow only the production domain (and localhost for dev)
  const origin = req.headers.origin || '';
  const isAllowed =
    origin === ALLOWED_ORIGIN ||
    origin.startsWith('http://localhost') ||
    origin.startsWith('http://127.0.0.1');

  res.setHeader('Access-Control-Allow-Origin', isAllowed ? origin : ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isAllowed) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  try {
    const { productName, productImage, priceId, quantity = 1 } = req.body;

    if (!priceId) {
      return res.status(400).json({ error: 'Price ID is required' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/checkout-cancel`,
      metadata: {
        productName: productName || 'Product',
        productImage: productImage || '',
      },
    });

    res.status(200).json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
};

