/*const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userType: {
    type: String,
    enum: ['customer', 'business'],
    required: true
  },
  name: String,
  email: String,
  password: String,
  businessId: String,
  kycFile: String
});

module.exports = mongoose.model('User', userSchema);*/
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userType: { type: String, enum: ['customer', 'business'], required: true },
  name: { type: String, required: true },
  email: { type: String, unique: true, sparse: true }, // optional for B2B
  password: { type: String, required: true },
  businessId: { type: String, unique: true, sparse: true }, // optional for B2C
  kycFile: { type: String } // Optional, for B2B
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

