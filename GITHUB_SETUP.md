# GitHub Setup Instructions

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Enter a repository name (e.g., "portfolio")
3. Choose Public or Private
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

## Step 2: Connect Your Local Repository

After creating the repository, run these commands in your terminal:

```bash
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Example

If your GitHub username is `johndoe` and your repo is named `portfolio`, you would run:

```bash
git remote add origin https://github.com/johndoe/portfolio.git
git branch -M main
git push -u origin main
```

## Current Status

✅ Git repository initialized
✅ All files committed
✅ Ready to push to GitHub

Just create the repo on GitHub and run the commands above!

