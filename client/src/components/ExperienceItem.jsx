import { motion } from 'framer-motion';

const ExperienceItem = ({ experience, index }) => {
  const { period, title, company, location, description, technologies } = experience;
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative">
      {/* Timeline dot */}
      <motion.div 
        className="absolute left-0 md:left-1/2 w-5 h-5 bg-primary rounded-full transform -translate-x-2 md:-translate-x-2.5 mt-1"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      ></motion.div>
      
      {/* Content */}
      <div className={`md:w-1/2 ml-8 md:ml-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
        <motion.div 
          className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md mb-10"
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-2">
            {period}
          </span>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            {company} | {location}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-3">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span 
                key={i}
                className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceItem;