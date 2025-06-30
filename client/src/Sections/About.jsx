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
              Hello! I'm an experienced <span className="text-primary font-semibold">MERN Stack Developer</span> with a strong passion for building robust and scalable web applications. My expertise lies in developing end-to-end solutions using MongoDB, Express.js, React, and Node.js.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              I have a proven track record of delivering high-quality, responsive, and user-centric applications. I enjoy collaborating with cross-functional teams, solving complex problems, and continuously learning new technologies to stay ahead in the fast-evolving web development landscape.
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              My goal is to create impactful digital experiences by writing clean, maintainable code and following best practices. I am committed to professional growth and always strive to bring value to every project I work on.
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