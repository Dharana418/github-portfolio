import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <div className="grid md:grid-columns-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/profile.jpg" 
                  alt="Dharana Thilakarathne" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-200 rounded-full opacity-50 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-200 rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Passionate Developer & Lifelong Learner 🌟
            </h3>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Hey there! I'm a <span className="text-primary-600 font-semibold">3rd-year Information Technology student</span> at 
              the Sri Lanka Institute of Information Technology (SLIIT), on a mission to turn ideas into elegant digital solutions.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              With a deep passion for <span className="font-semibold">full-stack development</span>, I love diving into both 
              the creative world of frontend design and the logical challenges of backend architecture. Whether it's building 
              intuitive user interfaces or designing robust APIs, I'm always eager to learn and grow.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I thrive in <span className="text-accent-500 font-semibold">collaborative environments</span> where teamwork meets 
              innovation. My goal? To join a forward-thinking company as a <span className="font-semibold">Software Engineering Intern</span>, 
              where I can contribute meaningfully, learn from experienced professionals, and help build products that make a difference.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-xl">
                <p className="text-primary-600 dark:text-primary-400 font-bold text-2xl">3+</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Years of Learning</p>
              </div>
              <div className="bg-accent-50 dark:bg-accent-900/20 p-4 rounded-xl">
                <p className="text-accent-600 dark:text-accent-400 font-bold text-2xl">10+</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Projects Completed</p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-3 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium"
              >
                Let's Connect →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
