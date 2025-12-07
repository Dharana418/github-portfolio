import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './shared/SectionTitle';
import { FaGraduationCap, FaBook, FaCertificate, FaPython, FaDatabase, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiHackerrank } from 'react-icons/si';

const Education = () => {
  // Education data - EDIT THIS to customize
  const education = [
    {
      id: 1,
      icon: <FaGraduationCap className="text-4xl text-primary-600" />,
      degree: 'BSc (Hons) in Information Technology',
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
      duration: '2023 - Present',
      status: '3rd Year Undergraduate',
      description: 'Pursuing a comprehensive degree in Information Technology with focus on Software Engineering, Web Development, Database Management, and System Design.',
      highlights: [
        'CGPA: 3.2',
        'Member of SLIIT Computing Society',
      ],
    },
  ];

  const coursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Web Application Development',
    'Software Engineering',
    'Mobile Application Development',
  ];

  const certifications = [
    {
      name: 'MongoDB Atlas Administrator Path',
      provider: 'MongoDB',
      year: '2024',
      icon: <SiMongodb className="text-green-600" />,
      skills: ['MongoDB', 'Database Management', 'Database Design'],
    },
    {
      name: 'MongoDB Atlas Backup & Recovery',
      provider: 'MongoDB',
      year: '2024',
      icon: <SiMongodb className="text-green-600" />,
      skills: ['MongoDB', 'Backup', 'Recovery'],
    },
    {
      name: 'MongoDB Atlas Security',
      provider: 'MongoDB',
      year: '2024',
      icon: <SiMongodb className="text-green-600" />,
      skills: ['MongoDB', 'Security', 'Database Administration'],
    },
    {
      name: 'Python Programming',
      provider: 'University of Moratuwa',
      year: '2024',
      icon: <FaPython className="text-blue-600" />,
      skills: ['Python', 'Git', 'GitHub', 'Machine Learning'],
    },
    {
      name: 'SQL (Basic)',
      provider: 'HackerRank',
      year: '2024',
      icon: <SiHackerrank className="text-green-600" />,
      skills: ['MySQL', 'Database Queries'],
    },
    {
      name: 'SQL (Advanced)',
      provider: 'HackerRank Campus Club, AUFS',
      year: '2024',
      icon: <SiHackerrank className="text-green-600" />,
      skills: ['SQL', 'Advanced Queries', 'Optimization'],
    },
    {
      name: 'SQL (Intermediate)',
      provider: 'HackerRank',
      year: '2024',
      icon: <SiHackerrank className="text-green-600" />,
      skills: ['SQL', 'Joins', 'Subqueries'],
    },
    {
      name: 'Python for Beginners',
      provider: 'University of Moratuwa',
      year: '2023',
      icon: <FaPython className="text-blue-600" />,
      skills: ['Python', 'Programming Fundamentals'],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Education" 
          subtitle="My academic journey" 
        />

        {/* Main Education */}
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 shadow-xl mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Icon */}
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                {edu.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {edu.degree}
                  </h3>
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full">
                    {edu.status}
                  </span>
                </div>

                <p className="text-xl text-primary-600 font-semibold mb-2">
                  {edu.institution}
                </p>

                <p className="text-gray-600 mb-4">
                  <span className="font-medium">📅 {edu.duration}</span>
                </p>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3">
                  {edu.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white text-primary-700 rounded-full text-sm font-medium shadow"
                    >
                      ✨ {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Coursework & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Relevant Coursework */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary-100 rounded-xl">
                <FaBook className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Relevant Coursework
              </h3>
            </div>

            <ul className="space-y-3">
              {coursework.map((course, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="text-primary-600 mt-1">▸</span>
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-accent-100 rounded-xl">
                <FaCertificate className="text-2xl text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl mt-1">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {cert.provider} • {cert.year}
                      </p>
                      {cert.skills && (
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-white text-xs text-gray-700 rounded-full border border-gray-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
