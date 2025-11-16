// Framer Motion animation variants for consistent, performant animations

/**
 * Cubic bezier easing function type for Framer Motion animations.
 * Represents the four control points of a cubic bezier curve.
 */
type EasingArray = [number, number, number, number];

/**
 * Standard easing curve used throughout the application.
 * Cubic bezier: (0.25, 0.1, 0.25, 1) - Smooth ease-in-out
 */
const standardEasing: EasingArray = [0.25, 0.1, 0.25, 1];

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: standardEasing }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: standardEasing }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: standardEasing }
  }
};

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: standardEasing }
  }
};
