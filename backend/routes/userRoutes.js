// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');

// User Registration Route (public)
router.post('/signup', userController.signup);

// User Login Route (public)
router.post('/login', userController.login);

// Protected Route for User Profile (example)
router.get('/profile', authenticateToken, userController.getUserProfile); // Ensure `getUserProfile` is implemented

module.exports = router;
