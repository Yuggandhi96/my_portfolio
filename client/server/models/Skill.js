import mongoose from 'mongoose';

const SkillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Skill name is required'],
    trim: true,
    unique: true
  },
  category: {
    type: String,
    required: [true, 'Skill category is required'],
    enum: ['frontend', 'backend', 'database', 'devops', 'tools', 'other'],
    trim: true
  },
  icon: {
    type: String,
    trim: true
  },
  proficiency: {
    type: Number,
    min: 1,
    max: 100,
    default: 80
  },
  order: {
    type: Number,
    default: 0
  }
});

const Skill = mongoose.model('Skill', SkillSchema);
export default Skill;