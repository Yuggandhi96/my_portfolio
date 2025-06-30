import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { ThemeContext } from '../context/Themecontext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#home" className="flex flex-col leading-tight">
          <span className="text-2xl font-bold text-primary">YUG KACHHIYA</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">MERN Stack Developer</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  className="font-medium hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon />}
          </button> */}
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          {/* <button 
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FiSun className="text-yellow-400" /> : <FiMoon />}
          </button> */}
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
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-secondary shadow-lg"
        >
          <nav className="container py-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="block py-2 font-medium hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;