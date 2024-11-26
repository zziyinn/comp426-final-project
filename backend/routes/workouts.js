const express = require('express');
const axios = require('axios');
const router = express.Router();

const WORKOUT_API_BASE_URL = 'https://workout-api.vercel.app/api';

// Route to fetch workouts by category (modify parameters as needed)
router.get('/categories/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const response = await axios.get(`${WORKOUT_API_BASE_URL}/categories/${category}`);
    res.json(response.data); // Send the data back to the frontend
  } catch (error) {
    console.error('Error fetching workouts:', error.message);
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

module.exports = router;
