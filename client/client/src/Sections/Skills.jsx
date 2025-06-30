import { FiCode, FiServer, FiDatabase, FiLayout, FiTool, FiGitBranch } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const skillsData = [
    {
      icon: <FiCode />,
      name: 'Languages & Core Technologies',
      skills: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3']
    },
    {
      icon: <FiLayout />,
      name: 'Frontend Frameworks & Libraries',
      skills: ['React', 'Next.js', 'Angular', 'Vue.js']
    },
    {
      icon: <FiServer />,
      name: 'Backend & Runtime',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Authentication']
    },
    {
      icon: <FiDatabase />,
      name: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL']
    },
    {
      icon: <FiTool />,
      name: 'Cloud & DevOps',
      skills: [ 'Docker',  'Vercel', 'Netlify', 'Heroku']
    },
    {
      icon: <FiGitBranch />,
      name: 'Development Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Webpack', 'Testing Frameworks']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading 
          title="Tech Stack" 
          subtitle="Technologies and tools I work with to build modern applications"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;