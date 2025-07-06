const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Testimonial = require('../models/Testimonial');

// GET JSON for all projects
router.get('/projects', async (req, res) => {
  const data = await Project.find();
  res.json(data);
});

// GET JSON for all testimonials
router.get('/testimonials', async (req, res) => {
  const data = await Testimonial.find();
  res.json(data);
});

module.exports = router;
