# Studio Lepine Portfolio

Professional portfolio site for Studio Lepine (lepine.biz) - Multi-disciplinary creator specializing in design, security, development, woodworking, and systems engineering.

## Tech Stack

- **React** + **TypeScript** - Component-based UI
- **Vite** - Build tooling and dev server
- **Tailwind CSS** - Utility-first styling
- **React Router** - Client-side routing

## Development

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Deployment

This site is configured for deployment on **Cloudflare Pages**.

### Cloudflare Pages Setup

1. Connect your Git repository to Cloudflare Pages
2. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variables:** Node version 18+

The `public/_redirects` file is included to handle client-side routing.

### Manual Deployment

Build the project and deploy the `dist` folder:
```bash
npm run build
# Upload contents of dist/ to your hosting provider
```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Header.tsx
│   └── Footer.tsx
├── layouts/        # Layout components
│   └── Layout.tsx
├── pages/          # Route pages
│   ├── Home.tsx
│   ├── Work.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── types/          # TypeScript types
│   └── index.ts
├── App.tsx         # Root component with routing
├── main.tsx        # Application entry point
└── index.css       # Global styles & Tailwind
```

## Features

- Clean, minimal monochrome design
- Fully responsive mobile-first layout
- Fast loading and accessible
- SEO optimized with meta tags
- Single-page application with smooth routing
- Featured projects showcase
- Multi-disciplinary work portfolio
- Contact integration

## License

© 2025 Studio Lepine. All rights reserved.
