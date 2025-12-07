import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <p className="text-lg sm:text-xl text-primary-600 font-medium mb-4 animate-fade-in">
            👋 Hi, I'm 
          </p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient">Dharana Thilakarathne</span>
          </h1>

          {/* Tagline - CATCHY HEADLINE */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-6 animate-slide-up">
            Crafting Code, Building Dreams 🚀
          </h2>

          {/* Short Introduction */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
            A passionate <span className="text-primary-600 font-semibold">Full-Stack Developer</span> and 
            3rd-year IT student at <span className="font-semibold">SLIIT</span>, 
            eager to solve problems, learn continuously, and create impactful solutions as a 
            <span className="text-accent-500 font-semibold"> Software Engineering Intern</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#projects"
              className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-3 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium text-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 font-medium text-lg"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in">
            <a
              href="https://github.com/Dharana418"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transform hover:scale-125 transition-all duration-200"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/dharana-thilakarathne"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transform hover:scale-125 transition-all duration-200"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://twitter.com/dharana418"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 transform hover:scale-125 transition-all duration-200"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="mailto:thiyunuwan567@gmail.com"
              className="text-gray-600 hover:text-primary-600 transform hover:scale-125 transition-all duration-200"
            >
              <FaEnvelope size={30} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce-slow">
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Scroll to explore</p>
            <div className="flex justify-center">
              <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary-600 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
