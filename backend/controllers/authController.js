const User = require('../models/User');

// Register a new user
const signupUser = async (req, res) => {
  try {
     const { name, email, password } = req.body;

     // Validate user input
    if (!(name && email && password)) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    const user = new User({ name, email, password });
    const savedUser = await user.save();
    res.status(201).json({
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
      token: savedUser.getAuthToken()
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Authenticate a user
const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: user.getAuthToken()
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { signupUser, authUser };
