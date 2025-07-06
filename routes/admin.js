const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const Testimonial = require('../models/Testimonial');

// Home route = Projects
router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.render('projects', { projects });
});

// Projects
router.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.render('projects', { projects });
});

router.post('/projects', async (req, res) => {
  const techs = req.body.technologies.split(',').map(t => t.trim());
  await Project.create({ ...req.body, technologies: techs });
  res.redirect('/projects');
});

router.post('/projects/delete/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.redirect('/projects');
});

// Testimonials
router.get('/testimonials', async (req, res) => {
  const testimonials = await Testimonial.find();
  res.render('testimonials', { testimonials });
});

router.post('/testimonials', async (req, res) => {
  await Testimonial.create(req.body);
  res.redirect('/testimonials');
});

router.post('/testimonials/delete/:id', async (req, res) => {
  await Testimonial.findByIdAndDelete(req.params.id);
  res.redirect('/testimonials');
});

module.exports = router;
