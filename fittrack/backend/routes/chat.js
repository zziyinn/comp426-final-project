// backend/routes/chat.js
const express = require('express');

const router = express.Router();

// Mock chatbot response
router.post('/', (req, res) => {
  const { message } = req.body;
  const response = {
    user: 'Bot',
    text: `You said: ${message}. Here's a fitness tip!`
  };
  res.json(response);
});

module.exports = router;
