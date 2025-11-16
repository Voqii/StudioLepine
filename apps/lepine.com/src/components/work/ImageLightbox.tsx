import { motion, AnimatePresence } from 'framer-motion';

interface ImageLightboxProps {
  imageUrl: string | null;
  title: string;
  onClose: () => void;
}

/**
 * Lightbox modal component for displaying full-size images
 * Features:
 * - Click outside to close
 * - ESC key to close (handled by parent useLightbox hook)
 * - Smooth fade and scale animations
 */
export default function ImageLightbox({ imageUrl, title, onClose }: ImageLightboxProps) {
  if (!imageUrl) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
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
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Title */}
          {title && (
            <motion.h3
              className="text-white text-xl font-semibold mb-4 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {title}
            </motion.h3>
          )}

          {/* Image */}
          <img
            src={imageUrl}
            alt={title}
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
    </AnimatePresence>
  );
}
