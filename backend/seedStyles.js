const mongoose = require('mongoose');
const Style = require('./models/Style'); // Adjust the path to your Style model

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define sample styles data
const styles = [
    {
        name: "Casual Outfit",
        description: "A casual outfit suitable for everyday wear.",
        imageUrl: "https://example.com/casual-outfit.jpg"
    },
    {
        name: "Formal Wear",
        description: "Elegant formal wear for business meetings.",
        imageUrl: "https://example.com/formal-wear.jpg"
    },
    {
        name: "Sportswear",
        description: "Comfortable sportswear for physical activities.",
        imageUrl: "https://example.com/sportswear.jpg"
    }
];

// Insert the sample data into the database
Style.insertMany(styles)
    .then(() => {
        console.log('Sample styles data inserted');
        mongoose.connection.close(); // Close the connection after data insertion
    })
    .catch(err => {
        console.error('Error inserting data:', err);
        mongoose.connection.close(); // Close the connection on error
    });
