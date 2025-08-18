# Tributary Market Vending Website

A modern, responsive React + Vite web app for a vending machine business, designed to closely match the homepage layout of [culinaryvending.com](https://www.culinaryvending.com/) with custom branding, assets, and content.

## Features
- Clean, modern layout with sticky navbar and clear branding
- Pixelated hero section with animated text panels
- Vending machine popout section with boxed features and central image
- Responsive design for desktop, tablet, and mobile
- Custom assets and color theme
- Modular React components for easy maintenance

## Project Structure
```
public/           # Static assets
src/
  assets/         # Images and graphics
  components/     # Modular React components (HeroSection, NavigationBar, etc.)
  utils/          # Custom hooks and utility functions
  App.jsx         # Main app component
  main.jsx        # Entry point
  theme.css       # Custom theme variables
```

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **View the site:**
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization
- Update images in `src/assets/` and `public/` for your brand
- Edit colors and theme in `src/theme.css`
- Modify content and layout in `src/components/`

## Responsive Design
- Hero section adapts for mobile, desktop, and ultra-wide screens
- Panels merge or stack based on screen size for optimal readability

## Areas for Improvement
- Refine header spacing for better visual balance
- Enhance background image contrast or add overlay
- Add more contrast/shadow to feature boxes
- Improve typography hierarchy
- Make call-to-action button larger and more distinct
- Add subtle animations for polish
- Expand footer content for more visual interest

## License
MIT

---

*Built with React, Vite, and love for modern web design.*