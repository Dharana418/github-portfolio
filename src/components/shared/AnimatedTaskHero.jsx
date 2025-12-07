import { motion } from 'framer-motion';
import { CheckSquare, Square, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';

const AnimatedTaskHero = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 rounded-lg overflow-hidden flex items-center justify-center">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-64 h-64 bg-pink-400/20 rounded-full blur-3xl"
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
        className="absolute w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
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

      {/* Task Board Container */}
      <div className="relative z-10 w-full px-8">
        <div className="flex justify-around items-start">
          {/* Todo Column */}
          <div className="flex flex-col space-y-2">
            <motion.div
              className="text-xs font-semibold text-white/80 mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              TO DO
            </motion.div>
            
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`todo-${i}`}
                className="bg-white/90 rounded-md p-2 shadow-lg flex items-center space-x-2 w-24"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3 + i * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <Square className="w-4 h-4 text-gray-400" />
                <div className="flex-1 h-2 bg-gray-200 rounded" />
              </motion.div>
            ))}
          </div>

          {/* In Progress Column */}
          <div className="flex flex-col space-y-2">
            <motion.div
              className="text-xs font-semibold text-white/80 mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              IN PROGRESS
            </motion.div>
            
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={`progress-${i}`}
                className="bg-yellow-100/90 rounded-md p-2 shadow-lg flex items-center space-x-2 w-24"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.6 + i * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <Clock className="w-4 h-4 text-amber-600" />
                <div className="flex-1 h-2 bg-amber-200 rounded" />
              </motion.div>
            ))}
            
            {/* Animated loading bar */}
            <motion.div
              className="bg-white/90 rounded-md p-2 shadow-lg w-24"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="h-2 bg-gradient-to-r from-amber-400 to-amber-600 rounded"
                animate={{
                  width: ['30%', '80%', '30%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          {/* Done Column */}
          <div className="flex flex-col space-y-2">
            <motion.div
              className="text-xs font-semibold text-white/80 mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              DONE
            </motion.div>
            
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={`done-${i}`}
                className="bg-green-100/90 rounded-md p-2 shadow-lg flex items-center space-x-2 w-24"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.8 + i * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                <CheckSquare className="w-4 h-4 text-green-600" />
                <div className="flex-1 h-2 bg-green-200 rounded" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating task icons */}
      <motion.div
        className="absolute left-4 top-8"
        animate={{
          y: [0, -10, 0],
          rotate: [-10, 10, -10],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <CheckCircle2 className="w-8 h-8 text-green-300" />
      </motion.div>

      <motion.div
        className="absolute right-4 bottom-8"
        animate={{
          y: [0, -8, 0],
          rotate: [10, -10, 10],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <AlertCircle className="w-8 h-8 text-red-300" />
      </motion.div>

      {/* Moving checkmark */}
      <motion.div
        className="absolute"
        animate={{
          x: ['10%', '90%'],
          y: ['20%', '60%', '20%'],
        }}
        transition={{
          duration: 4,
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
          <CheckSquare className="w-6 h-6 text-white/40" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedTaskHero;
