// models/Question.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Question = sequelize.define('Question', {
  question_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quiz_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  question_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  time_limit: {
    type: DataTypes.INTEGER,
    defaultValue: 60, // Default 60 seconds per question
  },
  image_path: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: false, // Add this line to disable createdAt and updatedAt
});

module.exports = Question;
