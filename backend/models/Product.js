const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  productCode: {
    type: String,
    required: true,
    unique: true
  },
  sellerName: {
    type: String,
    required: true
  },
  averageRating: {
    type: Number,
    default: 0
  },
  numberOfPeopleBought: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    required: true
  },
  images: [{
    type: String,
    required: true
  }],
  tags: [{
    type: String,  // Tags like "polo", "black", "old money"
    required: true,
}],
  stock: {
    type: Number,
    required: true
  },
  sizeOptions: [{
    type: String
  }],
  colorOptions: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
