const express = require('express');
const { recommendBasedOnActivity } = require('../controllers/recommendationController');
const { protect } = require('../middleware/authMiddleware');  // Middleware to protect routes
const router = express.Router();

// Route to get recommended products based on user activity
router.get('/recommendations', protect, recommendBasedOnActivity);

module.exports = router;
