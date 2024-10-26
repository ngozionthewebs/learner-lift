// controllers/quizController.js
const Quiz = require('../models/Quiz');
const Question = require('../models/question');
const Option = require('../models/option');

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

  try {
    const quiz = await Quiz.findOne({
      where: { quiz_id: quizId },
      include: [
        {
          model: Question,
          as: 'questions',  // This matches the alias set in relationships.js
          include: [
            {
              model: Option,
              as: 'options',  // This matches the alias set in relationships.js
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
