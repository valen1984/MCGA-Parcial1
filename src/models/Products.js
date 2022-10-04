const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: {
    type: String,
    unique: true,
    null: false
  },
  name: String,
  description: String,
  price: Number,
  stock: Number
});

module.exports = mongoose.model('products', ProductSchema);
