#!/bin/bash

# Helper script to commit and push changes
# Usage: ./commit-and-push.sh "Your commit message"

if [ -z "$1" ]; then
    echo "Usage: ./commit-and-push.sh 'Your commit message'"
    exit 1
fi

echo "Staging all changes..."
git add .

echo "Committing changes..."
git commit -m "$1"

echo "Pushing to GitHub..."
git push origin main
echo "Done!"








