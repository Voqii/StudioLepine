import { useState, useCallback } from 'react';

/**
 * Custom hook for managing image carousel state
 * Handles navigation between multiple images with directional animation support
 *
 * @returns Carousel state and navigation methods
 */
export function useCarousel() {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<Record<string, number>>({});
  const [carouselDirection, setCarouselDirection] = useState<Record<string, number>>({});

  /**
   * Get the current image for a project
   */
  const getCurrentImage = useCallback(
    (project: { id: string; images?: string[]; imageUrl?: string }) => {
      if (project.images && project.images.length > 0) {
        const index = currentImageIndexes[project.id] || 0;
        return project.images[index];
      }
      return project.imageUrl;
    },
    [currentImageIndexes]
  );

  /**
   * Navigate to the next image in the carousel
   */
  const nextImage = useCallback((projectId: string, imageCount: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCarouselDirection((prev) => ({ ...prev, [projectId]: 1 }));
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % imageCount,
    }));
  }, []);

  /**
   * Navigate to the previous image in the carousel
   */
  const prevImage = useCallback((projectId: string, imageCount: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCarouselDirection((prev) => ({ ...prev, [projectId]: -1 }));
    setCurrentImageIndexes((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + imageCount) % imageCount,
    }));
  }, []);

  /**
   * Get the current carousel direction for animations
   */
  const getDirection = useCallback(
    (projectId: string) => carouselDirection[projectId] || 1,
    [carouselDirection]
  );

  /**
   * Get the current image index for a project
   */
  const getCurrentIndex = useCallback(
    (projectId: string) => currentImageIndexes[projectId] || 0,
    [currentImageIndexes]
  );

  return {
    currentImageIndexes,
    carouselDirection,
    getCurrentImage,
    getCurrentIndex,
    getDirection,
    nextImage,
    prevImage,
  };
}
