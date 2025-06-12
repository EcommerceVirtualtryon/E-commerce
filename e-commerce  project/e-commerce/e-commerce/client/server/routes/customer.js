const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Wishlist = require('../models/Wishlist');

// GET customer stats
router.get('/stats/:customerId', async (req, res) => {
  const { customerId } = req.params;

  try {
    const ordersPlaced = await Order.countDocuments({ customerId });
    const pendingDelivery = await Order.countDocuments({ customerId, status: 'pending' });
    const wishlistedItems = await Wishlist.countDocuments({ customerId });

    res.json({ ordersPlaced, pendingDelivery, wishlistedItems });
  } catch (error) {
    console.error('Error fetching customer stats:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
