import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container flex flex-col items-center text-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <motion.span
            className="inline-block text-primary font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi there, I'm
          </motion.span>
          
          <motion.h1
            className="font-bold mb-4 text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Yug Kachhiya
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl mb-8 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I am a <span className="text-primary">MERN Stack Developer</span> passionate about building modern web applications
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            
          </motion.div>
          
          <motion.div
            className="flex mt-8 space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* <a 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a> */}
          </motion.div>
        </div>
        
        {/* <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-50"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-full overflow-hidden p-1">
              <img 
                src="/src/assets/profile.jpg" 
                alt="Your Name" 
                className="w-full aspect-square rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div> */}
      </div>
      
      <motion.a
        href="#about"
        className="flex justify-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <motion.div 
          className="p-2 bg-primary/10 rounded-full text-primary"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;