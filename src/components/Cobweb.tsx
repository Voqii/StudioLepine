import { motion } from 'framer-motion';

interface CobwebProps {
  corner: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export default function Cobweb({ corner }: CobwebProps) {
  const isLeft = corner.includes('left');
  const isTop = corner.includes('top');

  // Calculate radial thread endpoints
  const anchor = { x: 5, y: 5 };
  const radialThreads = [
    { x: 300, y: 5 },
    { x: 260, y: 80 },
    { x: 200, y: 140 },
    { x: 140, y: 200 },
    { x: 80, y: 260 },
    { x: 5, y: 300 },
  ];

  // Spider position on web (will animate)
  const spiderPath = [
    { x: 80, y: 80 },
    { x: 140, y: 100 },
    { x: 100, y: 140 },
    { x: 60, y: 120 },
    { x: 80, y: 80 },
  ];

  return (
    <motion.div
      className={`fixed ${isLeft ? 'left-0' : 'right-0'} ${isTop ? 'top-0' : 'bottom-0'} pointer-events-none z-50`}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 0.5, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.3 }}
      style={{
        transform: `${isLeft ? '' : 'scaleX(-1)'} ${isTop ? '' : 'scaleY(-1)'}`,
      }}
    >
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Anchor point */}
        <circle cx={anchor.x} cy={anchor.y} r="2.5" fill="#8B8B8B" opacity="0.8" />

        {/* Radial threads (from center outward) */}
        {radialThreads.map((thread, i) => (
          <line
            key={`radial-${i}`}
            x1={anchor.x}
            y1={anchor.y}
            x2={thread.x}
            y2={thread.y}
            stroke="#A0A0A0"
            strokeWidth="1.2"
            opacity="0.6"
          />
        ))}

        {/* Spiral connecting threads */}
        {[1, 2, 3, 4, 5].map((ring) => {
          const radius = ring * 40;
          const points = radialThreads.map((thread) => {
            const fraction = radius / Math.sqrt(Math.pow(thread.x - anchor.x, 2) + Math.pow(thread.y - anchor.y, 2));

            return {
              x: anchor.x + (thread.x - anchor.x) * fraction,
              y: anchor.y + (thread.y - anchor.y) * fraction,
            };
          });

          // Create path connecting all points in ring
          const pathData = `M ${points[0].x} ${points[0].y} ` +
            points.slice(1).map(p => `L ${p.x} ${p.y}`).join(' ');

          return (
            <path
              key={`ring-${ring}`}
              d={pathData}
              stroke="#B5B5B5"
              strokeWidth="0.8"
              fill="none"
              opacity={0.5 - ring * 0.05}
            />
          );
        })}

        {/* Dew drops on threads (with sparkle) */}
        {[
          { x: 100, y: 60 },
          { x: 150, y: 90 },
          { x: 180, y: 140 },
          { x: 120, y: 180 },
          { x: 60, y: 150 },
        ].map((drop, i) => (
          <g key={`dew-${i}`}>
            {/* Dew drop */}
            <circle
              cx={drop.x}
              cy={drop.y}
              r="3"
              fill="url(#dewGradient)"
              opacity="0.9"
            />
            {/* Sparkle */}
            <motion.circle
              cx={drop.x}
              cy={drop.y}
              r="5"
              fill="none"
              stroke="#FFF"
              strokeWidth="0.5"
              opacity="0"
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          </g>
        ))}

        {/* Animated spider crawling on web */}
        <motion.g
          animate={{
            x: spiderPath.map(p => p.x - spiderPath[0].x),
            y: spiderPath.map(p => p.y - spiderPath[0].y),
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Spider body */}
          <ellipse cx={spiderPath[0].x} cy={spiderPath[0].y} rx="4" ry="5" fill="#1a1a1a" opacity="0.9" />
          <circle cx={spiderPath[0].x} cy={spiderPath[0].y - 2} r="3" fill="#1a1a1a" opacity="0.9" />

          {/* Spider legs */}
          {[-1, 1].map((side) => (
            <g key={side}>
              <path
                d={`M ${spiderPath[0].x} ${spiderPath[0].y} q ${side * 8} -4, ${side * 12} -8`}
                stroke="#1a1a1a"
                strokeWidth="0.8"
                fill="none"
                opacity="0.9"
              />
              <path
                d={`M ${spiderPath[0].x} ${spiderPath[0].y} q ${side * 8} 0, ${side * 13} -2`}
                stroke="#1a1a1a"
                strokeWidth="0.8"
                fill="none"
                opacity="0.9"
              />
              <path
                d={`M ${spiderPath[0].x} ${spiderPath[0].y} q ${side * 8} 4, ${side * 12} 8`}
                stroke="#1a1a1a"
                strokeWidth="0.8"
                fill="none"
                opacity="0.9"
              />
            </g>
          ))}
        </motion.g>

        {/* Gradient definition for dew drops */}
        <defs>
          <radialGradient id="dewGradient">
            <stop offset="0%" stopColor="#FFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A0D8F1" stopOpacity="0.6" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
