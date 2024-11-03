// controllers/leaderboardController.js
const Leaderboard = require('../models/Leaderboard');
const User = require('../models/User'); // Import the User model

// Function to get leaderboard data
exports.getLeaderboard = async (req, res) => {
  const { quizId } = req.params;
  const quiz_id = quizId; // Map `quizId` to `quiz_id`

  try {
    const leaderboard = await Leaderboard.findAll({
      where: { quiz_id }, // Use `quiz_id` for the database query
      include: [
        {
          model: User,
          as: 'user', // Ensure this matches the alias defined in relationships.js
          attributes: ['username'], // Only include the username field from the User model
        },
      ],
      order: [['score', 'DESC']], // Sort by highest score
      limit: 4, // Limit to the top 4 entries
    });

    // Check if leaderboard data was found
    if (leaderboard.length === 0) {
      return res.status(404).json({ message: 'No leaderboard data found for this quiz' });
    }

    res.status(200).json({ leaderboard });
  } catch (error) {
    console.error('Error retrieving leaderboard:', error); // Improved logging for better debugging
    res.status(500).json({ message: 'Error retrieving leaderboard', error });
  }
};

// Function to submit quiz results
exports.submitQuizResult = async (req, res) => {
  const { userId, quizId, score } = req.body;
  const quiz_id = quizId; // Map `quizId` to `quiz_id`

  try {
    // Logic to insert or update leaderboard data
    const existingEntry = await Leaderboard.findOne({
      where: { quiz_id, user_id: userId },
    });

    if (!existingEntry || score > existingEntry.score) {
      await Leaderboard.upsert({
        quiz_id,
        user_id: userId,
        score,
        display_until: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Optional: 7-day display
      });
    }

    res.status(200).json({ message: 'Quiz result submitted successfully' });
  } catch (error) {
    console.error('Error submitting quiz result:', error);
    res.status(500).json({ message: 'Error submitting quiz result', error });
  }
};
