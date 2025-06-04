import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectsData = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with product management, cart functionality, and payment processing.',
      image: 'public/project1.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      // liveUrl: 'https://example.com/project1',
      // githubUrl: 'https://github.com/yourusername/project1',
      category: 'fullstack'
    },
    {
      title: 'Task Management App',
      description: 'A productivity tool for teams to manage tasks, deadlines, and collaborative projects.',
      image: 'public/project2.png',
      tags: ['React', 'Redux', 'Express', 'Socket.io'],
      // liveUrl: 'https://example.com/project2',
      // githubUrl: 'https://github.com/yourusername/project2',
      category: 'fullstack'
    },
    {
      title: 'API Gateway Service',
      description: 'A microservice gateway for managing API requests, authentication, and rate limiting.',
      image: 'public/project3.png',
      tags: ['Node.js', 'Express', 'JWT', 'Redis'],
      liveUrl: null,
      // githubUrl: 'https://github.com/yourusername/project5',
      category: 'backend'
    },
  ];
  
  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
  ];
  
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <SectionHeading 
          title="My Projects" 
          subtitle="Check out some of my recent work and personal projects"
        />
        
        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            {categories.map((category) => (
              <button
                key={category.value}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category.value
                    ? 'bg-primary text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        {/* More Projects Link */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View More on GitHub
          </a> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;