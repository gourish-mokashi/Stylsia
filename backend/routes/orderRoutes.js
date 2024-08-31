const express = require('express');
const router = express.Router();
const { createOrder, getOrderById, updateOrderToPaid, updateOrderToDelivered, getMyOrders } = require('../controllers/orderController');

// Create a new order
router.post('/', createOrder);

// Get an order by ID
router.get('/:id', getOrderById);

// Update order to paid
router.put('/:id/pay', updateOrderToPaid);

// Update order to delivered
router.put('/:id/deliver', updateOrderToDelivered);

// Get logged-in user orders
router.get('/myorders', getMyOrders);

module.exports = router;
