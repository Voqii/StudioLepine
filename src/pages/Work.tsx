import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { staggerContainer } from '../utils/animations';
import { projects } from '../data/projects';
import { useCarousel } from '../hooks/useCarousel';
import { useLightbox } from '../hooks/useLightbox';
import { useProjectFilters } from '../hooks/useProjectFilters';
import ProjectFilters from '../components/work/ProjectFilters';
import ProjectCard from '../components/work/ProjectCard';
import ImageLightbox from '../components/work/ImageLightbox';

export default function Work() {
  // Custom hooks for state management
  const carousel = useCarousel();
  const lightbox = useLightbox();
  const {
    filter,
    subcategoryFilter,
    subcategories,
    filteredProjects,
    handleFilterChange,
    setSubcategoryFilter,
  } = useProjectFilters(projects);

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

        {/* Filters */}
        <ProjectFilters
          filter={filter}
          subcategoryFilter={subcategoryFilter}
          subcategories={subcategories}
          onFilterChange={handleFilterChange}
          onSubcategoryChange={setSubcategoryFilter}
        />

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
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                currentImage={carousel.getCurrentImage(project)}
                currentIndex={carousel.getCurrentIndex(project.id)}
                carouselDirection={carousel.getDirection(project.id)}
                onNextImage={(e) => carousel.nextImage(project.id, project.images!.length, e)}
                onPrevImage={(e) => carousel.prevImage(project.id, project.images!.length, e)}
                onOpenLightbox={lightbox.openLightbox}
              />
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

        {/* Lightbox */}
        <ImageLightbox
          imageUrl={lightbox.lightboxImage}
          title={lightbox.lightboxTitle}
          onClose={lightbox.closeLightbox}
        />
      </div>
    </PageTransition>
  );
}
