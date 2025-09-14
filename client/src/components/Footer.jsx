import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart, FiCpu } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/yuggandhi96', label: 'GitHub' },
  ];
  
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              {/* <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center text-white font-bold">
                YK
              </div> */}
              <h3 className="text-2xl font-bold text-primary">Yug Kachhiya</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Full Stack Developer & AI Enthusiast crafting intelligent digital experiences 
              with cutting-edge technologies and innovative solutions.
            </p>
          </div>
          
          <div className="md:col-span-4 md:col-start-9">
            <h4 className="text-lg font-semibold mb-4 text-primary">Connect With Me</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary text-xl transition-colors bg-gray-800 hover:bg-gray-700 p-2 rounded-lg"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">Interested in working together?</p>
              <a 
                href="mailto:yug.kachhiya@example.com" 
                className="text-primary font-medium hover:underline"
              >
                Let's discuss your project →
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 flex items-center">
            <span>&copy; {currentYear} YUG KACHHIYA. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;