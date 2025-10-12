import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

// Import images from public folder
const projectImages = {
  learnStack: '/image.png',
  chatbot: '/project5.png',
  ecommerce: '/project1.png',
  taskManager: '/project2.png',
  apiGateway: '/project3.png',
  AIAssistance: '/project6.png',
};

const Projects = () => {
  const projectsData = [
    {
      title: 'LEARN STACK',
      description: 'A comprehensive learning platform for Web developers with complete Roadmap and interactive tutorials.',
      image: projectImages.learnStack,
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'fullstack',
      liveUrl: 'https://learn-stack.vercel.app/',
    },
    {
      title: 'Generative AI Chatbot',
      description: 'An intelligent chatbot powered by large language models with contextual memory and API integrations.',
      image: projectImages.chatbot,
      tags: ['Gemini 2.5 Flask', 'LangChain', 'React.js', 'MongoDB','Python'],
      category: 'Generative AI',
      liveUrl: 'https://orbit-ai-six.vercel.app/',
    },
    {
      title: 'Personal AI Assistance',
      description: 'enterprise-grade AI assistant that automates complex business processes, leverages data for actionable insights, and streamlines workflows to drive operational efficiency and empower strategic decision-making across the entire organization',
      image: projectImages.AIAssistance,
      tags: ['AI', 'Automation','Python'],
      category: 'Generative AI',
      liveUrl: '#',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with product management, cart functionality, and payment processing.',
      image: projectImages.ecommerce,
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Frontend',
      liveUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'A productivity tool for teams to manage tasks, deadlines, and collaborative projects.',
      image: projectImages.taskManager,
      tags: ['React', 'Redux', 'Express', 'Socket.io'],
      category: 'Frontend',
      liveUrl: '#',
    },
    {
      title: 'API Gateway Service',
      description: 'A microservice gateway for managing API requests, authentication, and rate limiting.',
      image: projectImages.apiGateway,
      tags: ['Node.js', 'Express', 'JWT', 'Redis'],
      category: 'backend',
      liveUrl: '#',
    },
  ];
  
  // Show all projects (filtering removed)
  const filteredProjects = projectsData;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="projects" className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full -translate-x-1/3 translate-y-1/3 opacity-50 blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Check out some of my recent work and personal projects
          </p>
        </motion.div>
        
        {/* Category filter removed - showing all projects */}
        
        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to gradient background if image fails to load
                        e.target.style.display = 'none';
                        e.target.parentNode.classList.add('bg-gradient-to-r', 'from-blue-400', 'to-purple-500');
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-white text-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
                        >
                          <FiExternalLink size={18} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-white text-gray-800 rounded-full hover:bg-gray-900 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                        >
                          <FiGithub size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-5 flex-grow flex flex-col items-center text-center">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow text-center">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Category Badge */}
                    <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-center">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}
        
        {/* More Projects Link */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/*   */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;