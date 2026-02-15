# E-Commerce Portfolio - React TypeScript

A professional portfolio website with an e-commerce theme, built with React and TypeScript.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📦 What's Included

- ✅ E-Commerce themed design
- ✅ TypeScript for type safety
- ✅ Shopping cart functionality
- ✅ Responsive design
- ✅ Professional layout with humor
- ✅ Your photo in About section

## 🎯 Features

1. **Shopping Cart System**
   - Add skills to "interests cart"
   - Track visitor engagement
   - Checkout leads to contact form

2. **Sections**
   - Hero with call-to-action
   - About with your photo
   - Services (your skills)
   - Portfolio showcase
   - Professional experience
   - Contact form

3. **E-Commerce Elements**
   - Product cards for skills
   - Star ratings
   - "Add to Cart" buttons
   - Interest level tracking

## 📝 Customization

### Update Your Information

Edit `src/App.tsx`:

1. **Services** (lines 30-75): Your skills
2. **Projects** (lines 77-98): Your portfolio
3. **Experience** (lines 100-142): Your work history
4. **Contact**: Update email/links in contact section

### Change Colors

Edit `src/App.css`:

```css
:root {
  --primary: #2563eb;    /* Main brand color */
  --secondary: #7c3aed;  /* Secondary color */
  /* ... more colors */
}
```

### Add Your Photo

Your photo is already included! It's at `/public/photo.jpeg`

## 🌐 Deploy to Render

### Quick Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-app.git
   git push -u origin main
   ```

2. **Deploy on Render**
   - Go to render.com
   - Sign in with GitHub
   - New → Web Service
   - Connect repository
   - Build Command: `npm install && npm run build`
   - Start Command: `npx serve -s build -l $PORT`
   - Click "Create Web Service"

See **DEPLOYMENT_GUIDE.md** for detailed instructions!

## 📚 Documentation

- **README.md** (this file) - Overview
- **DEPLOYMENT_GUIDE.md** - Complete deployment guide
- **QUICK_START.md** - Fast setup instructions

## 🛠️ Tech Stack

- React 18
- TypeScript 4.9
- CSS3
- Create React App

## 📄 License

MIT - Use freely for your portfolio!

---

Built with ❤️ and TypeScript
