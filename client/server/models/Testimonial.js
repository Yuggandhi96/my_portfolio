import mongoose from 'mongoose';

const TestimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  position: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Testimonial content is required'],
    trim: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  avatarUrl: {
    type: String,
    trim: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Testimonial = mongoose.model('Testimonial', TestimonialSchema);
export default Testimonial;