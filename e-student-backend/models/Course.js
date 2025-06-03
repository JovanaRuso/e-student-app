const mongoose = require('mongoose');

console.log('✅ courseRoutes.js is loaded!');


const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Course', CourseSchema);
