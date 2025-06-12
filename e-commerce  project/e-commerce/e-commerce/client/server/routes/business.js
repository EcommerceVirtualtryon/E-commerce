const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/Product');

// GET business stats
router.get('/stats/:businessId', async (req, res) => {
  const { businessId } = req.params;

  try {
    const totalProducts = await Product.countDocuments({ businessId });
    const totalOrders = await Order.countDocuments({ businessId });

    const revenue = await Order.aggregate([
      { $match: { businessId, status: 'delivered' } },
      { $group: { _id: null, total: { $sum: "$totalAmount" } } }
    ]);

    res.json({
      totalProducts,
      totalOrders,
      revenue: revenue[0]?.total || 0
    });
  } catch (error) {
    console.error('Error fetching business stats:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
