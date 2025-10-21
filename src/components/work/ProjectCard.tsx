import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../../types';
import { staggerItem } from '../../utils/animations';

interface ProjectCardProps {
  project: Project;
  index: number;
  currentImage: string | undefined;
  currentIndex: number;
  carouselDirection: number;
  onNextImage: (e: React.MouseEvent) => void;
  onPrevImage: (e: React.MouseEvent) => void;
  onOpenLightbox: (imageUrl: string, title: string, e: React.MouseEvent) => void;
}

/**
 * Project card component with image carousel functionality
 * Features:
 * - Responsive image carousel with directional animations
 * - Hover effects and transitions
 * - Click to open lightbox
 * - Navigation controls for multi-image projects
 */
export default function ProjectCard({
  project,
  index,
  currentImage,
  currentIndex,
  carouselDirection,
  onNextImage,
  onPrevImage,
  onOpenLightbox,
}: ProjectCardProps) {
  const hasMultipleImages = project.images && project.images.length > 1;

  return (
    <motion.div
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
          <AnimatePresence mode="wait" initial={false} custom={carouselDirection}>
            <motion.img
              key={currentImage}
              src={currentImage || project.imageUrl}
              alt={project.title}
              className="w-full h-full object-contain cursor-zoom-in absolute inset-0"
              onClick={(e) => onOpenLightbox(currentImage || project.imageUrl || '', project.title, e)}
              custom={carouselDirection}
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
          {hasMultipleImages && (
            <>
              {/* Previous Button */}
              <button
                onClick={onPrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                aria-label="Previous image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={onNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                aria-label="Next image"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Counter Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {project.images!.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                      idx === currentIndex ? 'bg-white w-3' : 'bg-white/50'
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
        <p className="text-black/70 mb-6 leading-relaxed">{project.description}</p>

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
  );
}
