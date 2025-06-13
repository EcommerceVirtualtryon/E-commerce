/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://eommerce:ecommerce@eocommerce.hhlvxng.mongodb.net/?retryWrites=true&w=majority&appName=eocommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('Mongo Error:', err));

// User schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String, // You should hash this using bcrypt in production
});

const User = mongoose.model('User', userSchema);

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful', user });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/


/*const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // added bcrypt for hashing
const path = require('path');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer setup (for file uploads)
const upload = multer({ dest: 'uploads/' });

// MongoDB Connection
mongoose.connect('mongodb+srv://eommerce:ecommerce@eocommerce.hhlvxng.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=eocommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB Connected');
})
.catch(err => {
  console.error('❌ MongoDB Connection Error:', err);
});


// Simple Schema (optional)
const UserSchema = new mongoose.Schema({
  userType: String,
  name: String,
  email: { type: String, unique: true },
  password: String,
  businessId: String,
  kycFileName: String
});
const User = mongoose.model('User', UserSchema);

// Route
app.post('/api/register', upload.single('kycFile'), async (req, res) => {
  const { name, email, password, businessId, userType } = req.body;
  const kycFile = req.file;

  try {
    // Hash the password before saving
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      userType,
      name,
      email,
      password: hashedPassword,  // store hashed password here
      businessId: businessId || '',
      kycFileName: kycFile ? kycFile.filename : null
    });

    await newUser.save();

    console.log('📥 Registration saved:', newUser);

    res.status(200).json({ message: '✅ User registered successfully' });
  } catch (err) {
    console.error('❌ Error in registration:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Server Start
app.listen(5000, () => console.log('🚀 Server running on port 5000'));*/



// server.js
/*const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer setup
const upload = multer({ dest: 'uploads/' });

// MongoDB connection
mongoose.connect('mongodb+srv://eommerce:ecommerce@eocommerce.hhlvxng.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=eocommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB Connected');
})
.catch(err => {
  console.error('❌ MongoDB Connection Error:', err);
});

// Schema
const UserSchema = new mongoose.Schema({
  userType: String,
  name: String,
  email: { type: String, unique: true },
  password: String,
  businessId: String,
  kycFileName: String
});
const User = mongoose.model('User', UserSchema);

// Register route
app.post('/api/register', upload.single('kycFile'), async (req, res) => {
  const { name, email, password, businessId, userType } = req.body;
  const kycFile = req.file;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      userType,
      name,
      email,
      password: hashedPassword,
      businessId: businessId || '',
      kycFileName: kycFile ? kycFile.filename : null
    });

    await newUser.save();

    console.log('📥 Registration saved:', newUser);
    res.status(200).json({ message: '✅ User registered successfully' });
  } catch (err) {
    console.error('❌ Error in registration:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all users route (for admin/KYC view)
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error('❌ Error fetching users:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start server
app.listen(5000, () => console.log('🚀 Server running on port 5000'));*/
require('dotenv').config();

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const path = require('path');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();  
require('dotenv').config(); // ✅ Add this line at the top


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer setup for KYC file upload
const upload = multer({ dest: 'uploads/' });

// MongoDB connection
mongoose.connect('mongodb+srv://eommerce:ecommerce@eocommerce.hhlvxng.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=eocommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB Connected');
})
.catch(err => {
  console.error('❌ MongoDB Connection Error:', err);
});




app.use('/api/dashboard', dashboardRoutes);
// User schema
const UserSchema = new mongoose.Schema({
  userType: String,       // "customer" or "b2b"
  name: String,
  email: { type: String, unique: true },
  password: String,
  businessId: String,     // only for b2b
  kycFileName: String,    // for b2b
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);


// Nodemailer transporter setup (replace with your email credentials)
/*const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',         // CHANGE THIS to your email
    pass: 'your-email-password-or-app-password'  // CHANGE THIS to your password or app password
  }
});*/
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
 
 
const customerRoutes = require('./routes/customer');
const businessRoutes = require('./routes/business');

// Middleware
 

// Use routes
app.use('/api/customer', customerRoutes);
app.use('/api/business', businessRoutes);


// ====== ROUTES ======

// Register new user (customer or b2b)
app.post('/api/register', upload.single('kycFile'), async (req, res) => {
  const { name, email, password, businessId, userType } = req.body;
  const kycFile = req.file;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists with this email' });

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      userType,
      name,
      email,
      password: hashedPassword,
      businessId: businessId || '',
      kycFileName: kycFile ? kycFile.filename : null
    });

    await newUser.save();

    console.log('📥 Registration saved:', newUser);
    res.status(200).json({ message: '✅ User registered successfully' });
  } catch (err) {
    console.error('❌ Error in registration:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Customer login
app.post('/api/customer/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, userType: 'customer' });
    if (!user) return res.status(400).json({ message: 'Invalid email or password' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    res.status(200).json({ message: '✅ Customer login successful', user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    console.error('❌ Customer login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// B2B login
// B2B (business) login route — only this part updated
app.post('/api/b2b/login', async (req, res) => {
  const { email, password, businessId } = req.body;

  try {
    // Use 'business' as userType (matching your DB)
    const user = await User.findOne({ email, userType: 'business', businessId });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email, password, or Business ID' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email, password, or Business ID' });
    }

    res.status(200).json({
      message: '✅ B2B login successful',
      user: { id: user._id, name: user.name, email: user.email, businessId: user.businessId },
    });
  } catch (error) {
    console.error('❌ B2B login error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});



// Forgot password - generate token and send email
app.post('/api/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Email not found' });

    // Generate token and expiry (1 hour)
    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000;
    await user.save();

    // Construct reset password link (replace URL with your frontend URL)
    const resetLink = `http://localhost:3000/reset-password?token=${token}`;

    // Email options
    /*const mailOptions = {
  from: process.env.EMAIL_USER,
  to: user.email,
  subject: 'Password Reset Request',
  text: `You requested a password reset.\n\nPlease click the link below to reset your password:\n\n${resetLink}\n\nIf you did not request this, please ignore this email.`,
  html: `
    <p>You requested a password reset.</p>
    <p><a href="${resetLink}" target="_blank">Click here to reset your password</a></p>
    <p>If you didn’t request this, you can ignore this email.</p>
  `
};*/

const mailOptions = {
  from: 'ecommercevirtualtryon@gmail.com',
  to: user.email,
  subject: '🔐 Reset Your Password',
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2 style="color: #4CAF50;">E-Commerce Password Reset</h2>
      <p>Hello ${user.name || 'User'},</p>
      <p>You requested a password reset. Click the button below to proceed:</p>
      <a href="${resetLink}" 
         style="background: #4CAF50; color: white; padding: 10px 20px; 
                text-decoration: none; border-radius: 5px;">
         Reset Password
      </a>
      <p>If you didn’t request this, just ignore this email.</p>
      <p>Thanks,<br>Your E-Commerce Team</p>
    </div>
  `
};



    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('❌ Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
      } else {
        console.log('📧 Email sent:', info.response);
        return res.status(200).json({ message: 'Password reset email sent' });
      }
    });

  } catch (err) {
    console.error('❌ Forgot password error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Reset password - update password with valid token
app.post('/api/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }  // check token not expired
    });

    if (!user) return res.status(400).json({ message: 'Invalid or expired token' });

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.status(200).json({ message: '✅ Password reset successful' });
  } catch (err) {
    console.error('❌ Reset password error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all users (for admin or KYC review)
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error('❌ Error fetching users:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


