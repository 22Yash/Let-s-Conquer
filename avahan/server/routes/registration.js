const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// POST route to handle registration
router.post('/', async (req, res) => {
  const { name, email, sport } = req.body;

  // Simple validation
  if (!name || !email || !sport) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    // Create a new registration entry
    const newRegistration = new Registration({
      name,
      email,
      sport
    });

    const savedRegistration = await newRegistration.save();
    res.json(savedRegistration);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
