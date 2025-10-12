import { motion } from 'framer-motion';
import { FiDownload, FiBriefcase, FiStar, FiCpu, FiCode, FiLayout } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full translate-x-1/3 translate-y-1/3 opacity-50 blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
            Get to know more about my background and what drives me
          </p>
        </motion.div>
        
        <motion.div 
          className="w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Professional Intro */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 text-white text-3xl">
              <FiCode className="w-10 h-10" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Full-Stack Developer & AI Enthusiast
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center">
              Passionate about building innovative digital solutions that make an impact
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed mx-auto max-w-3xl">
            <p className="text-center">
              I am a <span className="text-blue-600 dark:text-blue-400 font-semibold">Full-Stack Developer and AI Enthusiast</span>, passionate about building digital solutions that are not only functional but also impactful. My journey in technology began with curiosity and grew into a commitment to creating web applications that combine innovation, usability, and intelligence.
            </p>
            
            <p className="text-center">
              I enjoy working across the entire stack — from designing sleek and responsive frontends to developing robust and scalable backends. Alongside this, I explore Artificial Intelligence, finding ways to integrate it into real-world applications such as chatbots, automation tools, and smart systems.
            </p>
            
            {/* What drives me section */}
            <div className="py-6 border-y border-gray-200 dark:border-gray-700 my-8">
              <div className="flex flex-col items-center mb-4">
                <FiStar className="text-yellow-500 mb-2 text-xl" />
                <span className="font-semibold text-gray-800 dark:text-white text-lg">What drives me:</span>
              </div>
              <ul className="space-y-3 text-center">
                <li className="flex flex-col items-center">
                  {/* <span className="w-2 h-2 rounded-full bg-blue-500 mb-2 flex-shrink-0"></span> */}
                  <span>Turning ideas into meaningful applications.</span>
                </li>
                <li className="flex flex-col items-center">
                  {/* <span className="w-2 h-2 rounded-full bg-blue-500 mb-2 flex-shrink-0"></span> */}
                  <span>Exploring and applying AI in creative ways.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Expertise Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl mb-4">
                <FiLayout className="w-7 h-7" />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Frontend Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Creating intuitive and responsive user interfaces</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl mb-4">
                <FiCpu className="w-7 h-7" />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Backend Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Building robust and scalable server-side solutions</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl mb-4">
                <FiCpu className="w-7 h-7" />
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">AI Integration</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Implementing intelligent features and automation</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <motion.a 
              href="#experience" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiBriefcase className="w-4 h-4" />
              View Experience
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;