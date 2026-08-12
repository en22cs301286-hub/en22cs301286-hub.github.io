import { motion } from 'framer-motion';

const FloatingBackground = () => {
  const shapes = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-20 dark:opacity-10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {i % 3 === 0 ? (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="#ff4fa3">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          ) : i % 3 === 1 ? (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#ff4fa3">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          ) : (
            <div className="w-12 h-12 bg-pink-primary rounded-full filter blur-xl opacity-30"></div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBackground;
