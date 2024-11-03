// controllers/quizController.js
const Quiz = require('../models/Quiz');
const Question = require('../models/question');
const Option = require('../models/Option');
const UserQuizAttempt = require('../models/UserQuizAttempt');
const UserAnswer = require('../models/UserAnswer');
const Leaderboard = require('../models/Leaderboard');
const { calculateScore } = require('../helpers/scoreHelper'); // Helper to calculate score

// Create a new quiz
exports.createQuiz = async (req, res) => {
  const { title, category, questions } = req.body;

  try {
    const newQuiz = await Quiz.create({ title, category });

    // Add questions to the quiz
    for (const question of questions) {
      const newQuestion = await Question.create({
        quiz_id: newQuiz.quiz_id,
        question_text: question.question_text,
        time_limit: question.time_limit,
      });

      // Add options to each question
      for (const option of question.options) {
        await Option.create({
          question_id: newQuestion.question_id,
          option_text: option.option_text,
          is_correct: option.is_correct,
        });
      }
    }

    res.status(201).json({ message: 'Quiz created successfully', quiz: newQuiz });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

// Get a quiz by ID
exports.getQuizById = async (req, res) => {
  const { quizId } = req.params;
  const quiz_id = quizId; // Map `quizId` to `quiz_id`

  try {
    const quiz = await Quiz.findOne({
      where: { quiz_id }, // Use `quiz_id` for the database query
      include: [
        {
          model: Question,
          as: 'questions', // Ensure this matches the alias set in relationships.js
          include: [
            {
              model: Option,
              as: 'options', // Ensure this matches the alias set in relationships.js
            },
          ],
        },
      ],
    });

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    res.status(200).json({ quiz });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};

// Complete a quiz and update leaderboard
exports.completeQuiz = async (req, res) => {
  const { userId, quizId, userAnswers } = req.body;
  const quiz_id = quizId; // Map `quizId` to `quiz_id`

  try {
    // Calculate score based on user's answers
    const score = await calculateScore(userAnswers);

    // Get the total number of questions for the quiz
    const totalQuestions = await Question.count({ where: { quiz_id } });

    // Store quiz attempt
    const attempt = await UserQuizAttempt.create({
      user_id: userId,
      quiz_id,
      score,
      attempt_date: new Date(),
    });

    // Store user answers
    for (const userAnswer of userAnswers) {
      await UserAnswer.create({
        attempt_id: attempt.attempt_id,
        question_id: userAnswer.question_id,
        answer_id: userAnswer.answer_id,
        time_taken: userAnswer.time_taken,
      });
    }

    // Check if a leaderboard entry exists for this user and quiz
    const existingEntry = await Leaderboard.findOne({
      where: { quiz_id, user_id: userId },
    });

    // Update the leaderboard if the new score is higher, or create a new entry
    if (!existingEntry || score > existingEntry.score) {
      await Leaderboard.upsert({
        quiz_id,
        user_id: userId,
        score,
        display_until: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Optional: set a display duration of 7 days
      });
    }

    // Return the score along with the total number of questions
    res.status(200).json({
      message: 'Quiz completed successfully',
      score,
      totalQuestions,
      result: `${score}/${totalQuestions}`,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error completing quiz', error });
  }
};
