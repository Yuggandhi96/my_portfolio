import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Import icons from react-icons
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiSend, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

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
    transition: { duration: 0.5 }
  }
};

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // WhatsApp contact number (without + sign)
  const whatsappNumber = '9023086942';
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle WhatsApp redirect
  const handleWhatsAppRedirect = () => {
    // Construct message from form data if available
    let message = `Hello! I'm interested in discussing a potential project with you.`;
    
    if (formData.name) {
      message += ` My name is ${formData.name}.`;
    }
    
    if (formData.subject) {
      message += ` I'd like to talk about ${formData.subject}.`;
    }
    
    if (formData.message) {
      message += ` ${formData.message}`;
    }
    
    // Create default message text
    const defaultMessage = encodeURIComponent(message);
    
    // Generate WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full -translate-x-1/3 translate-y-1/3 opacity-50 blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'm always open to discussing new projects, creative ideas or opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div variants={itemVariants} className="flex items-start space-x-4 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-500 p-3 rounded-xl text-white flex-shrink-0">
                <FiMapPin className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 text-gray-800 dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">PADRA, Vadodara</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-500 p-3 rounded-xl text-white flex-shrink-0">
                <FiMail className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 text-gray-800 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">gandhiyug158@gmail.com</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4 p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-500 p-3 rounded-xl text-white flex-shrink-0">
                <FiPhone className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 text-gray-800 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+91 9023086942</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mt-8 md:mt-12">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/yuggandhi96" target="_blank" rel="noopener noreferrer" 
                   className="bg-gray-800 p-3 rounded-xl text-white hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1">
                  <FiGithub className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                {/* <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" 
                   className="bg-blue-700 p-3 rounded-xl text-white hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1">
                  <FiLinkedin className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" 
                   className="bg-blue-400 p-3 rounded-xl text-white hover:bg-blue-300 transition-all duration-300 transform hover:-translate-y-1">
                  <FiTwitter className="w-5 h-5 md:w-6 md:h-6" />
                </a> */}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg mr-4">
                <FiMessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Send Me a Message</h3>
            </div>
            
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  placeholder="xyz@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Connect via WhatsApp
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Prefer email? Just send to{' '}
                <a href="mailto:gandhiyug158@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  gandhiyug158@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;