const express = require('express');
const router = express.Router();
const { signupUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userController');

// Register a new user
router.post('/signup', signupUser);

// Login a user
router.post('/login', loginUser);

// Get user profile
router.get('/profile', getUserProfile);

// Update user profile
router.put('/profile', updateUserProfile);

module.exports = router;
