const Order = require('../models/Order');

const getCustomerOrders = async (req, res) => {
  const { customerId } = req.params;

  try {
    const orders = await Order.find({ customerId });
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getCustomerOrders };
