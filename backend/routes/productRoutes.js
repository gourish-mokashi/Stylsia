const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct, getRecentProducts, getTrendingProducts } = require('../controllers/productController');
const router = express.Router();

// Route to get recent products
router.get('/recent', getRecentProducts);

// Route to get trending products (based on number of purchases)
router.get('/trending', getTrendingProducts);

// Get all products
router.get('/', getProducts);

// Get a single product by ID
router.get('/:id', getProductById);

// Create a new product
router.post('/', createProduct);

// Update a product
router.put('/:id', updateProduct);

// Delete a product
router.delete('/:id', deleteProduct);



module.exports = router;
