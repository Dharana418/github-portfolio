import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export const AnimatedFinanceHero = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 overflow-hidden rounded-t-2xl">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-4 left-4 w-20 h-20 bg-green-400/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-4 right-4 w-24 h-24 bg-teal-400/20 rounded-full blur-xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.6, 0.3, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Finance elements container */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="relative">
          {/* Central Wallet */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
            >
              <Wallet className="w-16 h-16 text-green-600" strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          {/* Floating Income Arrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -left-20 top-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="bg-green-400/90 backdrop-blur-sm rounded-xl p-3 shadow-lg"
            >
              <TrendingUp className="w-8 h-8 text-white" strokeWidth={2} />
            </motion.div>
          </motion.div>

          {/* Floating Expense Arrow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -right-20 top-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
                x: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="bg-red-400/90 backdrop-blur-sm rounded-xl p-3 shadow-lg"
            >
              <TrendingDown className="w-8 h-8 text-white" strokeWidth={2} />
            </motion.div>
          </motion.div>

          {/* Floating Dollar Signs */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0, 1, 0],
                y: [-40, -80],
                x: [0, (i - 1) * 15],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.6,
                ease: 'easeOut',
              }}
              className="absolute top-0 left-1/2 -translate-x-1/2"
            >
              <DollarSign className="w-6 h-6 text-yellow-300" strokeWidth={2.5} />
            </motion.div>
          ))}

          {/* Animated circles around wallet */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 -m-8"
          >
            {[0, 120, 240].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-white/60 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${angle}deg) translateX(50px) translateY(-50%)`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Data bars animation */}
      <div className="absolute bottom-4 left-4 flex gap-1 items-end">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{
              height: [20 + i * 5, 35 + i * 5, 20 + i * 5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
            className="w-2 bg-white/50 rounded-t"
          />
        ))}
      </div>
    </div>
  );
};
