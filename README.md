# Summit Land Clearing LLC - Website

Professional land clearing, forestry mulching, and site preparation services in Northeast Ohio.

## 🌐 Live Site

**Development:** [View Preview](https://summit-land-clearing.manus.space)  
**Production:** (Will be updated after Netlify deployment)

## 📋 Overview

This is a modern, responsive one-page marketing website built with React 19, TypeScript, and Tailwind CSS. The site is designed to convert visitors into leads through clear calls-to-action, professional design, and comprehensive service information.

### Features

- **Hero Section** - Compelling headline with CTAs and trust badges
- **Services** - 5 detailed service cards (Forestry Mulching, Land Clearing, Brush Removal, Stump Grinding, Driveway Prep)
- **Why Choose Us** - Professional credentials and stats
- **Service Area** - Northeast Ohio coverage map
- **Gallery** - Before/after project showcase
- **Reviews** - Customer testimonials
- **Contact Form** - Netlify Forms integration for quote requests
- **Mobile Responsive** - Works perfectly on all devices
- **SEO Optimized** - Proper meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 22.x or higher
- pnpm (recommended) or npm

### Installation

1. Clone this repository:
```bash
git clone https://github.com/YOUR-USERNAME/summit-land-clearing-site.git
cd summit-land-clearing-site
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser to `http://localhost:3000`

## 🛠️ Development

### Project Structure

```
summit-land-clearing/
├── client/
│   ├── public/           # Static assets (images, favicon)
│   │   ├── hero-bg.jpeg
│   │   ├── equipment.jpg
│   │   ├── before-after-1.webp
│   │   ├── before-after-2.webp
│   │   └── before-after-3.webp
│   ├── src/
│   │   ├── components/   # React components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── ServiceArea.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Reviews.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css     # Global styles & Tailwind config
│   └── index.html        # HTML entry point with SEO meta tags
├── package.json
└── README.md
```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally

## ✏️ How to Update Content

### Update Text Content

All text content is in the component files. Here's where to find common updates:

**Business Name/Logo:**
- File: `client/src/components/Navbar.tsx` (line 40-43)
- File: `client/src/components/Footer.tsx` (line 15-18)

**Phone Number:**
- Search for `989-898-8329` across all files and replace

**Email Address:**
- File: `client/src/components/Contact.tsx` (line 143)
- File: `client/src/components/Footer.tsx` (line 60)

**Service Descriptions:**
- File: `client/src/components/Services.tsx` (lines 7-55)

**Service Area Cities:**
- File: `client/src/components/ServiceArea.tsx` (lines 5-14)

**Reviews/Testimonials:**
- File: `client/src/components/Reviews.tsx` (lines 6-34)

**Business Hours:**
- File: `client/src/components/Contact.tsx` (lines 165-177)

### Update Images

1. Add your new image to `client/public/` folder
2. Give it a descriptive name (e.g., `my-project-before.jpg`)
3. Update the image reference in the component:

**Hero Background:**
- File: `client/src/components/Hero.tsx` (line 18)
- Replace `/hero-bg.jpeg` with your image path

**Equipment/Why Choose Us Image:**
- File: `client/src/components/WhyChooseUs.tsx` (line 65)
- Replace `/equipment.jpg` with your image path

**Gallery Images:**
- File: `client/src/components/Gallery.tsx` (lines 5-19)
- Update the `before` property with your image paths

### Update Colors

The brand colors are defined in `client/src/index.css` (lines 45-79):

- **Primary (Dark Forest Green):** `--primary: oklch(0.24 0.08 165);`
- **Secondary (Orange Accent):** `--secondary: oklch(0.68 0.18 45);`
- **Background:** `--background: oklch(0.96 0.002 264);`

## 📦 Building for Production

1. Build the project:
```bash
pnpm build
```

2. The production files will be in `client/dist/`

3. Test the production build locally:
```bash
pnpm preview
```

## 🚀 Deployment to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select this repository
5. Configure build settings:
   - **Base directory:** Leave empty
   - **Build command:** `pnpm build`
   - **Publish directory:** `client/dist`
6. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
netlify deploy --prod
```

### Configure Netlify Forms

The contact form is already set up for Netlify Forms. After deployment:

1. Go to your Netlify site dashboard
2. Navigate to "Forms" tab
3. You'll see form submissions appear here
4. Set up email notifications in Form settings

### Custom Domain

To use a custom domain (e.g., summitlandclearing.com):

1. In Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow instructions to update your DNS records
4. Netlify will automatically provision SSL certificate

## 🔄 How to Update the Live Site

After making changes:

1. **Commit your changes:**
```bash
git add .
git commit -m "Update services section"
```

2. **Push to GitHub:**
```bash
git push origin main
```

3. **Automatic deployment:**
   - Netlify will automatically detect the push
   - It will rebuild and redeploy your site
   - Usually takes 1-2 minutes

## 📱 Mobile Testing

The site is fully responsive. To test:

1. Open Chrome DevTools (F12)
2. Click the device toolbar icon (or Ctrl+Shift+M)
3. Test different device sizes

## 🔍 SEO

SEO meta tags are configured in `client/index.html`:

- Title tag
- Meta description
- Open Graph tags for social sharing
- Keywords
- Canonical URL

Update these to match your actual domain after deployment.

## 📞 Support

For questions about updating the site:

1. Check this README first
2. Look at the component files - they have clear structure
3. Test changes locally with `pnpm dev` before deploying

## 📄 License

© 2025 Summit Land Clearing LLC. All rights reserved.

---

**Built with:** React 19, TypeScript, Tailwind CSS 4, Vite  
**Deployed on:** Netlify  
**Version Control:** GitHub
