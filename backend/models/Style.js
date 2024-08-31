const mongoose = require('mongoose');

const styleSchema = new mongoose.Schema({
 id:{
   type: String,
   required: true,
    unique: true  
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  imageUrl: {
      type: String,
      required: true,
      unique: true  
  },
  products: [{
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Product'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Style = mongoose.model('Style', styleSchema);

module.exports = Style;
