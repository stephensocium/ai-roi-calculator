#!/bin/bash

echo "🚀 AI Contact Center ROI Calculator - Quick Deploy Script"
echo "=========================================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - AI ROI Calculator"
    git branch -M main
    echo "✅ Git initialized"
    echo ""
    echo "📝 Next steps:"
    echo "1. Create a new repository on GitHub"
    echo "2. Run: git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git"
    echo "3. Run: git push -u origin main"
    echo "4. Go to vercel.com and import your GitHub repo"
else
    echo "✅ Git already initialized"
fi

echo ""
echo "🔧 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "🎯 Choose your deployment method:"
echo ""
echo "Option 1: GitHub + Vercel"
echo "  1. Push to GitHub (if not done already)"
echo "  2. Import on vercel.com"
echo ""
echo "Option 2: Vercel CLI"
echo "  npm i -g vercel"
echo "  vercel --prod"
echo ""
echo "Option 3: Test locally first"
echo "  npm run dev"
echo ""
