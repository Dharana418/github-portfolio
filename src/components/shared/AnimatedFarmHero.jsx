import { motion } from 'framer-motion';
import { Sprout, Sun, Droplets, Tractor } from 'lucide-react';

const AnimatedFarmHero = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-lg overflow-hidden flex items-center justify-center">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: '-20%', left: '-10%' }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-lime-300/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: '-20%', right: '-10%' }}
      />

      {/* Sun in the sky */}
      <motion.div
        className="absolute top-4 right-8"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <Sun className="w-12 h-12 text-yellow-300" />
      </motion.div>

      {/* Rain drops */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`drop-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: '-10%',
          }}
          animate={{
            y: ['0%', '120%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear",
          }}
        >
          <Droplets className="w-4 h-4 text-blue-200" />
        </motion.div>
      ))}

      {/* Central farm field */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
        {/* Tractor */}
        <motion.div
          className="flex items-center space-x-2"
          animate={{
            x: [-30, 30, -30],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Tractor className="w-12 h-12 text-amber-900" />
          </motion.div>
        </motion.div>

        {/* Growing plants */}
        <div className="flex space-x-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`plant-${i}`}
              initial={{ scale: 0, y: 10 }}
              animate={{
                scale: [0, 1, 1],
                y: [10, 0, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            >
              <Sprout className="w-6 h-6 text-green-900" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ground line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-12 bg-amber-800/40"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Floating crop icons */}
      <motion.div
        className="absolute left-8 top-1/3"
        animate={{
          y: [0, -10, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-3xl">🌾</div>
      </motion.div>

      <motion.div
        className="absolute right-12 bottom-1/3"
        animate={{
          y: [0, -8, 0],
          rotate: [5, -5, 5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="text-3xl">🌽</div>
      </motion.div>

      <motion.div
        className="absolute left-1/4 bottom-1/4"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-2xl">🥕</div>
      </motion.div>
    </div>
  );
};

export default AnimatedFarmHero;
