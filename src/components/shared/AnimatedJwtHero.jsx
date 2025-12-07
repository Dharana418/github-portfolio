import { motion } from 'framer-motion';
import { Lock, Unlock, Key, Shield, CheckCircle2, XCircle } from 'lucide-react';

const AnimatedJwtHero = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-orange-500 via-red-600 to-pink-700 rounded-lg overflow-hidden flex items-center justify-center">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"
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
        className="absolute w-64 h-64 bg-rose-400/20 rounded-full blur-3xl"
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

      {/* Central Shield with Lock */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-6">
          <Shield className="w-16 h-16 text-white" />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Lock className="w-8 h-8 text-yellow-300" />
          </motion.div>
        </div>
      </motion.div>

      {/* Rotating Keys */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`key-${i}`}
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-12px',
            marginTop: '-12px',
          }}
          animate={{
            rotate: [i * 120, i * 120 + 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            style={{
              width: '100px',
              height: '100px',
              position: 'relative',
            }}
          >
            <motion.div
              className="absolute top-0 left-1/2"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [-i * 120, -i * 120 - 360],
              }}
              transition={{
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                },
                rotate: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <Key className="w-6 h-6 text-yellow-300" />
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Lock/Unlock Animation - Left Side */}
      <motion.div
        className="absolute left-8 top-1/3"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="bg-red-400/80 rounded-full p-2 shadow-lg">
            <Lock className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-8 top-1/3"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="bg-green-400/80 rounded-full p-2 shadow-lg">
            <Unlock className="w-6 h-6 text-white" />
          </div>
        </motion.div>
      </motion.div>

      {/* Authentication Status - Right Side */}
      <motion.div
        className="absolute right-8 top-1/4"
        animate={{
          x: [0, 5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <CheckCircle2 className="w-8 h-8 text-green-300" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute right-8 bottom-1/4"
        animate={{
          x: [0, -5, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <XCircle className="w-8 h-8 text-red-300/70" />
      </motion.div>

      {/* Token Stream - Data flowing */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`token-${i}`}
          className="absolute w-1 h-8 bg-gradient-to-b from-yellow-300 to-transparent rounded-full"
          style={{
            left: `${25 + i * 15}%`,
            bottom: '-10%',
          }}
          animate={{
            y: ['0%', '-200%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* JWT Header.Payload.Signature representation */}
      <motion.div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center space-x-1 text-white/60 text-xs font-mono">
          <div className="px-2 py-1 bg-red-400/30 rounded">Header</div>
          <div>.</div>
          <div className="px-2 py-1 bg-purple-400/30 rounded">Payload</div>
          <div>.</div>
          <div className="px-2 py-1 bg-blue-400/30 rounded">Signature</div>
        </div>
      </motion.div>

      {/* Floating code brackets */}
      <motion.div
        className="absolute left-4 bottom-1/3 text-xl font-bold text-white/30"
        animate={{
          rotate: [-5, 5, -5],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {'</>'}
      </motion.div>

      <motion.div
        className="absolute right-4 top-1/2 text-xl font-bold text-white/30"
        animate={{
          rotate: [5, -5, 5],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        {'{ }'}
      </motion.div>
    </div>
  );
};

export default AnimatedJwtHero;
