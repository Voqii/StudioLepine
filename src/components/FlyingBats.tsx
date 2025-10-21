import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Bat {
  id: number;
  startY: number;
  duration: number;
  delay: number;
  size: number;
}

export default function FlyingBats() {
  const [bats] = useState<Bat[]>([
    { id: 1, startY: 20, duration: 8, delay: 0, size: 24 },
    { id: 2, startY: 40, duration: 10, delay: 2, size: 20 },
    { id: 3, startY: 60, duration: 7, delay: 4, size: 28 },
    { id: 4, startY: 30, duration: 9, delay: 1.5, size: 22 },
  ]);

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Only animate once on mount
    setHasAnimated(true);
  }, []);

  if (!hasAnimated) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {bats.map((bat) => (
        <motion.div
          key={bat.id}
          className="absolute"
          initial={{ x: -100, y: `${bat.startY}%` }}
          animate={{
            x: ['0vw', '110vw'],
            y: [
              `${bat.startY}%`,
              `${bat.startY - 5}%`,
              `${bat.startY + 3}%`,
              `${bat.startY - 2}%`,
              `${bat.startY}%`,
            ],
          }}
          transition={{
            duration: bat.duration,
            delay: bat.delay,
            ease: 'linear',
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          <svg
            width={bat.size}
            height={bat.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C11 2 10 2.5 9.5 3.5L8 6C7.5 6.5 6.5 7 5.5 7C4.5 7 3.5 6.5 3 5.5C2.5 4.5 2 3.5 2 2.5V3C2 5 3 7 5 8C6 8.5 7 9 8 10C8.5 10.5 9 11.5 9 12.5C9 13.5 8.5 14.5 8 15C7 16 6 17 5 17C3 17 2 15 2 13V13.5C2 14.5 2.5 15.5 3 16.5C3.5 17.5 4.5 18 5.5 18C6.5 18 7.5 17.5 8 16.5L9.5 14C10 13 11 12.5 12 12.5C13 12.5 14 13 14.5 14L16 16.5C16.5 17.5 17.5 18 18.5 18C19.5 18 20.5 17.5 21 16.5C21.5 15.5 22 14.5 22 13.5V13C22 15 21 17 19 17C18 17 17 16 16 15C15.5 14.5 15 13.5 15 12.5C15 11.5 15.5 10.5 16 10C17 9 18 8.5 19 8C21 7 22 5 22 3V2.5C22 3.5 21.5 4.5 21 5.5C20.5 6.5 19.5 7 18.5 7C17.5 7 16.5 6.5 16 6L14.5 3.5C14 2.5 13 2 12 2Z"
              fill="#1a1a1a"
              opacity="0.7"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
