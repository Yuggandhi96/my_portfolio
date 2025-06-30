import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
  const testimonialData = [
    {
      name: 'John Smith',
      position: 'CEO',
      company: 'TechCorp',
      content: 'Working with this developer was an absolute pleasure. Their expertise in React and Node.js helped us launch our platform ahead of schedule. Highly recommended!',
      rating: 5,
      avatar: '/src/assets/testimonial1.jpg'
    },
    {
      name: 'Sarah Johnson',
      position: 'Product Manager',
      company: 'InnovateTech',
      content: 'An exceptional developer who delivered beyond our expectations. The attention to detail and problem-solving abilities made all the difference in our project.',
      rating: 5,
      avatar: '/src/assets/testimonial2.jpg'
    },
    {
      name: 'Michael Brown',
      position: 'CTO',
      company: 'StartupX',
      content: 'I was impressed by the quality of work and communication throughout our project. The developer was proactive, suggesting improvements that enhanced our final product.',
      rating: 4,
      avatar: '/src/assets/testimonial3.jpg'
    },
    {
      name: 'Emily Davis',
      position: 'Marketing Director',
      company: 'CreativeAgency',
      content: 'Our website redesign project was handled with utmost professionalism. The result was a fast, responsive site that has significantly increased our conversion rates.',
      rating: 5,
      avatar: '/src/assets/testimonial4.jpg'
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const maxIndex = Math.ceil(testimonialData.length / testimonialsPerPage) - 1;
  
  const handlePrev = () => {
    setCurrentIndex(current => (current > 0 ? current - 1 : 0));
  };
  
  const handleNext = () => {
    setCurrentIndex(current => (current < maxIndex ? current + 1 : maxIndex));
  };
  
  const currentTestimonials = testimonialData.slice(
    currentIndex * testimonialsPerPage, 
    (currentIndex + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonials" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <SectionHeading 
          title="Client Testimonials" 
          subtitle="What people are saying about working with me"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {currentTestimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        
        {/* Navigation Controls */}
        {testimonialData.length > testimonialsPerPage && (
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full ${
                currentIndex === 0 
                  ? 'text-gray-400 bg-gray-100 dark:bg-gray-800 cursor-not-allowed' 
                  : 'text-primary bg-primary/10 hover:bg-primary/20'
              }`}
              aria-label="Previous testimonials"
            >
              <FiChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className={`p-2 rounded-full ${
                currentIndex === maxIndex 
                  ? 'text-gray-400 bg-gray-100 dark:bg-gray-800 cursor-not-allowed' 
                  : 'text-primary bg-primary/10 hover:bg-primary/20'
              }`}
              aria-label="Next testimonials"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;