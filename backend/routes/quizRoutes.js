// routes/quizRoutes.js
const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const authenticateToken = require('../middleware/authMiddleware');

// Create a new quiz (make sure this is protected if only authorized users can create quizzes)
router.post('/create', authenticateToken, quizController.createQuiz);

// Get quiz by ID (public or protected based on your requirements)
router.get('/:quizId', authenticateToken, quizController.getQuizById); // Added `authenticateToken` for protection

// Complete a quiz (this should be protected to ensure only authenticated users can submit results)
router.post('/complete', authenticateToken, quizController.completeQuiz);

module.exports = router;
