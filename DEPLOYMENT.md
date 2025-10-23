# 🚀 Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## Prerequisites

Before deploying, make sure:
- Your code is committed to a Git repository (preferably GitHub)
- All dependencies are listed in `package.json`
- The build command works locally: `npm run build`

## Option 1: Vercel (Recommended - Easiest)

Vercel is the easiest and fastest way to deploy your React portfolio.

### Steps:

1. **Install Vercel CLI** (Optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via GitHub** (Easier)
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your portfolio repository
   - Vercel will auto-detect settings:
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"
   - Done! Your site will be live in ~1 minute

3. **Deploy via CLI** (Alternative)
   ```bash
   cd portfolio
   vercel
   ```
   - Follow the prompts
   - Your site will be deployed instantly

### Custom Domain on Vercel:
- Go to your project settings
- Navigate to "Domains"
- Add your custom domain
- Update DNS records as instructed

## Option 2: Netlify

Netlify is another excellent option with similar ease of use.

### Steps:

1. **Deploy via GitHub**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

2. **Deploy via Drag & Drop**
   ```bash
   npm run build
   ```
   - Go to [netlify.com/drop](https://netlify.com/drop)
   - Drag the `dist` folder
   - Your site is live!

### Custom Domain on Netlify:
- Go to "Domain settings"
- Click "Add custom domain"
- Follow DNS configuration instructions

## Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts and homepage:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts**
   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/', // Add this line
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to "Pages"
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

Your site will be live at: `https://yourusername.github.io/portfolio`

## Option 4: Firebase Hosting

Google's fast and secure hosting solution.

### Steps:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Select/create a Firebase project
   - Set public directory: `dist`
   - Configure as single-page app: Yes
   - Don't overwrite index.html

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## Option 5: AWS S3 + CloudFront

For enterprise-grade hosting with full AWS features.

### Steps:

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Create S3 Bucket**
   - Go to AWS S3 Console
   - Create bucket with public access
   - Enable static website hosting

3. **Upload dist folder**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name --delete
   ```

4. **Set up CloudFront** (Optional, for CDN)
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure caching rules

## Post-Deployment Checklist

After deploying, verify:

- ✅ All pages load correctly
- ✅ Dark mode toggle works
- ✅ All links (social, projects, email) work
- ✅ Images and icons load properly
- ✅ Mobile responsiveness
- ✅ Contact form submits to email correctly
- ✅ SEO meta tags are present
- ✅ Custom domain is configured (if applicable)

## Environment Variables

If you add environment variables in the future:

1. Create `.env` file locally:
   ```
   VITE_API_KEY=your_api_key
   ```

2. Add environment variables in your hosting platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Build & Deploy → Environment
   - **GitHub Pages**: Use GitHub Secrets (Actions required)

3. Access in code:
   ```typescript
   const apiKey = import.meta.env.VITE_API_KEY;
   ```

## Updating Your Site

### For Vercel/Netlify (Git-based):
Just push to your main branch:
```bash
git add .
git commit -m "Update portfolio"
git push
```
Your site will automatically redeploy!

### For GitHub Pages:
```bash
npm run deploy
```

### For Manual Deploys:
```bash
npm run build
# Then re-upload/deploy the dist folder
```

## Performance Optimization

After deployment, consider:

1. **Enable Compression**
   - Most platforms (Vercel, Netlify) do this automatically

2. **Add Analytics**
   - Google Analytics
   - Vercel Analytics
   - Plausible Analytics

3. **Optimize Images**
   - Use WebP format
   - Compress images before uploading
   - Consider lazy loading

4. **Check Performance**
   - Run Lighthouse audit
   - Test on [PageSpeed Insights](https://pagespeed.web.dev/)

## Troubleshooting

### Build Fails
- Check Node version: `node --version` (should be 18+)
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run build`

### 404 on Routes
- Ensure your hosting platform is configured for SPA
- Add redirect rules if needed

### Dark Mode Not Persisting
- Check localStorage is enabled in browser
- Verify no CORS issues in console

## Need Help?

If you encounter issues:
1. Check the hosting platform's documentation
2. Review build logs for errors
3. Test the build locally: `npm run preview`
4. Check browser console for errors

---

**Happy Deploying! 🚀**

