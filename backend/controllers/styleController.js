const Style = require('../models/Style');

// Controller function to get all styles
const getAllStyles = async (req, res) => {
  try {
      const styles = await Style.find({});
      res.status(200).json(styles);
  } catch (error) {
      res.status(500).json({ message: 'Error fetching styles' });
  }
};

// Get style by ID
const getStyleById = async (req, res) => {
  try {
    const style = await Style.findById(req.params.id).populate('products');

    if (style) {
      res.json(style);
    } else {
      res.status(404).json({ message: 'Style not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new style
const createStyle = async (req, res) => {
  const { id, name, description, imageUrl, products } = req.body;  // Ensure imageUrl is destructured here

  try {
    const style = new Style({
      id,            // Use the id from the request body
      name,          // Use the name from the request body
      description,   // Use the description from the request body
      imageUrl,      // Use the imageUrl from the request body
      products       // Use the products array from the request body
    });

    const savedStyle = await style.save();
    res.status(201).json(savedStyle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update a style
const updateStyle = async (req, res) => {
  try {
    const style = await Style.findById(req.params.id);

    if (style) {
      style.name = req.body.name || style.name;
      style.description = req.body.description || style.description;
      style.products = req.body.products || style.products;

      const updatedStyle = await style.save();
      res.json(updatedStyle);
    } else {
      res.status(404).json({ message: 'Style not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a style
const deleteStyle = async (req, res) => {
  try {
    const style = await Style.findById(req.params.id);

    if (style) {
      await style.remove();
      res.json({ message: 'Style removed' });
    } else {
      res.status(404).json({ message: 'Style not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllStyles, getStyleById, createStyle, updateStyle, deleteStyle };
