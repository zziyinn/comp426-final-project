// backend/models/Workout.js
const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  activity: { type: String, required: true },
  duration: { type: Number } // Duration in minutes
});

module.exports = mongoose.model('Workout', workoutSchema);
