// models/Quiz.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Import your Sequelize instance

const Quiz = sequelize.define('Quiz', {
  quiz_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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
