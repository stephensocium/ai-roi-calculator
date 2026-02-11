# AI Contact Center ROI Calculator

Calculate annual labor cost savings from AI automation in contact centers.

## 🚀 Quick Deploy to Vercel (5 Minutes)

### Method 1: GitHub + Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   cd ai-roi-calculator
   git init
   git add .
   git commit -m "Initial commit - AI ROI Calculator"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/ai-roi-calculator.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite - just click "Deploy"
   - Done! Your site will be live at `https://your-project.vercel.app`

### Method 2: Vercel CLI (Even Faster)

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd ai-roi-calculator

# Deploy (follow prompts)
vercel

# For production deployment
vercel --prod
```

### Method 3: Direct Vercel Upload

1. Go to https://vercel.com/new
2. Drag and drop the `ai-roi-calculator` folder
3. Click Deploy
4. Done!

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization

Edit `/src/App.jsx` to customize:
- Default values
- Company branding
- Additional metrics
- Styling and colors

## 🌐 Custom Domain

In Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain (e.g., `roi.sociumit.com`)
4. Update DNS records as instructed

## 📊 Features

- ✅ Real-time ROI calculations
- ✅ Adjustable containment rate slider
- ✅ FTE savings calculation
- ✅ Executive summary generation
- ✅ Fully responsive design
- ✅ No backend required - runs entirely in browser

## 🔒 Environment Variables

This calculator runs entirely client-side and requires no environment variables or backend services.

## 📱 Embedding

To embed in another site:

```html
<iframe 
  src="https://your-calculator.vercel.app" 
  width="100%" 
  height="1200px" 
  frameborder="0"
></iframe>
```

## 🎨 Branding

Update the footer in `src/App.jsx` line 347:
```jsx
<p>Socium IT | AI Contact Center ROI Calculator | {new Date().getFullYear()}</p>
```

## 📧 Support

Questions? Contact Stephen Hancock II at Socium IT.

---

**Built with:** React + Vite + Tailwind CSS + Lucide Icons
