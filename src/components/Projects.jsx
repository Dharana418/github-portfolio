import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';
import ProjectCard from './shared/ProjectCard';
import { AnimatedCarHero } from './shared/AnimatedCarHero';
import { AnimatedFinanceHero } from './shared/AnimatedFinanceHero';
import AnimatedFarmHero from './shared/AnimatedFarmHero';
import AnimatedTaskHero from './shared/AnimatedTaskHero';
import AnimatedCrudHero from './shared/AnimatedCrudHero';
import AnimatedJwtHero from './shared/AnimatedJwtHero';

const Projects = () => {
  // Project data - EDIT THIS to add your own projects
  const projects = [
    {
      id: 1,
      title: 'GlamourRide - Vehicle Rental System',
      description: 'My very first web development project - A complete vehicle rental management system with user authentication, vehicle booking, reservation management, and payment processing. Features admin panel for vehicle and booking management.',
      animatedComponent: <AnimatedCarHero />,
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      githubLink: 'https://github.com/Dharana418/IWT-project-GlamourRide',
      liveLink: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Finance Tracker App',
      description: 'An Android finance management application built with Room Database and SQLite. Track income, expenses, and manage budgets with real-time data persistence. Features beautiful data visualizations, category management, and detailed transaction history.',
      animatedComponent: <AnimatedFinanceHero />,
      technologies: ['Android', 'Java', 'Room DB', 'SQLite', 'Material Design'],
      githubLink: 'https://github.com/Dharana418/Finance-Tracker-App-with-RoomDB-and-SQlite',
      liveLink: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'AgroVista - Farm Management System',
      description: 'A comprehensive agriculture management system for modern farming operations. Features crop monitoring, inventory management, farmer dashboard, resource tracking, and analytics. Built with MERN stack for real-time farm operations management.',
      animatedComponent: <AnimatedFarmHero />,
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
      githubLink: 'https://github.com/uvindu827/AgroVista',
      liveLink: '#',
      featured: true,
    },
    {
      id: 4,
      title: 'Task Manager Web App',
      description: 'A collaborative task management web application with Kanban board interface. Features task creation, assignment, progress tracking, deadline management, and real-time status updates. Built with modern web technologies for seamless team collaboration.',
      animatedComponent: <AnimatedTaskHero />,
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
      githubLink: 'https://github.com/Dharana418/Task-manager-App',
      liveLink: '#',
      featured: true,
    },
    {
      id: 5,
      title: 'CRUD App Backend - MERN Stack',
      description: 'A full-featured RESTful API backend built with MERN stack. Implements complete CRUD operations (Create, Read, Update, Delete) with MongoDB database integration. Features robust error handling, data validation, and Express.js routing for scalable backend architecture.',
      animatedComponent: <AnimatedCrudHero />,
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'Mongoose'],
      githubLink: 'https://github.com/Dharana418/simple-crud-app-backend',
      liveLink: '#',
      featured: true,
    },
    {
      id: 6,
      title: 'JWT Authentication System',
      description: 'A secure authentication system implementing JSON Web Tokens (JWT) for user authentication and authorization. Features token generation, validation, refresh tokens, and secure key management. Built with industry-standard security practices for protecting API endpoints.',
      animatedComponent: <AnimatedJwtHero />,
      technologies: ['Node.js', 'JWT', 'Express.js', 'Bcrypt', 'Security'],
      githubLink: 'https://github.com/Dharana418/JWT-2',
      liveLink: '#',
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="Some of my recent work" 
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>

        {/* View More Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <a
            href="https://github.com/Dharana418"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-900 hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium"
          >
            View GitHub Profile →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
