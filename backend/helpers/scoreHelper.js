// helpers/scoreHelper.js
const Answer = require('../models/Answer');

// Function to calculate score based on user answers
exports.calculateScore = async (userAnswers) => {
  let score = 0;

  for (const userAnswer of userAnswers) {
    const correctAnswer = await Answer.findOne({
      where: {
        question_id: userAnswer.question_id,
        is_correct: true,
      },
    });

    if (correctAnswer && correctAnswer.answer_id === userAnswer.answer_id) {
      score += 1; // Increase score for each correct answer
    }
  }

  return score;
};
