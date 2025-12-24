# Portfolio

A minimal portfolio website for fashion designs and photography built with simple HTML, CSS, and JavaScript.

## Getting Started

### Local Development

You can view the site locally using a simple HTTP server:

**Using Python:**
```bash
python3 -m http.server 8000
```

**Using Node.js (if you have it installed):**
```bash
npx serve
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Adding Your Images

1. **Add design images:**
   - Place your clothing design images in the `public/designs/` folder
   - Name them `design-1.jpg`, `design-2.jpg`, etc. (or update the HTML)
   - In `index.html`, uncomment the `<img>` tags in the designs section and remove the placeholder divs

2. **Add photography images:**
   - Place your photography images in the `public/photography/` folder
   - Name them `photo-1.jpg`, `photo-2.jpg`, etc. (or update the HTML)
   - In `index.html`, uncomment the `<img>` tags in the photography section and remove the placeholder divs

3. **Update image paths:**
   - Make sure the `src` attributes in the HTML match your actual image filenames

## Deployment

### Deploy to Vercel

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel will automatically detect it as a static site
   - Click "Deploy"

3. **Your site will be live!**
   - Vercel will provide you with a URL like `your-portfolio.vercel.app`
   - Every push to GitHub will automatically redeploy your site

## Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # All styles
├── script.js           # Navigation and scroll functionality
├── public/
│   ├── designs/        # Clothing design images
│   └── photography/    # Photography images
└── README.md
```

## Features

- Minimal, clean design with white background
- Responsive layout (mobile, tablet, desktop)
- Smooth scrolling navigation
- Active section highlighting
- Simple, framework-free code
