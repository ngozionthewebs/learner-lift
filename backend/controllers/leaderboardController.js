// controllers/leaderboardController.js
const Leaderboard = require('../models/Leaderboard');

exports.getLeaderboard = async (req, res) => {
  const { quizId } = req.params;

  try {
    const leaderboard = await Leaderboard.findAll({
      where: { quiz_id: quizId },
      order: [['score', 'DESC']], // Sort by highest score
      limit: 10, // Limit to top 10 entries
    });

    res.status(200).json({ leaderboard });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving leaderboard', error });
  }
};
