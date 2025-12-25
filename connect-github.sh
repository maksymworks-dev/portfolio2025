#!/bin/bash

# Script to connect your portfolio to GitHub
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual GitHub username and repository name

echo "Connecting to GitHub..."
echo ""
echo "Please make sure you've created a repository on GitHub first!"
echo "Then update this script with your GitHub username and repository name."
echo ""

# Replace these with your actual values
GITHUB_USERNAME="YOUR_USERNAME"
REPO_NAME="YOUR_REPO_NAME"

# Add remote (uncomment and update after creating repo on GitHub)
# git remote add origin https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git

# Push to GitHub
# git branch -M main
# git push -u origin main

echo "To connect manually, run these commands:"
echo "1. git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
echo "2. git branch -M main"
echo "3. git push -u origin main"


