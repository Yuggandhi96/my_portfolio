import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun, FiCode, FiCpu } from 'react-icons/fi';
import { ThemeContext } from '../context/Themecontext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative">
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-bold text-primary group-hover:text-blue-600 transition-colors">YUG KACHHIYA</span>
            <span className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1">
              <span>Full Stack Developer & AI Enthusiast</span>
            </span>
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  className={`font-medium transition-colors relative py-1 ${
                    activeSection === item.href.substring(1) 
                      ? 'text-primary font-semibold' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary'
                  }`}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                      layoutId="activeSection"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon />}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-2xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-secondary shadow-lg overflow-hidden"
          >
            <nav className="container py-4">
              <ul className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a 
                      href={item.href}
                      className={`block py-2 font-medium transition-colors px-2 rounded ${
                        activeSection === item.href.substring(1) 
                          ? 'text-primary bg-blue-50 dark:bg-blue-900/20' 
                          : 'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a 
                    href="#contact"
                    className="block w-full text-center py-2 bg-primary text-white rounded-md font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;