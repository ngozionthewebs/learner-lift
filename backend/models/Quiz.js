// models/Quiz.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Import your Sequelize instance

const Quiz = sequelize.define('Quiz', {
  quiz_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'quiz_id', // Maps to the `quiz_id` column in the DB
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM('Road Signs', 'Road Rules', 'Vehicle Controls'),
    allowNull: false,
  },
}, {
  timestamps: false, // Disable createdAt and updatedAt
});

module.exports = Quiz;
