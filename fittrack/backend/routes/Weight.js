// backend/routes/weights.js
const express = require('express');
const Weight = require('../models/Weight');

const router = express.Router();

// Get all weight records
router.get('/', async (req, res) => {
  try {
    const weights = await Weight.find().sort({ date: 1 });
    res.json(weights);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new weight record
router.post('/', async (req, res) => {
  try {
    const newWeight = new Weight(req.body);
    await newWeight.save();
    res.json(newWeight);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
