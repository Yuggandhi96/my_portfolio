import { motion } from 'framer-motion';

const SkillCard = ({ skill }) => {
  const { icon, name, skills } = skill;
  
  return (
    <motion.div 
      className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Icon with enhanced styling */}
      <div className="relative z-10 flex justify-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center text-3xl text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      
      {/* Category title */}
      <h3 className="relative z-10 text-xl font-bold mb-6 text-center text-gray-800 dark:text-white leading-tight">
        {name}
      </h3>
      
      {/* Skills grid */}
      <div className="relative z-10 grid grid-cols-1 gap-3">
        {skills.map((skillItem, index) => (
          <motion.div
            key={index}
            className="group/skill flex items-center justify-between bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm px-4 py-3 rounded-xl border border-gray-100 dark:border-gray-600 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ x: 5 }}
          >
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/skill:text-primary transition-colors duration-300">
              {skillItem}
            </span>
            <div className="w-2 h-2 bg-primary/30 rounded-full group-hover/skill:bg-primary group-hover/skill:scale-125 transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
    </motion.div>
  );
};

export default SkillCard;