# JobDocket Website

A beautiful, modern landing page for the JobDocket Chrome extension built with React and Framer Motion.

## Features

- 🎨 Modern, responsive design matching the extension's color scheme
- ✨ Smooth animations powered by Framer Motion
- 📱 Fully responsive for all devices
- 🚀 Fast and optimized performance
- ♿ Accessible and SEO-friendly

## Sections

1. **Hero Section** - Eye-catching introduction with call-to-action
2. **About Us** - Information about JobDocket and its benefits
3. **Features** - Detailed feature list with icons
4. **How to Use** - Step-by-step guide
5. **Footer** - Links, social media, and legal information

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the website directory:
```bash
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Colors

Edit `src/index.css` to change the color scheme:
- `--primary`: Main brand color (#4361ee)
- `--primary-light`: Light variant (#4895ef)
- `--text-primary`: Main text color
- And more...

### Content

Edit the component files in `src/components/` to update:
- Text content
- Images
- Links
- Features list

## Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/jobdocket-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
3. Deploy: `npm run deploy`

## Technologies Used

- **React** - UI library
- **Framer Motion** - Animation library
- **CSS3** - Styling with CSS variables
- **HTML5** - Semantic markup

## License

Same as the main JobDocket project.

