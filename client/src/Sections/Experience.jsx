import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiCode, FiBriefcase } from 'react-icons/fi';

const Experience = () => {
  const experienceData = [
    {
      period: '2024 - Present',
      title: 'MERN STACK DEVELOPER',
      company: 'BRANDSMITH WORLDWIDE',
      location: 'Narayan Garden Road New Alkapuri, Vadodara',
      description: 'Developing and maintaining full-stack web applications using MongoDB, Express.js, React, and Node.js. Building responsive user interfaces, RESTful APIs, and implementing authentication systems. Collaborating with teams to deliver high-quality software solutions.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git'],
      achievements: [
        'Built 3+ production applications from concept to deployment',
        'Improved application performance by 40% through code optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full translate-x-1/3 translate-y-1/3 opacity-50 blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and career progression
          </p>
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 dark:from-blue-500 dark:via-purple-600 dark:to-pink-600 transform -translate-x-px md:-translate-x-1/2"></div>
          
          {/* Experience items */}
          {experienceData.map((experience, index) => (
            <motion.div 
              key={index} 
              className="relative pl-14 md:pl-0 mb-16 md:mb-20"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border-4 border-white dark:border-gray-900 shadow-lg transform -translate-x-3 md:-translate-x-1/2 z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              
              {/* Connector line for mobile */}
              <div className="absolute left-4 top-6 bottom-0 w-0.5 bg-blue-300 dark:bg-blue-700 md:hidden"></div>
              
              {/* Content container */}
              <div className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden ${index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'}`}>
                {/* Decorative accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500"></div>
                
                {/* Period */}
                <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                  <FiCalendar className="mr-2" />
                  <span>{experience.period}</span>
                </div>
                
                {/* Title and Company (center on mobile, left on desktop) */}
                <div className="flex flex-col md:flex-row items-center md:items-start mb-4 text-center md:text-left">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg mb-3 md:mb-0 md:mr-4">
                    <FiBriefcase className="text-blue-600 dark:text-blue-400 text-lg" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {experience.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                      {experience.company}
                    </h4>
                  </div>
                </div>
                
                {/* Location (center on mobile) */}
                <div className="flex items-center justify-center md:justify-start text-sm text-gray-600 dark:text-gray-400 mb-5">
                  <FiMapPin className="mr-2" />
                  <span>{experience.location}</span>
                </div>
                
                {/* Description (center on mobile) */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed pl-0 md:pl-4 text-center md:text-left border-l-0 md:border-l-2 md:border-blue-100 dark:md:border-blue-900">
                  {experience.description}
                </p>
                
                {/* Key Achievements */}
                {experience.achievements && (
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center justify-center md:justify-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                      KEY ACHIEVEMENTS
                    </h5>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Technologies (center on mobile) */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    <FiCode className="mr-2" />
                    <span>TECHNOLOGIES & SKILLS</span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {experience.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-100 dark:border-blue-800/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Future timeline item (for visual balance) */}
          <motion.div 
            className="relative pl-14 md:pl-0"
            variants={itemVariants}
          >
            <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-white dark:border-gray-900 shadow-lg transform -translate-x-3 md:-translate-x-1/2 z-10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 border-dashed opacity-80 relative overflow-hidden md:ml-16">
              <div className="absolute top-0 left-0 w-1 h-full bg-gray-300 dark:bg-gray-700"></div>
              
              <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 font-medium mb-2">
                <FiCalendar className="mr-2" />
                <span>Future</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1 text-center">
                Next Opportunity
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-center">
                Your company could be here next!.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;