import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/yuggandhi96', label: 'GitHub' },
    // { icon: <FiLinkedin />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    // { icon: <FiTwitter />, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    // { icon: <FiMail />, href: 'mailto:your.email@example.com', label: 'Email' },
  ];
  
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-primary mb-2">Portfolio</h3>
            <p className="text-sm text-gray-300">
              Building digital experiences with passion and precision.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary text-xl transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              &copy; {currentYear} YUG KACHHIYA. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;