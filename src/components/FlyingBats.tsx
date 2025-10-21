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

      {/* Left wing (angular with finger-like protrusions) */}
      <motion.path
        d="M44 30 L38 26 L28 24 L18 26 L10 30 L5 36 L8 40 L15 38 L25 36 L35 34 L42 32 Z"
        fill="#1a1a1a"
        opacity="0.95"
        stroke="#2a2a2a"
        strokeWidth="0.5"
        animate={{
          d: isFlapping
            ? [
                'M44 30 L38 26 L28 24 L18 26 L10 30 L5 36 L8 40 L15 38 L25 36 L35 34 L42 32 Z',
                'M44 30 L38 20 L28 16 L18 18 L10 22 L5 26 L8 32 L15 30 L25 28 L35 29 L42 30 Z',
                'M44 30 L38 26 L28 24 L18 26 L10 30 L5 36 L8 40 L15 38 L25 36 L35 34 L42 32 Z',
              ]
            : undefined,
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Left wing finger details */}
      <motion.path
        d="M44 30 L35 27 M44 31 L30 29 M43 32 L25 32"
        stroke="#2a2a2a"
        strokeWidth="0.4"
        opacity="0.6"
        animate={{
          d: isFlapping
            ? [
                'M44 30 L35 27 M44 31 L30 29 M43 32 L25 32',
                'M44 30 L35 22 M44 30 L30 20 M43 30 L25 24',
                'M44 30 L35 27 M44 31 L30 29 M43 32 L25 32',
              ]
            : undefined,
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Right wing (angular with finger-like protrusions) */}
      <motion.path
        d="M56 30 L62 26 L72 24 L82 26 L90 30 L95 36 L92 40 L85 38 L75 36 L65 34 L58 32 Z"
        fill="#1a1a1a"
        opacity="0.95"
        stroke="#2a2a2a"
        strokeWidth="0.5"
        animate={{
          d: isFlapping
            ? [
                'M56 30 L62 26 L72 24 L82 26 L90 30 L95 36 L92 40 L85 38 L75 36 L65 34 L58 32 Z',
                'M56 30 L62 20 L72 16 L82 18 L90 22 L95 26 L92 32 L85 30 L75 28 L65 29 L58 30 Z',
                'M56 30 L62 26 L72 24 L82 26 L90 30 L95 36 L92 40 L85 38 L75 36 L65 34 L58 32 Z',
              ]
            : undefined,
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Right wing finger details */}
      <motion.path
        d="M56 30 L65 27 M56 31 L70 29 M57 32 L75 32"
        stroke="#2a2a2a"
        strokeWidth="0.4"
        opacity="0.6"
        animate={{
          d: isFlapping
            ? [
                'M56 30 L65 27 M56 31 L70 29 M57 32 L75 32',
                'M56 30 L65 22 M56 30 L70 20 M57 30 L75 24',
                'M56 30 L65 27 M56 31 L70 29 M57 32 L75 32',
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
