# TK ARTZ — Premium Handmade Pencil Portraits

A pixel-perfect, production-ready website built from Figma design specs.

## Tech Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Features

- Pixel-perfect Figma implementation
- Fully responsive (320px – 1920px+)
- Sticky navbar with hide-on-scroll-down / show-on-scroll-up
- Glassmorphism navigation with backdrop blur
- Smooth scroll animations with Framer Motion
- Animated gallery category filters
- Interactive pricing cards with hover lift
- 9 customer review cards with star ratings
- Contact cards with WhatsApp, Instagram, Email links
- SEO optimized (meta tags, Open Graph, sitemap, robots.txt)
- Semantic HTML with ARIA labels
- Keyboard navigation support

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Project Structure

```
tkartz-website/
├── public/
│   ├── assets/           # Images & media
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/       # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Gallery.tsx
│   │   ├── About.tsx
│   │   ├── Pricing.tsx
│   │   ├── Reviews.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── postcss.config.js
```

## Asset Replacement Guide

Replace these placeholder files in `public/assets/` with your actual images:

| Placeholder | Replace With | Used In |
|-------------|-------------|---------|
| `hero-bg.jpg` | Your hero background image | Hero section |
| `gallery-1.jpg` – `gallery-4.jpg` | Your portrait images | Gallery grid |
| `about-placeholder.jpg` | Your artist/about image | About section |

## Design Tokens (from Figma)

- **Primary Gradient**: `linear-gradient(90deg, #2F3F9E 0%, #5A2CA0 100%)`
- **Blue Gradient**: `linear-gradient(180deg, #0392F1 0%, #0290F0 32.42%, #32B2FC 100%)`
- **Font Primary**: Poppins
- **Font Script**: Brittany Signature
- **Font Secondary**: Sora
- **Card Shadow**: `0px 8px 26px rgba(103, 110, 144, 0.2)`
- **Nav Shadow**: Multi-layer shadow with backdrop blur
- **Border Radius Pill**: 80px
- **Border Radius Card**: 16px
- **Border Radius Section**: 24px

## Responsive Breakpoints

Designed and tested for:
- 1920px, 1600px, 1536px, 1440px, 1366px, 1280px
- 1024px (tablet landscape)
- 768px (tablet portrait)
- 480px, 390px, 375px, 360px, 320px (mobile)

## Contact

- **WhatsApp**: +91 7760196290
- **Instagram**: @thushanth_kulal
- **Email**: thushanthkulal123@gmail.com

---

© 2026 TK ARTZ. All rights reserved.
