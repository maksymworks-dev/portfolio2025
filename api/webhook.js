const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // For Vercel, we need to get the raw body
    // The body might be a string or buffer depending on how Vercel processes it
    let body = req.body;
    
    // If body is an object (parsed JSON), convert it back to string
    if (typeof body === 'object' && body !== null) {
      body = JSON.stringify(body);
    }
    
    // Ensure body is a string for webhook verification
    if (typeof body !== 'string') {
      body = String(body);
    }

    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log('Payment successful for session:', session.id);
      // Here you can add logic to:
      // - Send confirmation email to customer
      // - Update inventory
      // - Create order record
      // - Notify admin
      break;
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent succeeded:', paymentIntent.id);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
};

