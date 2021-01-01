const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  tags: {
    type: [String]
  },
  on_hand: {
    type: Number,
    default: 0
  },
  created_at:{ type: Date, default: Date.now },
  updated_at:{ type: Date, default: Date.now },
});

const ProductModel = mongoose.model('product', ProductSchema);

module.exports = ProductModel;