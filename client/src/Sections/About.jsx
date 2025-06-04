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
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Hello! I'm an intermediate MERN stack developer passionate about creating web applications. I specialize in building full-stack solutions using MongoDB, Express.js, React, and Node.js.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I'm currently focused on developing responsive and user-friendly web applications while continuously learning and improving my skills in modern web development practices and tools.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              My goal is to create efficient, scalable, and maintainable applications while staying up-to-date with the latest technologies in the MERN stack ecosystem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <a 
                href="/assets/resume.pdf" 
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
              </a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;