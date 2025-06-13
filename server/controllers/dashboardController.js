const Order = require('../models/Order');
const Wishlist = require('../models/Wishlist');

exports.getCustomerStats = async (req, res) => {
  try {
    const userId = req.user.id; // assumes auth middleware sets req.user
    const ordersPlaced = await Order.countDocuments({ userId });
    const pendingDelivery = await Order.countDocuments({ userId, status: { $in: ['pending', 'shipped'] } });
    const wishlist = await Wishlist.findOne({ userId });
    const wishlistedItems = wishlist ? wishlist.productIds.length : 0;

    res.json({ ordersPlaced, pendingDelivery, wishlistedItems });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
