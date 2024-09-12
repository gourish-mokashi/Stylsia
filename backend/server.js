const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const { protect } = require('./middleware/authMiddleware');
const path = require('path');


// Load environment variables
require('dotenv').config();

// Import models
const User = require('./models/User');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Style = require('./models/Style');

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const styleRoutes = require('./routes/styleRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');

// Initialize Express app
const app = express();

// Add this line to parse JSON bodies
app.use(express.json());

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Middleware
app.use(cors({
    origin: '*'  // Replace with your frontend origin
    }));
app.use(express.json());

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/styles', styleRoutes);
app.use('/api/users', require('./routes/userRoutes')); 
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/recommendations', recommendationRoutes);


// Connect to the database
connectDB();


// Protect any additional routes with the middleware
app.get('/api/protected', protect, (req, res) => {
    res.send('This route is protected');
  });

// Define Routes (Example: Home route)
app.get('/', (req, res) => {
    res.send('Welcome to Stylsia API');
});

// Set up the server to listen on a specific port
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




