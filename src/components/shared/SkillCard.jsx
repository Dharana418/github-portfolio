import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ icon, title, description, skills = [], level = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Icon */}
      <div className="mb-4">
        <div className="p-4 bg-gradient-to-br from-primary-100 to-accent-100 text-primary-600 rounded-xl inline-block">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>

      {/* Description */}
      {description && (
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
      )}

      {/* Skills List */}
      {skills.length > 0 && (
        <div className="space-y-2 mb-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      )}

      {/* Progress/Level Bar */}
      {level > 0 && (
        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Proficiency</span>
            <span>{level}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
            ></motion.div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SkillCard;
