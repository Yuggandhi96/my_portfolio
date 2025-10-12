import { 
  FiCode, 
  FiServer, 
  FiDatabase, 
  FiLayout, 
  FiTool, 
  FiGitBranch, 
  FiCpu, 
  FiCloud,
  FiBox,
  FiCpu as FiAi
} from 'react-icons/fi';

const Skills = () => {
  const skillsData = [
    {
      icon: <FiCode className="text-xl" />,
      name: 'Languages & Core',
      skills: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3'],
      color: "bg-blue-500"
    },
    {
      icon: <FiLayout className="text-xl" />,
      name: 'Frontend',
      skills: ['React', 'Vue.js', 'Tailwind CSS'],
      color: "bg-purple-500"
    },
    {
      icon: <FiServer className="text-xl" />,
      name: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Authentication', 'Socket.io'],
      color: "bg-green-500"
    },
    {
      icon: <FiDatabase className="text-xl" />,
      name: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
      color: "bg-amber-500"
    },
    {
      icon: <FiCloud className="text-xl" />,
      name: 'Cloud & DevOps',
      skills: ['Docker', 'Vercel', 'CI/CD Pipelines'],
      color: "bg-cyan-500"
    },
    {
      icon: <FiAi className="text-xl" />,
      name: 'AI & ML',
      skills: ['OpenAI API', 'LangChain', 'Vector DBs', 'LLMs', 'Coqui TTS', 'Hugging Face'],
      color: "bg-pink-500"
    },
    {
      icon: <FiTool className="text-xl" />,
      name: 'MLOps & AI Tools',
      skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'RAG'],
      color: "bg-rose-500"
    },
    {
      icon: <FiGitBranch className="text-xl" />,
      name: 'Dev Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Jest', 'Webpack'],
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="skills" className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full translate-x-1/3 translate-y-1/3 opacity-50 blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Tech Stack & <span className="text-blue-600 dark:text-blue-400">Expertise</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            A comprehensive blend of full-stack development expertise and cutting-edge AI tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col transform hover:-translate-y-1 text-center"
            >
              <div className="flex flex-col items-center mb-4">
                <div className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl ${skill.color} bg-opacity-10 dark:bg-opacity-20 text-${skill.color.split('-')[1]}-600 dark:text-${skill.color.split('-')[1]}-400 group-hover:bg-opacity-20 group-hover:dark:bg-opacity-30 transition-all duration-300 mb-3`}>
                  {skill.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto justify-center">
                {skill.skills.map((item, idx) => (
                  <span 
                    key={idx}
                    className="inline-block px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg group-hover:bg-blue-50 group-hover:dark:bg-blue-900/20 transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
            <FiBox className="mr-2" />
            Continuously learning and integrating new technologies
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;