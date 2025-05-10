import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
  const { icon, name, level } = skill;
  
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
    >
      <div className="text-4xl text-primary mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">{level}%</span>
    </motion.div>
  );
};

export default SkillCard;