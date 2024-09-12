const express = require('express');
const router = express.Router();
const { signupUser, loginUser, getUserProfile, updateUserProfile, storeUserActivity  } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Register a new user
router.post('/signup', signupUser);

// Login a user
router.post('/login', loginUser);

// Get user profile
router.get('/profile', getUserProfile);

// Update user profile
router.put('/profile', updateUserProfile);

// Store activity route (protected)
router.post('/activity', protect, storeUserActivity);

module.exports = router;
