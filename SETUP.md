# Quick Setup Guide

## Install Dependencies

```bash
cd website
npm install
```

## Run Development Server

```bash
npm start
```

The website will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `build` folder.

## Customize

### Update Images
Replace placeholder images in the components with your own:
- Hero section mockup
- Feature icons (currently emojis - can be replaced with SVG icons)
- Any other visual elements

### Update Links
Update all links in the components:
- Chrome Web Store link
- GitHub repository link
- Social media links
- Email address (already set to abdulmoiz3140@gmail.com)

### Update Content
Edit the text content in:
- `src/components/Hero.js` - Hero section text
- `src/components/About.js` - About section
- `src/components/Features.js` - Features list
- `src/components/HowToUse.js` - Step-by-step guide
- `src/components/Footer.js` - Footer links and text

## Color Scheme

The website uses the same color scheme as the extension:
- Primary: #4361ee (Blue)
- Primary Light: #4895ef
- Success: #4cc9f0
- Text: #1d3557

All colors are defined in `src/index.css` as CSS variables.

## Deploy

### Option 1: Netlify (Easiest)
1. Build: `npm run build`
2. Drag `build` folder to [Netlify](https://netlify.com)

### Option 2: Vercel
```bash
npm install -g vercel
vercel
```

### Option 3: GitHub Pages
See the main README.md for GitHub Pages deployment instructions.

