import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const TestimonialCard = ({ testimonial }) => {
  const { name, position, company, content, rating, avatar } = testimonial;
  
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{position} at {company}</p>
        </div>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{content}"</p>
      
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <FiStar 
            key={i} 
            className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;