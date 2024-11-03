// models/Option.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Question = require('./question');

const Option = sequelize.define('Option', {
  option_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  option_text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_correct: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: false, // Add this line to disable createdAt and updatedAt
});

// Define the association with the Question model here
Option.belongsTo(Question, {
  foreignKey: 'question_id',
});

module.exports = Option;
