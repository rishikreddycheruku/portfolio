import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="floating-shapes">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-10"
          style={{
            background: `var(--gradient-${i % 3 === 0 ? 'primary' : i % 3 === 1 ? 'secondary' : 'accent'})`,
            width: `${60 + (i * 20)}px`,
            height: `${60 + (i * 20)}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, -60, -30, 0],
            x: [0, 20, -20, 20, 0],
            rotate: [0, 120, 240, 360],
            scale: [1, 1.1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 15 + (i * 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;