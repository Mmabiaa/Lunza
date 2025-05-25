const mongoose = require('mongoose');
const zod = require('zod');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  timezone: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  videoUrl: {
    type: String,
    required: true
  },
  videoPoster: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['upcoming', 'live', 'past'],
    default: 'upcoming'
  },
  featured: {
    type: Boolean,
    default: false
  },
  organizer: {
    name: {
      type: String,
      required: true
    },
    logo: {
      type: String,
      required: true
    }
  },
  price: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Zod schema for validation
const eventSchemaZod = zod.object({
  title: zod.string().min(2),
  description: zod.string().min(10),
  date: zod.string(),
  time: zod.string(),
  timezone: zod.string(),
  location: zod.string(),
  videoUrl: zod.string(),
  videoPoster: zod.string(),
  status: zod.enum(['upcoming', 'live', 'past']),
  featured: zod.boolean(),
  organizer: zod.object({
    name: zod.string(),
    logo: zod.string()
  }),
  price: zod.string()
});

module.exports = mongoose.model('Event', eventSchema);
module.exports.eventSchemaZod = eventSchemaZod;
