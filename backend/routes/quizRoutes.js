// routes/quizRoutes.js
const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

// Create a new quiz
router.post('/create', quizController.createQuiz);

// Get quiz by ID
router.get('/:quizId', quizController.getQuizById);

// Complete a quiz
router.post('/complete', quizController.completeQuiz);

module.exports = router;
