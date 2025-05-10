import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectsData = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with product management, cart functionality, and payment processing.',
      image: '/src/assets/project1.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      liveUrl: 'https://example.com/project1',
      githubUrl: 'https://github.com/yourusername/project1',
      category: 'fullstack'
    },
    {
      title: 'Task Management App',
      description: 'A productivity tool for teams to manage tasks, deadlines, and collaborative projects.',
      image: '/src/assets/project2.jpg',
      tags: ['React', 'Redux', 'Express', 'Socket.io'],
      liveUrl: 'https://example.com/project2',
      githubUrl: 'https://github.com/yourusername/project2',
      category: 'fullstack'
    },
    {
      title: 'Real Estate Listing',
      description: 'A property listing platform with search functionality, filters, and interactive maps.',
      image: '/src/assets/project3.jpg',
      tags: ['React', 'Firebase', 'Google Maps API'],
      liveUrl: 'https://example.com/project3',
      githubUrl: 'https://github.com/yourusername/project3',
      category: 'frontend'
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for monitoring social media performance metrics.',
      image: '/src/assets/project4.jpg',
      tags: ['React', 'Chart.js', 'Tailwind CSS'],
      liveUrl: 'https://example.com/project4',
      githubUrl: 'https://github.com/yourusername/project4',
      category: 'frontend'
    },
    {
      title: 'API Gateway Service',
      description: 'A microservice gateway for managing API requests, authentication, and rate limiting.',
      image: '/src/assets/project5.jpg',
      tags: ['Node.js', 'Express', 'JWT', 'Redis'],
      liveUrl: null,
      githubUrl: 'https://github.com/yourusername/project5',
      category: 'backend'
    },
    {
      title: 'Content Management System',
      description: 'A custom CMS for creating, editing, and publishing digital content.',
      image: '/src/assets/project6.jpg',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS S3'],
      liveUrl: 'https://example.com/project6',
      githubUrl: 'https://github.com/yourusername/project6',
      category: 'fullstack'
    }
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
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;