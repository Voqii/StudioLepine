import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../types';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { staggerContainer, staggerItem } from '../utils/animations';

const projects: Project[] = [
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

  // AI & Research Projects
  {
    id: 'llm-behavioral-architecture',
    title: 'LLM Behavioral Architecture System',
    category: 'digital',
    subcategory: 'AI & Research',
    description: 'Proprietary verification-first architecture achieving 98-100% accuracy in LLM interactions through system-level behavioral enforcement. 200+ hours of adversarial testing across 37 iterations. Zero per-request token overhead compared to industry standard prompt engineering approaches that cost $7.50 per 1000 requests. Architectural solution preventing hallucination rather than managing it.',
    tags: ['AI', 'Research', 'Architecture', 'LLM', 'Verification', 'Testing'],
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

  // Placeholder for future categories
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

export default function Work() {
  const [filter, setFilter] = useState<'all' | 'digital' | 'physical'>('all');
  const [subcategoryFilter, setSubcategoryFilter] = useState<string>('all');
  const [currentImageIndexes, setCurrentImageIndexes] = useState<Record<string, number>>({});
  const [carouselDirection, setCarouselDirection] = useState<Record<string, number>>({});
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');

  // Close lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxTitle('');
  };

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxImage) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [lightboxImage]);

  // Get unique subcategories for the current filter
  const getSubcategories = () => {
    if (filter === 'all') return [];
    const categoryProjects = projects.filter((p) => p.category === filter);
    const subcategories = [...new Set(categoryProjects.map((p) => p.subcategory))];
    return subcategories.sort();
  };

  const subcategories = getSubcategories();

  // Reset subcategory filter when main filter changes
  const handleFilterChange = (newFilter: 'all' | 'digital' | 'physical') => {
    setFilter(newFilter);
    setSubcategoryFilter('all');
  };

  // Get current image for a project
  const getCurrentImage = (project: Project) => {
    if (project.images && project.images.length > 0) {
      const index = currentImageIndexes[project.id] || 0;
      return project.images[index];
    }
    return project.imageUrl;
  };

  // Navigate to next image
  const nextImage = (projectId: string, imageCount: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselDirection((prev) => ({ ...prev, [projectId]: 1 }));
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imageCount,
    }));
  };

  // Navigate to previous image
  const prevImage = (projectId: string, imageCount: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselDirection((prev) => ({ ...prev, [projectId]: -1 }));
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imageCount) % imageCount,
    }));
  };

  // Open lightbox
  const openLightbox = (imageUrl: string, title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxImage(imageUrl);
    setLightboxTitle(title);
  };

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => {
          const matchesCategory = p.category === filter;
          const matchesSubcategory = subcategoryFilter === 'all' || p.subcategory === subcategoryFilter;
          return matchesCategory && matchesSubcategory;
        });

  return (
    <PageTransition>
      <SEO
        title="Work - Studio Lepine"
        description="Portfolio of digital and physical projects including web development, mobile apps, security research, graphic design, and custom woodworking. View my work in Saskatchewan, Canada."
        url="https://lepine.biz/work"
        keywords="portfolio, projects, web development, mobile apps, security research, graphic design, woodworking, craftsmanship"
      />
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-6">Work</h1>
          <p className="text-xl text-black/70 max-w-2xl">
            A collection of projects spanning digital development, security research,
            and physical craftsmanship.
          </p>
        </motion.div>

        {/* Primary Filter Buttons */}
        <motion.div
          className="flex gap-4 border-b border-black/10 pb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {[
            { value: 'all' as const, label: 'All Work' },
            { value: 'digital' as const, label: 'Digital' },
            { value: 'physical' as const, label: 'Physical' },
          ].map(({ value, label }) => (
            <motion.button
              key={value}
              onClick={() => handleFilterChange(value)}
              className={`text-sm uppercase tracking-wider transition-all relative ${
                filter === value ? 'font-semibold' : 'text-black/50 hover:text-black'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
              {filter === value && (
                <motion.div
                  className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-black"
                  layoutId="filterIndicator"
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Subcategory Filter Buttons */}
        <AnimatePresence>
          {subcategories.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <motion.div
                className="flex flex-wrap gap-3 pt-4 pb-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <motion.button
                  onClick={() => setSubcategoryFilter('all')}
                  className={`text-xs uppercase tracking-wider px-3 py-1.5 border transition-all ${
                    subcategoryFilter === 'all'
                      ? 'border-black bg-black text-white font-semibold'
                      : 'border-black/20 text-black/60 hover:border-black/40 hover:text-black'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  All {filter === 'digital' ? 'Digital' : 'Physical'}
                </motion.button>
                {subcategories.map((subcategory) => (
                  <motion.button
                    key={subcategory}
                    onClick={() => setSubcategoryFilter(subcategory)}
                    className={`text-xs uppercase tracking-wider px-3 py-1.5 border transition-all ${
                      subcategoryFilter === subcategory
                        ? 'border-black bg-black text-white font-semibold'
                        : 'border-black/20 text-black/60 hover:border-black/40 hover:text-black'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {subcategory}
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={subcategories.length > 0 ? '' : 'mb-12'} />

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                custom={index}
                className="border border-black/10 hover:border-black/30 transition-all duration-300 group cursor-pointer overflow-hidden"
                whileHover={{
                  y: -4,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                }}
                layout
              >
                {/* Project Image with Carousel */}
                {(project.imageUrl || project.images) && (
                  <div className="w-full h-48 bg-black/5 overflow-hidden flex items-center justify-center relative">
                    <AnimatePresence mode="wait" initial={false} custom={carouselDirection[project.id] || 1}>
                      <motion.img
                        key={getCurrentImage(project)}
                        src={getCurrentImage(project) || project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-contain cursor-zoom-in absolute inset-0"
                        onClick={(e) => openLightbox(getCurrentImage(project) || project.imageUrl || '', project.title, e)}
                        custom={carouselDirection[project.id] || 1}
                        variants={{
                          enter: (direction: number) => ({
                            opacity: 0,
                            x: direction > 0 ? 100 : -100,
                          }),
                          center: {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                          },
                          exit: (direction: number) => ({
                            opacity: 0,
                            x: direction > 0 ? -100 : 100,
                          }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        whileHover={{ scale: 1.05 }}
                      />
                    </AnimatePresence>

                    {/* Carousel Controls - Only show if multiple images */}
                    {project.images && project.images.length > 1 && (
                      <>
                        {/* Previous Button */}
                        <button
                          onClick={(e) => prevImage(project.id, project.images!.length, e)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                          aria-label="Previous image"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>

                        {/* Next Button */}
                        <button
                          onClick={(e) => nextImage(project.id, project.images!.length, e)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                          aria-label="Next image"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Image Counter Dots */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                          {project.images.map((_, idx) => (
                            <div
                              key={idx}
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                                idx === (currentImageIndexes[project.id] || 0)
                                  ? 'bg-white w-3'
                                  : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-black/50">
                      {project.subcategory}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-black/50">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-black/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-black/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-black/5 text-black/70 group-hover:bg-black/10 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16 text-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No projects found in this category.
          </motion.div>
        )}

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
                  aria-label="Close lightbox"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Title */}
                {lightboxTitle && (
                  <motion.h3
                    className="text-white text-xl font-semibold mb-4 text-center"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {lightboxTitle}
                  </motion.h3>
                )}

                {/* Image */}
                <img
                  src={lightboxImage}
                  alt={lightboxTitle}
                  className="max-w-full max-h-full object-contain"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Helper text */}
                <motion.p
                  className="text-white/60 text-sm mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Click outside or press ESC to close
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
