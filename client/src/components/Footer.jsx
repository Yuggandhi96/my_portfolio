import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/yuggandhi96', label: 'GitHub' },
    { icon: <FiMail />, href: 'mailto:gandhiyug158@gmail.com', label: 'Email' },
  ];
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Section */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              YUG KACHHIYA
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Fullstack Developer & AI Enthusiast crafting innovative digital solutions
            </p>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex space-x-5 mb-5">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xl transition-colors p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            
            {/* Copyright */}
            <motion.p 
              className="text-sm text-gray-500 dark:text-gray-500 flex items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              
            </motion.p>
          </motion.div>
        </div>
        
        {/* Bottom Text */}
        <motion.div 
          className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-xs text-gray-500 dark:text-gray-500">
            YUG KACHHIYA. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;


