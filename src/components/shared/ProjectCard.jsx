import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const ProjectCard = ({ 
  title, 
  description, 
  technologies = [], 
  githubLink = '#', 
  liveLink = '#', 
  featured = false,
  image = null,
  animatedComponent = null
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative group"
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-semibold rounded-full shadow-lg">
            <FaStar className="text-xs" /> Featured
          </span>
        </div>
      )}

      {/* Project Image/Placeholder/Animated Component */}
      {animatedComponent ? (
        animatedComponent
      ) : (
        <div className="relative h-48 bg-gradient-to-br from-primary-100 via-accent-100 to-pink-100 overflow-hidden">
          {image ? (
            typeof image === 'string' && (image.startsWith('http') || image.startsWith('/')) ? (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl text-primary-300 opacity-50">{image}</div>
              </div>
            )
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-6xl text-primary-300 opacity-50">💻</div>
            </div>
          )}
        </div>
      )}
        
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4 z-20">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white text-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-300"
          title="View on GitHub"
        >
          <FaGithub className="text-xl" />
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-white text-gray-800 rounded-full hover:bg-accent-500 hover:text-white transition-colors duration-300"
          title="View Live Demo"
        >
          <FaExternalLinkAlt className="text-xl" />
        </a>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full border border-primary-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
