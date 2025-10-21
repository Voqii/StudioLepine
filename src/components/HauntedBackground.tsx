import { motion } from 'framer-motion';

export default function HauntedBackground() {

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Deep dark background with purple tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-halloween-darkPurple via-halloween-black to-halloween-black" />

      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => {
          const left = Math.random() * 100;
          const top = Math.random() * 60; // Upper portion only
          const size = Math.random() * 2 + 1;
          const delay = Math.random() * 5;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay,
              }}
            />
          );
        })}
      </div>

      {/* Massive Moon with glow */}
      <motion.div
        className="absolute top-[15%] right-[15%]"
        style={{
          width: '800px',
          height: '800px',
        }}
      >
        {/* Moon glow layers */}
        <div className="absolute inset-0 rounded-full bg-halloween-moonGlow opacity-20 blur-[100px]" />
        <div className="absolute inset-0 rounded-full bg-halloween-moonGlow opacity-30 blur-[60px] scale-75" />

        {/* Moon body */}
        <div className="absolute inset-0 rounded-full bg-gradient-radial from-halloween-moonGlow via-halloween-moon to-halloween-moon/80 shadow-[0_0_120px_rgba(255,248,220,0.6)]">
          {/* Moon craters (subtle texture) */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-halloween-moon/40 blur-sm" />
          <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-halloween-moon/30 blur-sm" />
          <div className="absolute bottom-1/3 left-1/2 w-20 h-20 rounded-full bg-halloween-moon/35 blur-sm" />
        </div>
      </motion.div>

      {/* Drifting clouds in front of moon */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute opacity-30"
          style={{
            top: `${20 + i * 15}%`,
            width: '400px',
            height: '100px',
          }}
          animate={{
            x: ['-100%', '120vw'],
          }}
          transition={{
            duration: 40 + i * 10,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 5,
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-black/20 to-transparent blur-xl rounded-full" />
        </motion.div>
      ))}

      {/* Haunted house silhouette */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[600px] opacity-90"
      >
        <img
          src="/images/halloween/haunted-house.jpeg"
          alt=""
          className="w-full h-full object-cover object-bottom"
          style={{
            filter: 'brightness(0.4) contrast(1.5)', // Make it visible dark silhouette
          }}
        />

        {/* Ground fog at base of house */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-halloween-fog/20 to-transparent blur-xl" />
      </motion.div>

      {/* Texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
