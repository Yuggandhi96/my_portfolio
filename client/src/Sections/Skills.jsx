import { FiCode, FiServer, FiDatabase, FiLayout, FiTool, FiGitBranch } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  const skillsData = [
    {
      icon: <FiCode />,
      name: 'Frontend Development',
      level: 90,
      skills: ['React', 'Redux', 'JavaScript (ES6+)',  'HTML5/CSS3', 'Tailwind CSS']
    },
    {
      icon: <FiServer />,
      name: 'Backend Development',
      level: 85,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'Authentication/Authorization']
    },
    {
      icon: <FiDatabase />,
      name: 'Database',
      level: 80,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Mongoose ORM']
    },
    {
      icon: <FiLayout />,
      name: 'UI/UX',
      level: 50,
      skills: ['Responsive Design', 'Figma', 'User Experience', 'Accessibility']
    },
    {
      icon: <FiTool />,
      name: 'DevOps',
      level: 70,
      skills: ['Docker', 'CI/CD', 'AWS', 'Heroku', 'Vercel', 'Netlify']
    },
    {
      icon: <FiGitBranch />,
      name: 'Tools & Methods',
      level: 85,
      skills: ['Git', 'GitHub', 'Agile Methodologies', 'Jira', 'Testing']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="A comprehensive overview of my technical abilities and domain knowledge"
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