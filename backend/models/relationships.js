// models/relationships.js
const Quiz = require('./Quiz');
const Question = require('./question');
const Option = require('./Option');
const UserQuizAttempt = require('./UserQuizAttempt');
const UserAnswer = require('./UserAnswer');
const Answer = require('./Answer');
const Leaderboard = require('./Leaderboard');

// Define associations
Quiz.hasMany(Question, {
  foreignKey: 'quiz_id',
  as: 'questions',
});

Question.belongsTo(Quiz, {
  foreignKey: 'quiz_id',
});

Question.hasMany(Option, {
  foreignKey: 'question_id',
  as: 'options',
});

Option.belongsTo(Question, {
  foreignKey: 'question_id',
});

// New Relationships
Question.hasMany(Answer, {
  foreignKey: 'question_id',
  as: 'answers',
});

Answer.belongsTo(Question, {
  foreignKey: 'question_id',
});

UserQuizAttempt.belongsTo(Quiz, {
  foreignKey: 'quiz_id',
  as: 'quiz',
});

UserAnswer.belongsTo(UserQuizAttempt, {
  foreignKey: 'attempt_id',
  as: 'attempt',
});

UserAnswer.belongsTo(Answer, {
  foreignKey: 'answer_id',
  as: 'selected_answer',
});

Leaderboard.belongsTo(Quiz, {
  foreignKey: 'quiz_id',
  as: 'quiz',
});
