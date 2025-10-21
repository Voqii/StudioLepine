import { motion } from 'framer-motion';

export default function JackOLantern() {
  return (
    <motion.div
      className="absolute -top-14 left-1/2 -translate-x-1/2 pointer-events-none"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Shadow cast onto button */}
      <div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-black/30 blur-md rounded-full"
        style={{
          transform: 'translateX(-50%) scaleY(0.6)',
        }}
      />

      {/* Jack-o-lantern */}
      <div className="relative">
        {/* Inner glow (flickering candle) */}
        <motion.div
          className="absolute inset-0 bg-halloween-orange rounded-full blur-xl opacity-60"
          animate={{
            opacity: [0.4, 0.7, 0.5, 0.8, 0.6],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Pumpkin image */}
        <img
          src="/images/halloween/jack-o-lantern.png"
          alt=""
          className="relative z-10 w-20 h-20 object-contain drop-shadow-[0_4px_12px_rgba(255,107,26,0.8)]"
        />

        {/* Extra glow rays */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <div
              key={angle}
              className="absolute top-1/2 left-1/2 w-1 h-8 bg-gradient-to-t from-halloween-orange/60 to-transparent blur-sm"
              style={{
                transform: `translate(-50%, -100%) rotate(${angle}deg)`,
                transformOrigin: 'bottom center',
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
