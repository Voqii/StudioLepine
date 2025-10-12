# Studio Lepine

> Personal portfolio and blog for Cody Lepine - Multi-disciplinary creator specializing in design, security, development, woodworking, and systems engineering.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Live Site:** [lepine.biz](https://lepine.biz)

---

## About

Studio Lepine is a portfolio site showcasing my work across both digital and physical domains. From full-stack web applications and security research to custom woodworking and systems engineering—this site represents the breadth of my capabilities.

This isn't about doing everything for the sake of it. It's about applying the right approach to each problem, whether that means writing code or building with my hands.

---

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Routing:** React Router v6
- **Fonts:** Adobe Fonts (Lexia Mono, Address Sans Pro)
- **Hosting:** Cloudflare Pages
- **Domain:** lepine.biz (via Cloudflare Registrar)

---

## Features

- ✅ **Minimal, fast, accessible** - Performance-first design
- ✅ **No tracking or analytics** - Privacy-respecting
- ✅ **Blog system** - Markdown-based content with auto-formatting
- ✅ **Project showcase** - Digital and physical work categorization
- ✅ **Security hardened** - CSP headers, SRI, HTTPS-only
- ✅ **Fully responsive** - Mobile-first design
- ✅ **SEO optimized** - Sitemap, robots.txt, meta tags
- ✅ **Background texture** - Subtle grain for depth without distraction

---

## Project Structure

```
studiolepine/
├── public/
│   ├── images/
│   │   ├── projects/     # Project screenshots
│   │   ├── blog/         # Blog post images
│   │   └── about/        # About page images
│   ├── _headers          # Cloudflare Pages security headers
│   ├── robots.txt        # Search engine directives
│   └── sitemap.xml       # SEO sitemap
├── src/
│   ├── components/       # Reusable React components
│   ├── data/            # Blog posts and content
│   ├── layouts/         # Page layout wrappers
│   ├── pages/           # Route pages
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Animation configs
│   └── index.css        # Global styles + Tailwind
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

```bash
# Clone the repository
git clone https://github.com/Voqii/studiolepine.git
cd studiolepine

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Adding Blog Posts

Blog posts are stored in `src/data/blogPosts.ts`. To add a new post:

1. Open `src/data/blogPosts.ts`
2. Add a new entry to the `blogPosts` array:

```typescript
{
  id: 'unique-post-id',
  title: 'Your Post Title',
  date: '2025-10-12',
  excerpt: 'A short summary that appears on the listing page',
  content: `
    <h2>Your Heading</h2>
    <p>Your content with HTML tags for formatting.</p>
    <ul>
      <li>Bullet point 1</li>
      <li>Bullet point 2</li>
    </ul>
  `,
  tags: ['Tag1', 'Tag2'],
  readTime: '5 min read',
}
```

3. The blog page will automatically update

---

## Adding Project Images

Place images in the appropriate folder under `public/images/projects/`:

```
public/images/projects/
├── fsm-app/
├── palliative-booking/
├── security-research/
├── custom-woodworking/
└── systems-engineering/
```

Reference them in your project data using `/images/projects/{project-id}/image.jpg`

---

## Deployment

This site is deployed on Cloudflare Pages with automatic builds from the main branch.

**Deploy Configuration:**
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 18+

Security headers are automatically applied via the `public/_headers` file.

---

## Security

- **Content Security Policy (CSP)** - Restricts resource loading
- **HSTS** - Forces HTTPS connections
- **No tracking/cookies** - Privacy-first approach
- **XSS Protection** - Browser-level XSS filtering enabled
- **Frame-Options: DENY** - Prevents clickjacking

See `public/_headers` for full security configuration.

---

## License

MIT License - See LICENSE file for details

---

## Contact

**Cody Lepine**
Email: [cody@lepine.biz](mailto:cody@lepine.biz)
Location: Saskatchewan, Canada
GitHub: [@Voqii](https://github.com/Voqii/)
LinkedIn: [cody-lepine](https://www.linkedin.com/in/cody-lepine-19222b38a/)

---

## Acknowledgments

Built in approximately 2 hours with assistance from Claude AI (Anthropic). This project demonstrates the power of AI-assisted development for rapid prototyping and professional web presence creation.

The logo design incorporates the "SL" monogram (my father's initials, Serge Lepine) with barbed wire elements referencing the French origin of "Lepine" (l'épine - "the thorn").

---

**Last Updated:** October 12, 2025
