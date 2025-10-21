import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HalloweenSounds() {
  const [isMuted, setIsMuted] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('halloween-sounds-muted');
    return saved === 'true';
  });

  const ambientRef = useRef<HTMLAudioElement | null>(null);
  const howlRef = useRef<HTMLAudioElement | null>(null);
  const howlIntervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Create ambient audio element
    ambientRef.current = new Audio('/sounds/ambient-halloween.mp3');
    ambientRef.current.loop = true;
    ambientRef.current.volume = 0.15;

    // Create howl audio element
    howlRef.current = new Audio('/sounds/wolf-howl.mp3');
    howlRef.current.volume = 0.25;

    if (!isMuted) {
      // Start ambient
      ambientRef.current.play().catch(() => {
        // Browser may block autoplay
        console.log('Ambient sound blocked - user interaction required');
      });

      // Schedule wolf howls every 30-45 seconds
      const scheduleHowl = () => {
        const delay = 30000 + Math.random() * 15000; // 30-45 seconds
        howlIntervalRef.current = setTimeout(() => {
          if (howlRef.current && !isMuted) {
            howlRef.current.currentTime = 0;
            howlRef.current.play().catch(() => {});
          }
          scheduleHowl();
        }, delay);
      };

      scheduleHowl();
    }

    return () => {
      if (ambientRef.current) {
        ambientRef.current.pause();
      }
      if (howlIntervalRef.current) {
        clearTimeout(howlIntervalRef.current);
      }
    };
  }, []);

  // Handle mute/unmute
  useEffect(() => {
    localStorage.setItem('halloween-sounds-muted', String(isMuted));

    if (ambientRef.current) {
      if (isMuted) {
        ambientRef.current.pause();
      } else {
        ambientRef.current.play().catch(() => {});
      }
    }

    if (isMuted && howlIntervalRef.current) {
      clearTimeout(howlIntervalRef.current);
      howlIntervalRef.current = null;
    } else if (!isMuted && !howlIntervalRef.current) {
      // Restart howl schedule
      const scheduleHowl = () => {
        const delay = 30000 + Math.random() * 15000;
        howlIntervalRef.current = setTimeout(() => {
          if (howlRef.current && !isMuted) {
            howlRef.current.currentTime = 0;
            howlRef.current.play().catch(() => {});
          }
          scheduleHowl();
        }, delay);
      };
      scheduleHowl();
    }
  }, [isMuted]);

  return (
    <motion.button
      onClick={() => setIsMuted(!isMuted)}
      className="fixed bottom-6 right-6 z-50 p-3 bg-halloween-darkPurple/80 border-2 border-halloween-orange/40 rounded-full backdrop-blur-sm hover:bg-halloween-darkPurple hover:border-halloween-orange transition-all duration-200 shadow-lg hover:shadow-halloween-orange/30"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={isMuted ? 'Unmute Halloween sounds' : 'Mute Halloween sounds'}
    >
      <AnimatePresence mode="wait">
        {isMuted ? (
          <motion.svg
            key="muted"
            className="w-6 h-6 text-halloween-orange"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
            />
          </motion.svg>
        ) : (
          <motion.svg
            key="unmuted"
            className="w-6 h-6 text-halloween-orange"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
