import SectionHeading from '../components/SectionHeading';
import ExperienceItem from '../components/ExperienceItem';

const Experience = () => {
  const experienceData = [
    {
      period: '2022 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      description: 'Leading development of a SaaS platform serving over 50k users. Architected microservices infrastructure and implemented CI/CD pipelines.',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker']
    },
    {
      period: '2020 - 2022',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      location: 'Boston, MA',
      description: 'Developed and maintained web applications for enterprise clients. Improved system performance by 40% through optimization.',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Redis', 'TypeScript']
    },
    {
      period: '2018 - 2020',
      title: 'Frontend Developer',
      company: 'Creative Web Agency',
      location: 'Austin, TX',
      description: 'Built responsive user interfaces for various client projects. Collaborated with designers to implement pixel-perfect designs.',
      technologies: ['JavaScript', 'React', 'HTML/CSS', 'Styled Components', 'Redux']
    },
    {
      period: '2017 - 2018',
      title: 'Web Development Intern',
      company: 'StartUp Hub',
      location: 'Seattle, WA',
      description: 'Assisted in development of web applications. Gained hands-on experience with modern web technologies and agile methodologies.',
      technologies: ['JavaScript', 'HTML/CSS', 'Bootstrap', 'jQuery']
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading 
          title="Work Experience" 
          subtitle="My professional journey and career progression"
        />
        
        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-700 transform -translate-x-px md:-translate-x-px"></div>
          
          {/* Experience items */}
          {experienceData.map((experience, index) => (
            <ExperienceItem key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;