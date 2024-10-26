// models/relationships.js
const Quiz = require('./Quiz');
const Question = require('./question');
const Option = require('./option');

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
