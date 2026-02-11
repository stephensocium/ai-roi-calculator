# 🎯 DEPLOYMENT GUIDE - AI ROI Calculator

## ⚡ FASTEST METHOD - Vercel CLI (3 minutes)

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Navigate to Project
```bash
cd ai-roi-calculator
```

### Step 3: Deploy
```bash
vercel --prod
```

That's it! Vercel will:
- ✅ Auto-detect it's a Vite project
- ✅ Install dependencies
- ✅ Build the project
- ✅ Deploy to a live URL
- ✅ Give you a custom vercel.app domain

**Your calculator will be live at:** `https://ai-roi-calculator-xyz.vercel.app`

---

## 🐙 RECOMMENDED METHOD - GitHub + Vercel (5 minutes)

### Step 1: Create GitHub Repository
1. Go to https://github.com/new
2. Name it: `ai-roi-calculator`
3. Make it public or private (your choice)
4. Don't initialize with README (we already have one)
5. Click "Create repository"

### Step 2: Push Your Code
```bash
cd ai-roi-calculator
git init
git add .
git commit -m "Initial commit - AI ROI Calculator"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ai-roi-calculator.git
git push -u origin main
```

### Step 3: Deploy on Vercel
1. Go to https://vercel.com (sign in with GitHub)
2. Click "Add New Project"
3. Select your `ai-roi-calculator` repository
4. Vercel auto-detects everything - just click "Deploy"
5. Wait 30 seconds... Done!

**Benefits:**
- ✅ Automatic deployments on every git push
- ✅ Preview deployments for branches
- ✅ Easy rollbacks
- ✅ Free SSL certificate
- ✅ Global CDN

---

## 🎨 CUSTOM DOMAIN SETUP

### On Vercel:
1. Go to your project → Settings → Domains
2. Add domain: `roi.sociumit.com` (or whatever you want)
3. Vercel gives you DNS records

### On Your DNS Provider (like Cloudflare):
**For Subdomain (roi.sociumit.com):**
```
Type: CNAME
Name: roi
Value: cname.vercel-dns.com
```

**For Root Domain (sociumit.com):**
```
Type: A
Name: @
Value: 76.76.21.21
```

Wait 5-10 minutes for DNS propagation. Done!

---

## 🧪 TEST LOCALLY FIRST

```bash
cd ai-roi-calculator
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

---

## 🔧 ALTERNATIVE HOSTING OPTIONS

### Option 1: Netlify
1. Drag & drop the folder at https://app.netlify.com/drop
2. Done! Instant deployment.

### Option 2: GitHub Pages (Free)
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://YOUR-USERNAME.github.io/ai-roi-calculator",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Run: `npm run deploy`

### Option 3: Embed on Existing Socium IT Site
If you already have a website:

```html
<iframe 
  src="https://your-calculator.vercel.app" 
  width="100%" 
  height="1200px" 
  frameborder="0"
  style="border: none; border-radius: 8px;"
></iframe>
```

---

## 🎯 CUSTOMIZATION TIPS

### Update Branding
Edit `src/App.jsx` line 347:
```jsx
<p>Socium IT | AI Contact Center ROI Calculator | {new Date().getFullYear()}</p>
```

### Change Colors
The calculator uses Tailwind CSS. Edit class names in `src/App.jsx`:
- `bg-blue-600` → `bg-green-600` (change blue to green)
- `text-slate-800` → `text-gray-800` (change text color)

### Add Logo
1. Add your logo to `public/logo.png`
2. In `src/App.jsx`, add:
```jsx
<img src="/logo.png" alt="Socium IT" className="h-12 mb-4" />
```

---

## 📊 ANALYTICS (Optional)

### Add Google Analytics
1. Get your GA4 tracking ID
2. Add to `index.html` in `<head>`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🆘 TROUBLESHOOTING

**Build fails?**
- Run `npm install` again
- Make sure Node.js v16+ is installed

**Blank page after deploy?**
- Check browser console for errors
- Verify all files are committed to git

**Need help?**
- Vercel docs: https://vercel.com/docs
- GitHub issues: Create issue in your repo

---

## 🎉 YOU'RE DONE!

Your calculator is now live and ready to impress clients!

**Share it:**
- Email: "Check out our ROI calculator: https://..."
- LinkedIn: Screenshot + link
- Proposals: Embed the live calculator
- Demos: Pull it up on your phone/laptop

**Update it:**
Just push to GitHub and Vercel auto-deploys the changes!
