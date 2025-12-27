# Automatic GitHub Push Setup

Your repository is now configured to automatically push to GitHub after every commit!

## How It Works

A git post-commit hook has been set up that automatically pushes your changes to GitHub whenever you commit. This means:

1. **Make your changes** to any files
2. **Commit your changes**: `git commit -am "Your message"`
3. **Automatic push** - The hook will automatically push to GitHub
4. **Vercel auto-deploys** - Vercel will detect the push and deploy automatically

## Usage

### Option 1: Standard Git Commands
```bash
# Stage and commit
git add .
git commit -m "Update portfolio"

# The hook automatically pushes - you'll see the push output
```

### Option 2: Use the Helper Script
```bash
# Commit and push in one command
./commit-and-push.sh "Update portfolio"
```

## What Happens

When you commit, you'll see output like:
```
Pushing to GitHub...
✓ Successfully pushed to GitHub
Vercel will automatically deploy your changes
```

## Disabling Auto-Push

If you want to disable automatic pushing temporarily:
```bash
chmod -x .git/hooks/post-commit
```

To re-enable it:
```bash
chmod +x .git/hooks/post-commit
```

## Notes

- The hook only runs after commits (not on every file save)
- You still have full control - you choose when to commit
- If the push fails, the commit still succeeds (you can push manually later)
- Your GitHub token is stored in the hook file (keep this repository private if you're concerned about security)




