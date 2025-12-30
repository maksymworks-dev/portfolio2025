# Stripe Payment Integration Setup Guide

This guide will help you set up Stripe payments for your BLESSIFICATOR website.

## Prerequisites

1. A Stripe account (sign up at https://stripe.com)
2. Your website deployed on Vercel

## Step 1: Create Products and Prices in Stripe

1. Log in to your Stripe Dashboard: https://dashboard.stripe.com
2. Go to **Products** → **Add Product**
3. For each product you want to sell:
   - Enter the product name
   - Set the price
   - Choose currency (e.g., USD, EUR)
   - Save the product
4. **Important**: Copy the **Price ID** (starts with `price_`) for each product. You'll need this in Step 3.

## Step 2: Get Your Stripe API Keys

1. In Stripe Dashboard, go to **Developers** → **API keys**
2. Copy your **Publishable key** (starts with `pk_`)
3. Copy your **Secret key** (starts with `sk_`) - keep this secure!

## Step 3: Set Up Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:
   - `STRIPE_SECRET_KEY` = Your Stripe Secret key (from Step 2)
   - `STRIPE_WEBHOOK_SECRET` = (We'll get this in Step 4)

## Step 4: Set Up Webhook Endpoint

1. In Stripe Dashboard, go to **Developers** → **Webhooks**
2. Click **Add endpoint**
3. Enter your endpoint URL: `https://your-domain.com/api/webhook`
4. Select events to listen for:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
5. Click **Add endpoint**
6. Copy the **Signing secret** (starts with `whsec_`)
7. Add it to Vercel environment variables as `STRIPE_WEBHOOK_SECRET`

## Step 5: Add Price IDs to Your Product Links

Update your product links in `clothes.html` and `objects.html` to include the `priceId` parameter:

**Before:**
```html
<a href="product-detail.html?name=PRODUCT NAME&image=projects/image.jpg">
```

**After:**
```html
<a href="product-detail.html?name=PRODUCT NAME&image=projects/image.jpg&priceId=price_xxxxxxxxxxxxx">
```

Replace `price_xxxxxxxxxxxxx` with the actual Price ID from Step 1.

## Step 6: Install Dependencies

If deploying locally or testing:
```bash
npm install
```

Vercel will automatically install dependencies when you deploy.

## Step 7: Deploy to Vercel

1. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Add Stripe payment integration"
   git push
   ```

2. Vercel will automatically deploy your changes

## Testing

1. Use Stripe's test mode to test payments:
   - In Stripe Dashboard, toggle **Test mode** on
   - Use test card: `4242 4242 4242 4242`
   - Any future expiry date
   - Any CVC

2. Test the checkout flow:
   - Visit a product page with a `priceId` parameter
   - Click the "BUY" button
   - Complete the test payment

## Important Notes

- **Test Mode vs Live Mode**: Make sure to switch between test and live modes in Stripe Dashboard
- **Webhook URL**: The webhook URL must be your production domain, not localhost
- **Security**: Never expose your Secret key in client-side code
- **Price IDs**: Each product needs a unique Price ID from Stripe

## Troubleshooting

- **Buy button not showing**: Make sure the `priceId` parameter is included in the URL
- **Checkout not working**: Check Vercel function logs for errors
- **Webhook not receiving events**: 
  - Verify the webhook URL and signing secret are correct
  - Check Vercel function logs for webhook errors
  - Ensure the webhook endpoint URL matches your production domain exactly
  - Note: If webhook signature verification fails, you may need to configure Vercel to pass raw body. Check Vercel documentation for serverless function body parsing options.

## Support

For Stripe-specific issues, consult:
- Stripe Documentation: https://stripe.com/docs
- Stripe Support: https://support.stripe.com

