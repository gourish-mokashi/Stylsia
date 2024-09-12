const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    activityType: {
        type: String,
        enum: ['Product View', 'Added to Wishlist', 'Added to Cart', 'Purchase'],
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    tags: [{
        type: String,
    }], 
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('UserActivity', activitySchema);
