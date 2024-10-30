// routes/leaderboardRoutes.js
const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');

// Get leaderboard by quiz ID
router.get('/:quizId', leaderboardController.getLeaderboard);

module.exports = router;
