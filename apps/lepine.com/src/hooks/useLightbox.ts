import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for managing lightbox/modal state
 * Handles opening, closing, and ESC key functionality
 *
 * @returns Lightbox state and control methods
 */
export function useLightbox() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');

  /**
   * Open the lightbox with an image and title
   */
  const openLightbox = useCallback((imageUrl: string, title: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLightboxImage(imageUrl);
    setLightboxTitle(title);
  }, []);

  /**
   * Close the lightbox
   */
  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
    setLightboxTitle('');
  }, []);

  /**
   * Check if lightbox is currently open
   */
  const isOpen = lightboxImage !== null;

  /**
   * Handle ESC key to close lightbox
   */
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxImage) {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [lightboxImage, closeLightbox]);

  return {
    lightboxImage,
    lightboxTitle,
    isOpen,
    openLightbox,
    closeLightbox,
  };
}
