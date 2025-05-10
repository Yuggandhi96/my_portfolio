import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know more about my background and what drives me"
        />
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden p-1">
                <img 
                  src="/src/assets/about.jpg" 
                  alt="About Me" 
                  className="w-full rounded-lg" 
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Hello! I'm a passionate full-stack developer with over 5 years of experience creating robust web applications. I specialize in React for frontend development and Node.js/Express for backend solutions.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              My journey in software development began at University XYZ, where I earned my degree in Computer Science. Since then, I've worked with diverse teams to deliver high-quality projects that solve real-world problems.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities like hiking and photography.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/src/assets/resume.pdf" 
                download
                className="btn btn-primary text-center"
              >
                Download Resume
              </a>
              <a 
                href="#experience" 
                className="btn btn-outline text-center"
              >
                My Experience
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;