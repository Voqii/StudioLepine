import { motion } from 'framer-motion';

interface CobwebProps {
  corner: 'top-left' | 'top-right';
}

export default function Cobweb({ corner }: CobwebProps) {
  const isLeft = corner === 'top-left';

  return (
    <motion.div
      className={`fixed ${isLeft ? 'left-0' : 'right-0'} top-0 pointer-events-none z-50 opacity-30`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{ transform: isLeft ? 'none' : 'scaleX(-1)' }}
    >
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main anchor point */}
        <circle cx="10" cy="10" r="3" fill="#666" />

        {/* Radial threads */}
        <line x1="10" y1="10" x2="200" y2="10" stroke="#888" strokeWidth="1.5" opacity="0.6" />
        <line x1="10" y1="10" x2="180" y2="60" stroke="#888" strokeWidth="1.5" opacity="0.6" />
        <line x1="10" y1="10" x2="140" y2="100" stroke="#888" strokeWidth="1.5" opacity="0.6" />
        <line x1="10" y1="10" x2="100" y2="140" stroke="#888" strokeWidth="1.5" opacity="0.6" />
        <line x1="10" y1="10" x2="60" y2="180" stroke="#888" strokeWidth="1.5" opacity="0.6" />
        <line x1="10" y1="10" x2="10" y2="200" stroke="#888" strokeWidth="1.5" opacity="0.6" />

        {/* Spiral threads */}
        <path
          d="M 40 10 Q 50 20, 60 30 Q 70 40, 80 45 Q 90 50, 100 52"
          stroke="#999"
          strokeWidth="1"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 60 10 Q 70 25, 85 40 Q 100 55, 115 65 Q 130 75, 140 80"
          stroke="#999"
          strokeWidth="1"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M 80 10 Q 95 30, 110 50 Q 125 70, 140 85 Q 155 100, 165 110"
          stroke="#999"
          strokeWidth="1"
          fill="none"
          opacity="0.7"
        />

        {/* Small spiders or dew drops */}
        <circle cx="100" cy="52" r="2" fill="#666" opacity="0.8" />
        <circle cx="140" cy="80" r="2" fill="#666" opacity="0.8" />
        <circle cx="165" cy="110" r="2" fill="#666" opacity="0.8" />
      </svg>
    </motion.div>
  );
}
