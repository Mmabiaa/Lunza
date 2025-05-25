const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const auth = require('../middleware/auth');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find()
      .sort({ date: 1 })
      .populate('attendees', 'name avatar');
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single event
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate('attendees', 'name avatar');
    
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Register for an event
router.post('/:id/register', auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // Check if user is already registered
    const isRegistered = event.attendees.some(
      attendee => attendee.toString() === req.user._id.toString()
    );

    if (isRegistered) {
      return res.status(400).json({ message: 'Already registered' });
    }

    // Add user to event attendees
    event.attendees.push(req.user._id);
    await event.save();

    // Add event to user's registered events
    req.user.registeredEvents.push(event._id);
    await req.user.save();

    res.json({ message: 'Successfully registered' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user's registered events
router.get('/my-events', auth, async (req, res) => {
  try {
    const events = await Event.find({
      attendees: req.user._id
    }).sort({ date: 1 });

    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
