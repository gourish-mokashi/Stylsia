const express = require('express');
const { signupUser, authUser } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', authUser);

module.exports = router;
