const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  products: Array,
  status: String,
  total: Number,
  // add more fields as needed
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
