// routes/leaderboardRoutes.js
const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

// Ensure this route matches the one being called by the frontend
router.get('/:quizId', leaderboardController.getLeaderboard);
router.post('/submit', leaderboardController.submitQuizResult);


module.exports = router;
