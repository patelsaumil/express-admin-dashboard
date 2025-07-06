const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  name: String,
  role: String,
  message: String
});

module.exports = mongoose.model('Testimonial', TestimonialSchema);
