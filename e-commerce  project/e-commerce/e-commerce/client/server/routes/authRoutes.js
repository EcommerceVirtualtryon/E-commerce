router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
// routes/authRoutes.js
/*const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginCustomer,
  loginB2B
} = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/customer/login', loginCustomer);
router.post('/b2b/login', loginB2B);

module.exports = router;*/

// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { loginCustomer, registerUser, loginB2B } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/customer/login', loginCustomer);
router.post('/b2b/login', loginB2B);

module.exports = router;


