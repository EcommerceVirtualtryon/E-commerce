const express = require('express');
const router = express.Router();
const { getCustomerOrders } = require('../controllers/orderController');

router.get('/orders/:customerId', getCustomerOrders);

module.exports = router;
