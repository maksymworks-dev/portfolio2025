# Deployment Guide

## Setting up GitHub

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a new repository on GitHub**:
   - Go to [GitHub](https://github.com/new)
   - Create a new repository (e.g., `portfolio`)
   - Don't initialize with README, .gitignore, or license

3. **Connect your local repository to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

## Deploying to Vercel

1. **Sign up/Login to Vercel**:
   - Go to [Vercel](https://vercel.com)
   - Sign up or log in with your GitHub account

2. **Import your repository**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel will automatically detect Next.js

3. **Configure the project**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your site
   - You'll get a URL like `your-portfolio.vercel.app`

5. **Custom Domain (Optional)**:
   - Go to your project settings
   - Add your custom domain in the "Domains" section

## Updating Your Site

After making changes:
```bash
git add .
git commit -m "Your commit message"
git push
```

Vercel will automatically rebuild and redeploy your site on every push to the main branch.

