# Shopify Integration Guide

This guide explains how to add a "BUY" button to your blessificator.com product pages that links directly to a Shopify checkout (filled by Tapstitch).

## How it works

Instead of a complex API integration, we use **Cart Permalinks**. This is a standard Shopify feature that lets you create a link that, when clicked, automatically adds a specific product to the cart and takes the user to checkout.

## Step 1: Get the Variant ID

1.  Go to your Shopify Admin.
2.  Go to **Products** and click on a product.
3.  If the product has variants (e.g. Size/Color), finding the ID can be tricky. The easiest way is to view the product's page on your *Shopify store* (e.g., `your-store.myshopify.com/products/your-product`).
4.  Add `.json` to the end of the URL (e.g., `.../products/your-product.json`).
5.  Look for the `variants` list. Each variant has an `id`. It looks like `4382719385721`.

## Step 2: Create the Buy Link

The format for a direct checkout link is:

```
https://YOUR-SHOP-NAME.myshopify.com/cart/VARIANT_ID:1
```

*   Replace `YOUR-SHOP-NAME` with your actual Shopify store handle (e.g., `blessificator-store`).
*   Replace `VARIANT_ID` with the number you found in Step 1.
*   The `:1` at the end means "Quantity: 1".

**Example:**
`https://tapstitch-demo.myshopify.com/cart/445566778899:1`

## Step 3: Add to `products.js`

Open `products.js` and add your product entry. Use the `buyLink` property for the link you created.

```javascript
    "my-new-shirt": {
        name: "COOL SHIRT",
        image: "projects/shirt.jpg",
        priceId: "", // Leave empty
        buyLink: "https://your-shop.myshopify.com/cart/123456789:1" // <--- YOUR LINK HERE
    },
```

The website will automatically detect the `buyLink` and show the "BUY" button. When clicked, it will take the user to Shopify to finish the purchase.
