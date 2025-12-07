import { motion } from 'framer-motion';
import { Database, Plus, Edit, Trash2, RefreshCw } from 'lucide-react';

const AnimatedCrudHero = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 rounded-lg overflow-hidden flex items-center justify-center">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-64 h-64 bg-teal-400/20 rounded-full blur-3xl"
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
        className="absolute w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"
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

      {/* Central Database Icon */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
          <Database className="w-12 h-12 text-white" />
        </div>
      </motion.div>

      {/* CREATE - Plus Icon (Top) */}
      <motion.div
        className="absolute top-8"
        style={{ left: '50%', transform: 'translateX(-50%)' }}
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="bg-green-400 rounded-full p-2 shadow-lg">
          <Plus className="w-6 h-6 text-white" />
        </div>
      </motion.div>

      {/* READ - RefreshCw Icon (Right) */}
      <motion.div
        className="absolute right-12"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <div className="bg-blue-400 rounded-full p-2 shadow-lg">
          <RefreshCw className="w-6 h-6 text-white" />
        </div>
      </motion.div>

      {/* UPDATE - Edit Icon (Bottom) */}
      <motion.div
        className="absolute bottom-8"
        style={{ left: '50%', transform: 'translateX(-50%)' }}
        animate={{
          y: [0, 10, 0],
          rotate: [-10, 10, -10],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="bg-yellow-400 rounded-full p-2 shadow-lg">
          <Edit className="w-6 h-6 text-white" />
        </div>
      </motion.div>

      {/* DELETE - Trash Icon (Left) */}
      <motion.div
        className="absolute left-12"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
        animate={{
          x: [-5, 5, -5],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="bg-red-400 rounded-full p-2 shadow-lg">
          <Trash2 className="w-6 h-6 text-white" />
        </div>
      </motion.div>

      {/* Orbiting data dots */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-2px',
            marginTop: '-2px',
          }}
          animate={{
            rotate: [i * 90, i * 90 + 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              position: 'relative',
            }}
          >
            <motion.div
              className="absolute top-0 left-1/2 w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Data flow lines */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-0.5 bg-white/40"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-16 h-0.5 bg-white/40"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating brackets representing code */}
      <motion.div
        className="absolute left-8 top-12 text-2xl font-bold text-white/30"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {'{ }'}
      </motion.div>

      <motion.div
        className="absolute right-8 bottom-12 text-2xl font-bold text-white/30"
        animate={{
          y: [0, 10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        {'[ ]'}
      </motion.div>
    </div>
  );
};

export default AnimatedCrudHero;
