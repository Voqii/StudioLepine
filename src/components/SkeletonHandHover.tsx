import { motion } from 'framer-motion';
import { useState, useRef, useEffect, type ReactNode } from 'react';

interface SkeletonHandHoverProps {
  children: ReactNode;
  className?: string;
}

export default function SkeletonHandHover({ children, className = '' }: SkeletonHandHoverProps) {
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element for bone clack sound
    // We'll add the sound file later
    audioRef.current = new Audio('/sounds/bone-clack.mp3');
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);

    // Play bone clack sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Silently fail if audio can't play
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Skeleton hand that slides in on hover */}
      {isHovered && (
        <motion.div
          className="absolute left-full top-1/2 -translate-y-1/2 ml-2 pointer-events-none z-50"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -30, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <motion.img
            src="/images/halloween/skeleton-hand.gif"
            alt=""
            className="w-16 h-16 object-contain"
            animate={{
              rotate: [0, -5, 0, -3, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      )}

      {children}
    </div>
  );
}
