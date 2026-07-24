const config = {
    showBuyButtons: false // Toggle this to true to show buy buttons again
};

const products = {
    "smoking-kills-t-shirt": {
        name: "SMOKING KILLS T-SHIRT",
        image: "projects/6E7109A7-30C6-4690-8326-DD4CB17DB2B1_1_201_a.jpeg",
        additionalImages: "projects/421C5B00-19CA-4F91-A853-B0D1FB8443BE_1_102_o.jpeg|projects/0D5D6719-7733-455C-A00E-E9A839065EE4_1_102_o.jpeg|projects/DFD53EA5-0D20-46FE-8122-63029A72E1B1_1_102_o.jpeg|projects/FBABECE2-2E45-45B5-93D7-8BF88ECD2D44_1_102_o.jpeg",
        priceId: "",
        price: 150,
        igBuy: true
    },
    "big-pharma-long-sleeved-t-shirt": {
        name: "BIG PHARMA LONG SLEEVED T-SHIRT",
        image: "projects/IMG_8714.JPG",
        additionalImages: "projects/IMG_8759.JPG|projects/IMG_8724.JPG|projects/bigpharma.png",
        priceId: "",
        price: 200,
        igBuy: true
    },
    "dyakyu-royal-blue": {
        name: "ДЯКУЮ, ROYAL BLUE",
        image: "projects/dyakyu-royal-blue.jpg",
        additionalImages: "projects/IMG_0966.JPG|projects/IMG_0578.JPG|projects/IMG_5911.JPG|projects/IMG_6204.JPG|projects/IMG_6338.JPG|projects/IMG_0577.JPG|projects/IMG_6211.JPG",
        description: "DISCONTINUED.<br>If you want to get a piece, contact me via <a href='https://www.instagram.com/blessificator/' target='_blank'>IG DM</a> or <a href='https://www.blessificator.com/contact'>Contact form</a>.",
        priceId: ""
    },
    "polska-black": {
        name: "POLSKA, BLACK",
        image: "projects/IMG_2258.jpeg",
        additionalImages: "projects/IMG_1486.JPG|projects/IMG_1462.JPG",
        priceId: "",
        price: 150,
        igBuy: true,
        variants: {
            "XS": "52882835865939", // PASTE VARIANT ID HERE
            "S": "52882756272467", // PASTE VARIANT ID HERE
            "M": "52882756305235", // PASTE VARIANT ID HERE
            "L": "52882756338003", // PASTE VARIANT ID HERE
            "XL": "52882756370771" // PASTE VARIANT ID HERE
        }
    },
    "wariat-black": {
        name: "\"WARIAT. ABSOLUTE BEAST\" hoodie",
        image: "projects/1B79B3D3-12B6-443B-8B49-2F188D6D97BF_1_105_c.jpeg",
        additionalImages: "projects/E03C6BD3-6840-4255-BDAF-EE7C0C7E6540_1_201_a.jpeg|projects/0E8FC135-4FE4-4EE1-B723-95C8245262D7_1_105_c.jpeg|projects/10D0EE22-EE0F-43E3-B49D-16F4416BBD31_1_105_c.jpeg|projects/IMG_9158.JPG",
        priceId: "",
        price: 250,
        igBuy: true,
        variants: {
            "S": "52881227546963",
            "M": "52881227579731",
            "L": "52881227612499",
            "XL": "52881227645267",
            "2XL": "52881227678035"
        }
    },
    "ich-bin-aus-saporischschja": {
        name: "Ich bin aus Saporischschja",
        image: "projects/IMG_4650.JPG",
        priceId: "",
        price: 150,
        igBuy: true,
        variants: {
            "S": "52817015734611", // PASTE SHOPIFY VARIANT ID FOR SMALL
            "M": "52817015767379", // PASTE SHOPIFY VARIANT ID FOR MEDIUM
            "L": "52817015800147", // PASTE SHOPIFY VARIANT ID FOR LARGE
            "XL": "52817015832915" // PASTE SHOPIFY VARIANT ID FOR XL
        }
    },
    "warsaw-guide": {
        name: "WARSAW GUIDE",
        image: "projects/IMG_3944.JPG",
        additionalImages: "projects/3236496D-13D0-489D-9227-E0CAB0905511.jpg|projects/wg front.jpg|projects/IMG_9970.jpeg",
        priceId: "",
        igBuy: true,
        price: 150
    },
    "star-cowboy": {
        name: "STAR COWBOY UPCYCLED JACKET",
        image: "projects/scowboy3.jpg",
        additionalImages: "projects/scowboy1.jpg|projects/scowboy2.jpg",
        description: "Upcycled jacket with cowboy embroidery. Made in collaboration with <a href='https://ihatemusic.online' target='_blank'>ihatemusic</a>.",
        buyLink: "https://ihatemusic.online/products/star-cowboy-upcycled-jacket",
        priceId: ""
    },
    "swaga-cup": {
        name: "СВАГА CUP X SKOE",
        image: "projects/IMG_5678.JPG",
        additionalImages: "projects/IMG_5672.JPG",
        priceId: ""
    },
    "dr-seksu-t-shirt": {
        name: "DR. SEKSU T-shirt",
        image: "projects/IMG_6499.JPG",
        additionalImages: "projects/IMG_6495.JPG|projects/IMG_6496.JPG|projects/IMG_6501.JPG",
        priceId: "",
        price: 150
    },
    "superbullo-femmes-fatales": {
        name: "SUPERBULLO. FEMMES FATALES T-SHIRT",
        image: "projects/IMG_6668.JPG",
        additionalImages: "projects/bullo_back.jpg|projects/IMG_6667.JPG",
        priceId: "",
        igBuy: true,
        price: 150
    },
    /*
    "color-block-stripe-polo-shirt": {
        name: "BEWARE POLO SHIRT",
        image: "projects/Color Block Stripe Polo Shirt-mockups-3.png",
        additionalImages: "projects/Color Block Stripe Polo Shirt-mockups-4.png|projects/Color Block Stripe Polo Shirt-mockups-1.png|projects/Color Block Stripe Polo Shirt-mockups-2.png",
        priceId: "",
        igBuy: true,
        price: 200
    },
    */
    "a-girl-is-not-a-toy": {
        name: "A GIRL IS NOT A TOY",
        image: "projects/IMG_2087.PNG",
        priceId: "",
        igBuy: true,
        price: 150
    },
    "blessificator-hoodie": {
        name: "BLESSIFICATOR HOODIE",
        image: "projects/IMG_9230.JPG",
        additionalImages: "projects/b228562bc5124b238753ffcc51b0247e.png|projects/e0cb632c426b45fe8a7e10a2072a11bb.png|projects/IMG_9310.JPG|projects/IMG_9158.JPG",
        priceId: "",
        igBuy: true,
        price: 300
    },
    // TEMPLATE FOR SHOPIFY PRODUCT (See SHOPIFY_INTEGRATION.md)
    // "new-product-slug": {
    //     name: "NEW PRODUCT NAME",
    //     image: "projects/image.jpg",
    //     priceId: "",
    //     buyLink: "https://blessificator-com.myshopify.com/cart/VARIANT_ID:1"
    // }

};
