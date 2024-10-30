// models/UserAnswer.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const UserAnswer = sequelize.define('UserAnswer', {
  user_answer_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  attempt_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  answer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  time_taken: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = UserAnswer;
