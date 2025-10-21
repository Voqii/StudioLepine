import type { Project } from '../types';

/**
 * Portfolio projects data - digital and physical work samples
 * Organized by category: digital (web dev, logos, graphic design, AI/research, security)
 * and physical (woodworking, engineering)
 */
export const projects: Project[] = [
  // Web Development Projects
  {
    id: 'studio-lepine-website',
    title: 'Studio Lepine Portfolio',
    category: 'digital',
    subcategory: 'Mobile & Web Development',
    description: 'Personal portfolio website built with React, TypeScript, and Tailwind CSS. Features responsive design, smooth animations with Framer Motion, and optimized performance.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    imageUrl: '/images/projects/web-dev/studio-lepine-home-page.png',
  },
  {
    id: 'learn-quickly-network',
    title: 'Learn Quickly Network',
    category: 'digital',
    subcategory: 'Mobile & Web Development',
    description: 'Educational platform designed for rapid skill acquisition and knowledge sharing. Clean, user-friendly interface focused on learning efficiency.',
    tags: ['React', 'Education', 'UI/UX', 'Web'],
    imageUrl: '/images/projects/web-dev/learn-quickly-network-home-page.png',
  },
  {
    id: 'scwcs-website',
    title: 'SCWCS Window Cleaning',
    category: 'digital',
    subcategory: 'Mobile & Web Development',
    description: 'Professional service website for Saskatchewan window cleaning company. Features booking integration, service showcase, and responsive design.',
    tags: ['Web', 'Business', 'Responsive', 'SEO'],
    imageUrl: '/images/projects/web-dev/scwcs-window-cleaning-home-page.png',
  },

  // FSM App Projects
  {
    id: 'sergio-fsm-app',
    title: 'Sergio FSM - Field Service Management',
    category: 'digital',
    subcategory: 'Mobile & Web Development',
    description: 'Full-stack field service management solution with React web application, Swift iOS app, and Supabase backend. Features real-time synchronization, offline support, and comprehensive service tracking.',
    tags: ['React', 'TypeScript', 'Swift', 'Supabase', 'iOS', 'Real-time'],
    imageUrl: '/images/projects/fsm-app/sergio-home-page-react.png',
    images: [
      '/images/projects/fsm-app/sergio-home-page-react.png',
      '/images/projects/fsm-app/sergio-login-page-react.png',
      '/images/projects/fsm-app/sergio-routing-page-react.png',
      '/images/projects/fsm-app/sergio-loading-screen-ios.PNG',
    ],
  },

  // Palliative Care Booking
  {
    id: 'silverwings-palliative-booking',
    title: 'Silverwings Palliative Care Booking',
    category: 'digital',
    subcategory: 'Community Impact',
    description: 'Pro bono scheduling and coordination platform designed for palliative care services. Simplifies appointment management and improves care coordination for patients and healthcare providers.',
    tags: ['React', 'Community', 'Healthcare', 'Scheduling', 'SimplyBook'],
    imageUrl: '/images/projects/palliative-booking/silverwings-home-page.png',
    images: [
      '/images/projects/palliative-booking/silverwings-home-page.png',
      '/images/projects/palliative-booking/silverwings-simplybook.png',
    ],
  },

  // Logos and Business Cards
  {
    id: 'studio-lepine-logo',
    title: 'Studio Lepine Branding',
    category: 'digital',
    subcategory: 'Logo & Brand Design',
    description: 'Professional logo and brand identity for Studio Lepine. Clean, modern design that represents the intersection of digital and physical craftsmanship.',
    tags: ['Logo Design', 'Branding', 'Vector', 'Identity'],
    imageUrl: '/images/projects/logos-and-business-cards/logos/Studio-Lepine-Logo-Trans-Black.png',
  },
  {
    id: 'snow-away-branding',
    title: 'Snow Away Complete Branding',
    category: 'digital',
    subcategory: 'Logo & Brand Design',
    description: 'Comprehensive branding package including logo design and business card layout for snow removal service. Bold, professional aesthetic with seasonal color palette.',
    tags: ['Logo Design', 'Business Cards', 'Branding', 'Print'],
    imageUrl: '/images/projects/logos-and-business-cards/logos/snow-away-high-resolution-logo-transparent.png',
    images: [
      '/images/projects/logos-and-business-cards/logos/snow-away-high-resolution-logo-transparent.png',
      '/images/projects/logos-and-business-cards/logos/snow-away-high-resolution-logo.png',
      '/images/projects/logos-and-business-cards/business-cards/snow-away-business-card-design.png',
    ],
  },
  {
    id: 'sergio-app-logo',
    title: 'Sergio App iOS Icon',
    category: 'digital',
    subcategory: 'Logo & Brand Design',
    description: 'iOS app icon design for Sergio field service management application. Modern, recognizable design optimized for mobile platforms.',
    tags: ['App Icon', 'iOS', 'Logo Design', 'Mobile'],
    imageUrl: '/images/projects/logos-and-business-cards/logos/sergio-app-logo-ios.png',
  },
  {
    id: 'scwcs-logo',
    title: 'SCWCS Logo Design',
    category: 'digital',
    subcategory: 'Logo & Brand Design',
    description: 'Professional logo for Saskatchewan window cleaning company. Clean design emphasizing clarity and professionalism.',
    tags: ['Logo Design', 'Branding', 'Service Industry'],
    imageUrl: '/images/projects/logos-and-business-cards/logos/scwcs-logo-design.png',
  },
  {
    id: 'learn-tech-quickly-logo',
    title: 'Learn Tech Quickly Logo',
    category: 'digital',
    subcategory: 'Logo & Brand Design',
    description: 'Educational technology brand logo combining modern design with approachable aesthetics for learning platform.',
    tags: ['Logo Design', 'Education', 'Tech', 'Branding'],
    imageUrl: '/images/projects/logos-and-business-cards/logos/learn-tech-quickly-logo.png',
  },
  {
    id: 'thecalmshell-logo',
    title: 'TheCalmShell Logo',
    category: 'digital',
    subcategory: 'Logo & Brand Design',
    description: 'Minimalist logo design for wellness and mindfulness brand. Soft, calming aesthetic with shell motif.',
    tags: ['Logo Design', 'Wellness', 'Minimalist', 'Branding'],
    imageUrl: '/images/projects/logos-and-business-cards/logos/thecalmshell-logo.png',
  },

  // Graphic Design Projects
  {
    id: 'scwcs-discount-ad',
    title: 'SCWCS Promotional Advertisement',
    category: 'digital',
    subcategory: 'Graphic Design',
    description: 'Eye-catching discount advertisement for window cleaning services. Bold typography and clear call-to-action.',
    tags: ['Graphic Design', 'Marketing', 'Advertising', 'Print'],
    imageUrl: '/images/projects/graphic-design/promo-material/scwcs-discount-advert.png',
  },
  {
    id: 'scwcs-door-hanger',
    title: 'Promotional Materials',
    category: 'digital',
    subcategory: 'Graphic Design',
    description: 'Direct marketing door hanger design for local service promotion. Informative layout with contact details and service highlights.',
    tags: ['Graphic Design', 'Print', 'Marketing', 'Local'],
    imageUrl: '/images/projects/graphic-design/promo-material/scwcs-door-hanger-design.png',
    images: [
      '/images/projects/graphic-design/promo-material/scwcs-door-hanger-design.png',
      '/images/projects/graphic-design/promo-material/scwcs-discount-advert.png',
      '/images/projects/graphic-design/promo-material/travel-agent-ad.png',
    ],
  },
  {
    id: 'scwcs-social-banner',
    title: 'SCWCS Social Media Banner',
    category: 'digital',
    subcategory: 'Graphic Design',
    description: 'Professional social media banner design for business profiles. Consistent branding across digital platforms.',
    tags: ['Social Media', 'Graphic Design', 'Digital', 'Branding'],
    imageUrl: '/images/projects/graphic-design/social-media/scwcs-social-media-banner.png',
  },
  {
    id: 'travel-agent-ad',
    title: 'Travel Agency Advertisement',
    category: 'digital',
    subcategory: 'Graphic Design',
    description: 'Vibrant travel agency promotional design with aspirational imagery and compelling copy.',
    tags: ['Graphic Design', 'Travel', 'Advertising', 'Marketing'],
    imageUrl: '/images/projects/graphic-design/promo-material/travel-agent-ad.png',
  },

  // Woodworking Projects
  {
    id: 'squirrel-picnic-table',
    title: 'Squirrel Picnic Table',
    category: 'physical',
    subcategory: 'Custom Woodworking',
    description: 'Whimsical miniature picnic table designed for backyard wildlife. Crafted with precision joinery and weather-resistant finish for outdoor durability.',
    tags: ['Woodworking', 'Outdoor', 'Wildlife', 'Craftsmanship'],
    imageUrl: '/images/projects/custom-woodworking/squirrell-picnic-table.png',
  },
  {
    id: 'cedar-planter',
    title: 'Custom Cedar Planter',
    category: 'physical',
    subcategory: 'Custom Woodworking',
    description: 'Handcrafted cedar planter box featuring traditional joinery and weather-resistant construction. Designed for outdoor durability while maintaining aesthetic appeal.',
    tags: ['Woodworking', 'Cedar', 'Outdoor', 'Craftsmanship'],
    imageUrl: '/images/projects/custom-woodworking/cedar-planter.png',
  },
  {
    id: 'custom-cutting-board',
    title: 'Custom Cutting Board',
    category: 'physical',
    subcategory: 'Custom Woodworking',
    description: 'Handcrafted cutting board made from premium hardwoods. Features edge-grain construction, food-safe finish, and ergonomic design for daily kitchen use.',
    tags: ['Woodworking', 'Kitchen', 'Hardwood', 'Functional'],
    imageUrl: '/images/projects/custom-woodworking/cutting-board.png',
  },

  // AI, Research & Security Projects
  {
    id: 'llm-behavioral-architecture',
    title: 'LLM Behavioral Architecture System',
    category: 'digital',
    subcategory: 'AI & Research',
    description: 'Proprietary verification-first architecture achieving 98-100% accuracy in LLM interactions through system-level behavioral enforcement. 200+ hours of adversarial testing across 37 iterations. Zero per-request token overhead compared to industry standard prompt engineering approaches that cost $7.50 per 1000 requests. Architectural solution preventing hallucination rather than managing it.',
    tags: ['AI', 'Research', 'Architecture', 'LLM', 'Verification', 'Testing'],
  },
  {
    id: 'security-research',
    title: 'Security Research & Bug Bounties',
    category: 'digital',
    subcategory: 'Security',
    description: 'Active participation in bug bounty programs and responsible vulnerability disclosure. Focus on web application security, authentication systems, and API security.',
    tags: ['Security', 'Research', 'Bug Bounties', 'Pentesting'],
  },
  {
    id: 'systems-engineering',
    title: 'Systems Engineering',
    category: 'physical',
    subcategory: 'Engineering & Systems',
    description: 'Custom solutions for mechanical systems, automation, and infrastructure projects. Bridging the gap between digital control systems and physical implementation.',
    tags: ['Engineering', 'Systems', 'Automation', 'Infrastructure'],
  },
];

/**
 * Helper functions for filtering projects
 */
export const getDigitalProjects = () => projects.filter(p => p.category === 'digital');
export const getPhysicalProjects = () => projects.filter(p => p.category === 'physical');
export const getProjectsBySubcategory = (subcategory: string) =>
  projects.filter(p => p.subcategory === subcategory);
