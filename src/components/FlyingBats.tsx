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

// Bat SVG with wing flap animation - redesigned to look more bat-like
function BatSVG({ size, isFlapping }: { size: number; isFlapping: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-2xl"
    >
      {/* Bat body (oval torso) */}
      <ellipse cx="50" cy="30" rx="6" ry="9" fill="#1a1a1a" />

      {/* Bat head (slightly larger, more defined) */}
      <ellipse cx="50" cy="22" r="5" rx="5" ry="4.5" fill="#1a1a1a" />

      {/* Ears (pointed bat ears) */}
      <path d="M47 18 L45 14 L48 19 Z" fill="#1a1a1a" />
      <path d="M53 18 L55 14 L52 19 Z" fill="#1a1a1a" />

      {/* Eyes (glowing orange) */}
      <circle cx="47" cy="22" r="1.2" fill="#ff6b1a" className="animate-pulse" />
      <circle cx="53" cy="22" r="1.2" fill="#ff6b1a" className="animate-pulse" />

      {/* Left wing (much larger, more detailed with membrane structure) */}
      <motion.path
        d="M44 30 Q35 25, 20 28 Q10 30, 5 35 Q8 40, 15 42 Q25 40, 35 38 Q40 35, 44 32 Z"
        fill="#1a1a1a"
        opacity="0.95"
        stroke="#2a2a2a"
        strokeWidth="0.5"
        animate={{
          d: isFlapping
            ? [
                'M44 30 Q35 25, 20 28 Q10 30, 5 35 Q8 40, 15 42 Q25 40, 35 38 Q40 35, 44 32 Z',
                'M44 30 Q35 18, 20 15 Q10 14, 5 18 Q8 25, 15 30 Q25 32, 35 33 Q40 32, 44 31 Z',
                'M44 30 Q35 25, 20 28 Q10 30, 5 35 Q8 40, 15 42 Q25 40, 35 38 Q40 35, 44 32 Z',
              ]
            : undefined,
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Left wing membrane details */}
      <motion.path
        d="M44 30 Q38 28, 30 30 M44 31 Q40 30, 35 32 M44 32 Q42 32, 38 35"
        stroke="#2a2a2a"
        strokeWidth="0.3"
        opacity="0.6"
        animate={{
          d: isFlapping
            ? [
                'M44 30 Q38 28, 30 30 M44 31 Q40 30, 35 32 M44 32 Q42 32, 38 35',
                'M44 30 Q38 22, 30 20 M44 30 Q40 26, 35 28 M44 31 Q42 30, 38 32',
                'M44 30 Q38 28, 30 30 M44 31 Q40 30, 35 32 M44 32 Q42 32, 38 35',
              ]
            : undefined,
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Right wing (mirrored, larger and more detailed) */}
      <motion.path
        d="M56 30 Q65 25, 80 28 Q90 30, 95 35 Q92 40, 85 42 Q75 40, 65 38 Q60 35, 56 32 Z"
        fill="#1a1a1a"
        opacity="0.95"
        stroke="#2a2a2a"
        strokeWidth="0.5"
        animate={{
          d: isFlapping
            ? [
                'M56 30 Q65 25, 80 28 Q90 30, 95 35 Q92 40, 85 42 Q75 40, 65 38 Q60 35, 56 32 Z',
                'M56 30 Q65 18, 80 15 Q90 14, 95 18 Q92 25, 85 30 Q75 32, 65 33 Q60 32, 56 31 Z',
                'M56 30 Q65 25, 80 28 Q90 30, 95 35 Q92 40, 85 42 Q75 40, 65 38 Q60 35, 56 32 Z',
              ]
            : undefined,
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Right wing membrane details */}
      <motion.path
        d="M56 30 Q62 28, 70 30 M56 31 Q60 30, 65 32 M56 32 Q58 32, 62 35"
        stroke="#2a2a2a"
        strokeWidth="0.3"
        opacity="0.6"
        animate={{
          d: isFlapping
            ? [
                'M56 30 Q62 28, 70 30 M56 31 Q60 30, 65 32 M56 32 Q58 32, 62 35',
                'M56 30 Q62 22, 70 20 M56 30 Q60 26, 65 28 M56 31 Q58 30, 62 32',
                'M56 30 Q62 28, 70 30 M56 31 Q60 30, 65 32 M56 32 Q58 32, 62 35',
              ]
            : undefined,
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </svg>
  );
}

export default function FlyingBats() {
  const [bats] = useState<Bat[]>([
    // Flying across bats (larger, more varied heights)
    { id: 1, startY: 10, duration: 14, delay: 0, size: 100, behavior: 'fly-across' },
    { id: 2, startY: 25, duration: 18, delay: 2, size: 80, behavior: 'fly-across' },
    { id: 3, startY: 45, duration: 12, delay: 4, size: 120, behavior: 'fly-across' },
    { id: 4, startY: 65, duration: 16, delay: 1, size: 90, behavior: 'fly-across' },
    { id: 5, startY: 80, duration: 13, delay: 3, size: 110, behavior: 'fly-across' },
    { id: 6, startY: 15, duration: 17, delay: 5, size: 85, behavior: 'fly-across' },
    { id: 7, startY: 35, duration: 19, delay: 6, size: 95, behavior: 'fly-across' },
    { id: 8, startY: 55, duration: 15, delay: 7, size: 105, behavior: 'fly-across' },
    { id: 9, startY: 70, duration: 16, delay: 2.5, size: 88, behavior: 'fly-across' },
    { id: 10, startY: 20, duration: 18, delay: 8, size: 115, behavior: 'fly-across' },

    // Circling/hovering bats (larger and more prominent)
    { id: 11, startY: 30, duration: 22, delay: 1, size: 130, behavior: 'circle' },
    { id: 12, startY: 50, duration: 20, delay: 9, size: 100, behavior: 'circle' },
    { id: 13, startY: 40, duration: 24, delay: 4, size: 120, behavior: 'circle' },
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
