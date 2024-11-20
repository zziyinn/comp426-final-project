// backend/models/Weight.js
const mongoose = require('mongoose');

const weightSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  weight: { type: Number, required: true }
});

module.exports = mongoose.model('Weight', weightSchema);
