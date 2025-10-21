import { motion } from 'framer-motion';
import { useState } from 'react';

interface Bat {
  id: number;
  startY: number;
  duration: number;
  delay: number;
  size: number;
  behavior: 'fly-across' | 'circle';
}

// Bat SVG with wing flap animation
function BatSVG({ size, isFlapping }: { size: number; isFlapping: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-lg"
    >
      {/* Bat body */}
      <ellipse cx="32" cy="32" rx="4" ry="6" fill="#1a1a1a" />

      {/* Bat head */}
      <circle cx="32" cy="28" r="3" fill="#1a1a1a" />
      <circle cx="30.5" cy="27" r="0.5" fill="#ff6b1a" className="animate-pulse" />
      <circle cx="33.5" cy="27" r="0.5" fill="#ff6b1a" className="animate-pulse" />

      {/* Left wing */}
      <motion.path
        d="M28 32 Q20 28, 12 32 Q8 36, 10 40 Q14 38, 18 36 Q22 34, 26 34 Z"
        fill="#1a1a1a"
        opacity="0.9"
        animate={{
          d: isFlapping
            ? [
                'M28 32 Q20 28, 12 32 Q8 36, 10 40 Q14 38, 18 36 Q22 34, 26 34 Z',
                'M28 32 Q20 24, 12 20 Q8 22, 10 28 Q14 30, 18 32 Q22 33, 26 34 Z',
                'M28 32 Q20 28, 12 32 Q8 36, 10 40 Q14 38, 18 36 Q22 34, 26 34 Z',
              ]
            : undefined,
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Right wing */}
      <motion.path
        d="M36 32 Q44 28, 52 32 Q56 36, 54 40 Q50 38, 46 36 Q42 34, 38 34 Z"
        fill="#1a1a1a"
        opacity="0.9"
        animate={{
          d: isFlapping
            ? [
                'M36 32 Q44 28, 52 32 Q56 36, 54 40 Q50 38, 46 36 Q42 34, 38 34 Z',
                'M36 32 Q44 24, 52 20 Q56 22, 54 28 Q50 30, 46 32 Q42 33, 38 34 Z',
                'M36 32 Q44 28, 52 32 Q56 36, 54 40 Q50 38, 46 36 Q42 34, 38 34 Z',
              ]
            : undefined,
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </svg>
  );
}

export default function FlyingBats() {
  const [bats] = useState<Bat[]>([
    // Flying across bats (varied heights)
    { id: 1, startY: 10, duration: 12, delay: 0, size: 45, behavior: 'fly-across' },
    { id: 2, startY: 25, duration: 15, delay: 2, size: 35, behavior: 'fly-across' },
    { id: 3, startY: 45, duration: 10, delay: 4, size: 55, behavior: 'fly-across' },
    { id: 4, startY: 65, duration: 13, delay: 1, size: 40, behavior: 'fly-across' },
    { id: 5, startY: 80, duration: 11, delay: 3, size: 50, behavior: 'fly-across' },
    { id: 6, startY: 15, duration: 14, delay: 5, size: 38, behavior: 'fly-across' },
    { id: 7, startY: 35, duration: 16, delay: 6, size: 42, behavior: 'fly-across' },
    { id: 8, startY: 55, duration: 12, delay: 7, size: 48, behavior: 'fly-across' },
    { id: 9, startY: 70, duration: 13, delay: 2.5, size: 36, behavior: 'fly-across' },
    { id: 10, startY: 20, duration: 15, delay: 8, size: 52, behavior: 'fly-across' },

    // Circling/hovering bats
    { id: 11, startY: 30, duration: 20, delay: 1, size: 60, behavior: 'circle' },
    { id: 12, startY: 50, duration: 18, delay: 9, size: 46, behavior: 'circle' },
    { id: 13, startY: 40, duration: 22, delay: 4, size: 54, behavior: 'circle' },
  ]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {bats.map((bat) => {
        if (bat.behavior === 'fly-across') {
          return (
            <motion.div
              key={bat.id}
              className="absolute"
              initial={{ x: '-10vw', y: `${bat.startY}vh` }}
              animate={{
                x: '110vw',
                y: [
                  `${bat.startY}vh`,
                  `${bat.startY - 8}vh`,
                  `${bat.startY + 5}vh`,
                  `${bat.startY - 3}vh`,
                  `${bat.startY + 6}vh`,
                  `${bat.startY - 4}vh`,
                  `${bat.startY}vh`,
                ],
              }}
              transition={{
                x: { duration: bat.duration, ease: 'linear', delay: bat.delay },
                y: {
                  duration: bat.duration,
                  ease: 'easeInOut',
                  times: [0, 0.15, 0.35, 0.5, 0.7, 0.85, 1],
                },
              }}
            >
              <BatSVG size={bat.size} isFlapping={true} />
            </motion.div>
          );
        }

        // Circling behavior
        const centerX = 20 + (bat.id % 3) * 30; // Vary horizontal position

        return (
          <motion.div
            key={bat.id}
            className="absolute"
            initial={{ x: `${centerX}vw`, y: `${bat.startY}vh` }}
            animate={{
              x: [
                `${centerX}vw`,
                `${centerX + 5}vw`,
                `${centerX}vw`,
                `${centerX - 5}vw`,
                `${centerX}vw`,
              ],
              y: [
                `${bat.startY}vh`,
                `${bat.startY - 5}vh`,
                `${bat.startY}vh`,
                `${bat.startY + 5}vh`,
                `${bat.startY}vh`,
              ],
            }}
            transition={{
              duration: bat.duration,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: bat.delay,
            }}
          >
            <BatSVG size={bat.size} isFlapping={true} />
          </motion.div>
        );
      })}
    </div>
  );
}
