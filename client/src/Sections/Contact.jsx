// src/Sections/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
// Import icons from react-icons
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
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
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-blue-500 p-3 rounded-lg text-white">
                <FiMapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">New York, NY, United States</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-green-500 p-3 rounded-lg text-white">
                <FiMail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">contact@yourportfolio.com</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="bg-purple-500 p-3 rounded-lg text-white">
                <FiPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+1 (123) 456-7890</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mt-12">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
                   className="bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition-colors">
                  <FiGithub className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" 
                   className="bg-blue-700 p-3 rounded-full text-white hover:bg-blue-600 transition-colors">
                  <FiLinkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" 
                   className="bg-blue-400 p-3 rounded-full text-white hover:bg-blue-300 transition-colors">
                  <FiTwitter className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Me a Message</h3>
              
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Hello, I'd like to talk about..."
                  ></textarea>
                </div>
                
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;