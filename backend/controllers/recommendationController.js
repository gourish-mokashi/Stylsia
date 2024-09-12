const User = require('../models/User');
const Product = require('../models/Product');

// Function to recommend products based on user's activity (views, wishlist)
const recommendBasedOnActivity = async (req, res) => {
    const userId = req.user._id;  // Get the user ID from the authenticated request

    try {
        // Fetch the user's viewed products and wishlist products
        const user = await User.findById(userId).populate('viewedProducts wishlist');
        
        // Collect tags from viewed and wishlist products
        const viewedTags = user.viewedProducts.flatMap(product => product.tags);
        const wishlistTags = user.wishlist.flatMap(product => product.tags);

        // Combine all tags and remove duplicates
        const combinedTags = [...new Set([...viewedTags, ...wishlistTags])];

        // Fetch products that match these combined tags
        const recommendations = await Product.find({
            tags: { $in: combinedTags },
            _id: { $nin: [...user.viewedProducts, ...user.wishlist] }  // Exclude already viewed/wishlist products
        }).limit(10);  // Limit the number of recommended products

        // Return the recommended products
        res.status(200).json(recommendations);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching recommendations', error: error.message });
    }
};

module.exports = { recommendBasedOnActivity };
