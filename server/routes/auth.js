const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'yoursecretkey'; // use .env in production

// =============================
// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
// =============================
router.post('/register', async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    user = new User({ name, email, password, role });

    // Save user to DB (password gets hashed automatically in model)
    await user.save();

    // Create JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: '7d',
    });

    // Send response
    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// =============================
// @route   POST /api/auth/login
// @desc    Login existing user
// @access  Public
// =============================
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("🔐 Login request:", email);

    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User not found");
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("❌ Password incorrect");
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

    console.log("✅ Login successful for", email);

  } catch (err) {
    console.error("💥 Login Error:", err);
    res.status(500).json({ msg: 'Server error' });
  }
});


module.exports = router;
