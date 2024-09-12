const express = require('express');
const { signupUser, authUser } = require('../controllers/authController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

router.post('/signup', signupUser);
router.post('/login', authUser);

// Protect the profile route
router.get('/profile', protect, (req, res) => {
    res.json({
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
    });
  });
module.exports = router;
