const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

console.log("✅ courseRoutes.js е вчитан!");

// GET сите курсеви
router.get('/', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// POST нов курс
router.post('/', async (req, res) => {
  const course = new Course(req.body);
  await course.save();
  res.status(201).json(course);
});

// PUT - ажурирање курс
router.put('/:id', async (req, res) => {
  const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Курсот не е најден' });
  res.json(updated);
});

// DELETE - бришење курс
router.delete('/:id', async (req, res) => {
  console.log('DELETE request received for id:', req.params.id);
  try {
    const deleted = await Course.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Курсот не е најден' });
    res.json({ message: 'Курсот е успешно избришан' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/test/:id', (req, res) => {
  console.log('🔥 Test DELETE route hit with ID:', req.params.id);
  res.json({ success: true, id: req.params.id });
});




module.exports = router;

