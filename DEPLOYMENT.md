# FlowBoard Deployment Guide

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js apps (it's made by the Next.js team).

### Steps:

1. **Push your code to GitHub** ✓ (Already done!)

2. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account (free)

3. **Import your repository**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose `qrisr/projectmanagementtool`
   - Click "Import"

4. **Configure (use defaults)**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Click "Deploy"

5. **Done!**
   - Your app will be live at: `https://your-project.vercel.app`
   - Every push to your branch auto-deploys
   - Production deploys from main branch

---

## Alternative: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. "New site from Git" → Select your repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy

---

## Alternative: Static Export for GitHub Pages

If you want to use GitHub Pages, you need to export as static:

1. Update `next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

2. Add to `package.json`:
```json
"scripts": {
  "build": "next build",
  "export": "next export"
}
```

3. Build: `npm run build`

4. Deploy the `out` folder to GitHub Pages

**Note:** Static export has limitations (no API routes, no server-side rendering)

---

## Automated Deployment via GitHub Actions

A GitHub Actions workflow has been created at `.github/workflows/deploy.yml` that will:
- Automatically build and test on every push
- Deploy to Vercel on main branch merges

---

## Current Status

- ✅ Code pushed to: `claude/marketing-plan-content-011CUwox291Lr9w8aHGabXwZ`
- ✅ Vercel configuration ready
- ⏳ Waiting for Vercel connection
- ⏳ Waiting for main branch merge

## Recommended Next Steps

1. **Merge to main branch** (or create it if it doesn't exist)
2. **Connect to Vercel** for automatic deployments
3. **Set custom domain** (optional)

## Environment Variables

No environment variables needed for basic deployment!
FlowBoard works entirely client-side with local storage.

## Production URLs

Once deployed, you'll have:
- **Landing Page:** `https://your-app.vercel.app/landing`
- **Main App:** `https://your-app.vercel.app/`

---

**Need help?** Reply with questions!
