import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';
import SkillCard from './shared/SkillCard';
import { 
  FaReact, FaNodeJs, FaJava, FaPhp, FaDatabase, 
  FaGitAlt, FaFigma, FaPalette 
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiSpringboot, SiMysql, 
  SiPostgresql, SiTailwindcss, SiPostman 
} from 'react-icons/si';

const Skills = () => {
  // Skills data - EDIT THIS to customize your skills
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: <FaReact className="text-4xl text-primary-500" />,
      skills: [
        { name: 'React.js', level: 85, color: 'bg-blue-500' },
        { name: 'HTML/CSS', level: 90, color: 'bg-orange-500' },
        { name: 'Tailwind CSS', level: 80, color: 'bg-cyan-500' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
      ]
    },
    {
      category: 'Backend Development',
      icon: <FaNodeJs className="text-4xl text-green-500" />,
      skills: [
        { name: 'Node.js', level: 80, color: 'bg-green-500' },
        { name: 'Express.js', level: 75, color: 'bg-gray-600' },
        { name: 'Java', level: 70, color: 'bg-red-500' },
        { name: 'Spring Boot', level: 65, color: 'bg-green-600' },
        { name: 'PHP', level: 60, color: 'bg-indigo-500' },
      ]
    },
    {
      category: 'Databases',
      icon: <FaDatabase className="text-4xl text-purple-500" />,
      skills: [
        { name: 'MongoDB', level: 80, color: 'bg-green-600' },
        { name: 'MySQL', level: 75, color: 'bg-blue-600' },
        { name: 'PostgreSQL', level: 70, color: 'bg-blue-700' },
      ]
    },
    {
      category: 'Tools & Others',
      icon: <FaGitAlt className="text-4xl text-orange-500" />,
      skills: [
        { name: 'Git & GitHub', level: 85, color: 'bg-gray-700' },
        { name: 'REST APIs', level: 80, color: 'bg-teal-500' },
        { name: 'UI/UX Design', level: 70, color: 'bg-pink-500' },
        { name: 'Figma', level: 65, color: 'bg-purple-500' },
        { name: 'Postman', level: 75, color: 'bg-orange-500' },
      ]
    },
  ];

  // Tech stack icons for visual display
  const techIcons = [
    { Icon: FaReact, name: 'React', color: 'text-blue-500' },
    { Icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
    { Icon: FaJava, name: 'Java', color: 'text-red-500' },
    { Icon: SiSpringboot, name: 'Spring Boot', color: 'text-green-600' },
    { Icon: FaPhp, name: 'PHP', color: 'text-indigo-500' },
    { Icon: SiMongodb, name: 'MongoDB', color: 'text-green-600' },
    { Icon: SiMysql, name: 'MySQL', color: 'text-blue-600' },
    { Icon: FaGitAlt, name: 'Git', color: 'text-orange-500' },
    { Icon: SiTailwindcss, name: 'Tailwind', color: 'text-cyan-500' },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="Technologies I work with" 
        />

        {/* Tech Icons Display */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {techIcons.map(({ Icon, name, color }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="p-4 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                <Icon className={`text-5xl ${color}`} />
              </div>
              <p className="mt-2 text-sm text-gray-600 font-medium">{name}</p>
            </motion.div>
          ))}
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.category} category={category} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Always learning, always growing. Currently exploring{' '}
            <span className="text-primary-600 font-semibold">Cloud Technologies</span> and{' '}
            <span className="text-accent-500 font-semibold">DevOps practices</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
