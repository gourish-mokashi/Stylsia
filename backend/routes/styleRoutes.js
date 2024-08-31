const express = require('express');
const router = express.Router();
const { getAllStyles, getStyleById, createStyle, updateStyle, deleteStyle } = require('../controllers/styleController');

// Get all styles
router.get('/', getAllStyles);

// Get a single style by ID
router.get('/:id', getStyleById);

// Create a new style
router.post('/', createStyle);

// Update a style
router.put('/:id', updateStyle);

// Delete a style
router.delete('/:id', deleteStyle);

module.exports = router;
