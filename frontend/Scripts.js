// scripts.js
const API_BASE_URL = 'http://localhost:5000'; // Adjust the port and URL as needed

// Function to filter styles based on selected category
document.getElementById('category').addEventListener('change', function() {
    let category = this.value.toLowerCase();
    let styles = document.querySelectorAll('.style-category');

    styles.forEach(style => {
        let styleCategory = style.querySelector('h3').textContent.toLowerCase();
        if (category === '' || styleCategory.includes(category)) {
            style.style.display = 'inline-block';
        } else {
            style.style.display = 'none';
        }
    });
});

// Function to filter styles based on selected price range
document.getElementById('price').addEventListener('change', function() {
    let priceRange = this.value;
    // Implement price filtering logic here if needed
    // For now, we'll assume the price range filter is not yet implemented
});

// Function to search styles based on user input
document.getElementById('search').addEventListener('input', function() {
    let searchQuery = this.value.toLowerCase();
    let styles = document.querySelectorAll('.style-category');

    styles.forEach(style => {
        let styleText = style.textContent.toLowerCase();
        if (styleText.includes(searchQuery)) {
            style.style.display = 'inline-block';
        } else {
            style.style.display = 'none';
        }
    });
});
