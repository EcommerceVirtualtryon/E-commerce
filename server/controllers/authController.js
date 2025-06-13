// controllers/authController.js
/*const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createToken = (user) => {
  return jwt.sign({ id: user._id, userType: user.userType }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

exports.registerUser = async (req, res) => {
  try {
    const { userType, name, email, password, businessId, kycFile } = req.body;

    const existingEmail = email && await User.findOne({ email });
    const existingBizId = businessId && await User.findOne({ businessId });

    if (existingEmail || existingBizId) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      userType,
      name,
      email,
      password: hashedPassword,
      businessId,
      kycFile
    });

    await newUser.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.loginCustomer = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, userType: 'customer' });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = createToken(user);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.loginB2B = async (req, res) => {
  const { businessId, password } = req.body;

  try {
    const user = await User.findOne({ businessId, userType: 'business' });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = createToken(user);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};*/

// controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const multer = require('multer');

const createToken = (user) => {
  return jwt.sign({ id: user._id, userType: user.userType }, process.env.JWT_SECRET || 'defaultsecret', {
    expiresIn: '1d'
  });
};

const resetTokens = {}; // Temporary in-memory storage

exports.registerUser = async (req, res) => {
  try {
    const { userType, name, email, password, businessId } = req.body;
    const kycFile = req.file ? req.file.filename : null;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userType,
      name,
      email,
      password: hashedPassword,
      businessId: businessId || '',
      kycFileName: kycFile
    });

    await newUser.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.loginCustomer = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, userType: 'customer' });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = createToken(user);
    res.json({ msg: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.loginB2B = async (req, res) => {
  const { businessId, password } = req.body;

  try {
    const user = await User.findOne({ businessId, userType: 'b2b' });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = createToken(user);
    res.json({ msg: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const resetToken = crypto.randomBytes(32).toString('hex');
    resetTokens[resetToken] = { userId: user._id, expires: Date.now() + 3600000 };

    console.log(`🔗 Reset link: http://localhost:3000/reset-password?token=${resetToken}`);

    res.json({ msg: 'Password reset link sent (check console)' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const tokenData = resetTokens[token];
    if (!tokenData || tokenData.expires < Date.now()) {
      delete resetTokens[token];
      return res.status(400).json({ msg: 'Invalid or expired token' });
    }

    const user = await User.findById(tokenData.userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    delete resetTokens[token];

    res.json({ msg: 'Password reset successful' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
