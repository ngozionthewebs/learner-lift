// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User Registration Route
router.post('/signup', userController.signup);

// User Login Route
router.post('/login', userController.login);

module.exports = router;
