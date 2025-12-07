import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedCarHero = () => {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 overflow-hidden rounded-t-2xl">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-4 left-4 w-16 h-16 bg-blue-400/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-4 right-4 w-20 h-20 bg-indigo-400/20 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Car container with floating animation */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <svg
          viewBox="0 0 800 400"
          className="w-3/4 h-auto drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Car body */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
            d="M150 250 L250 200 L350 180 L500 180 L600 200 L700 250 L700 300 L150 300 Z"
            fill="#ffffff"
            stroke="#e2e8f0"
            strokeWidth="3"
          />
          {/* Car windows */}
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            d="M280 200 L320 185 L420 185 L460 200 L460 240 L280 240 Z"
            fill="#3b82f6"
            opacity="0.3"
          />
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            d="M480 200 L520 190 L580 190 L620 200 L620 240 L480 240 Z"
            fill="#3b82f6"
            opacity="0.3"
          />
          {/* Wheels */}
          <motion.circle
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8, type: 'spring' }}
            cx="250"
            cy="300"
            r="45"
            fill="#1e293b"
          />
          <motion.circle
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.9, type: 'spring' }}
            cx="600"
            cy="300"
            r="45"
            fill="#1e293b"
          />
          {/* Wheel rims */}
          <motion.circle
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            cx="250"
            cy="300"
            r="25"
            fill="#64748b"
          />
          <motion.circle
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            cx="600"
            cy="300"
            r="25"
            fill="#64748b"
          />
          {/* Headlights */}
          <motion.circle
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            cx="680"
            cy="240"
            r="8"
            fill="#fbbf24"
          />
          <motion.circle
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            cx="680"
            cy="260"
            r="8"
            fill="#fbbf24"
          />
        </svg>
      </motion.div>

      {/* Speed lines effect */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 200, opacity: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeOut',
          }}
          className="absolute top-1/2 left-0 w-16 h-0.5 bg-white/40 rounded-full"
          style={{ transform: `translateY(${i * 15 - 15}px)` }}
        />
      ))}
    </div>
  );
};
