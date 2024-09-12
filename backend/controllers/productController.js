const Product = require('../models/Product');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  const { name, productCode, sellerName, price, discount, description, images,  tags, stock, sizeOptions, colorOptions } = req.body;

  try {
      const product = new Product({
          name,
          productCode,
          sellerName,
          price,
          discount,
          description,
          images,
          tags,
          stock,
          sizeOptions,
          colorOptions
      });

      const savedProduct = await product.save();
      res.status(201).json(savedProduct);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = req.body.name || product.name;
      product.price = req.body.price || product.price;
      product.stock = req.body.stock || product.stock;
      product.sizeOptions = req.body.sizeOptions || product.sizeOptions;
      product.colorOptions = req.body.colorOptions || product.colorOptions;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      await product.remove();
      res.json({ message: 'Product removed' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get the most recent products
const getRecentProducts = async (req, res) => {
  try {
      // Fetch the latest 5 products sorted by creation date
      const recentProducts = await Product.find().sort({ createdAt: -1 }).limit(5);
      res.status(200).json(recentProducts);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Get the most trending products
const getTrendingProducts = async (req, res) => {
    try {
        // Fetch products sorted by the number of purchases, limit to top 5
        const trendingProducts = await Product.find().sort({ numberOfPeopleBought: -1 }).limit(5);
        res.status(200).json(trendingProducts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct, getRecentProducts, getTrendingProducts};

