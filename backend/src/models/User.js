const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const zod = require('zod');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  avatar: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Zod schema for validation
const userSchemaZod = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
  name: zod.string().min(2),
  avatar: zod.string().optional()
});

module.exports = mongoose.model('User', userSchema);
module.exports.userSchemaZod = userSchemaZod;
