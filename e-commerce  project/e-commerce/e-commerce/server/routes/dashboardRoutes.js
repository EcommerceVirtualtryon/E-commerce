const express = require('express');
const router = express.Router();
const { getCustomerStats } = require('../controllers/dashboardController');
const { protect } = require('../middleware/authMiddleware'); // ✅ Correctly destructure

router.get('/customer-stats', protect, getCustomerStats); // ✅ protect is a function

module.exports = router;
