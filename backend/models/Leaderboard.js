// models/Leaderboard.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Leaderboard = sequelize.define('Leaderboard', {
  leaderboard_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quiz_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'quiz_id', // Maps to the `quiz_id` column in the DB
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  display_until: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  timestamps: false, // Disable createdAt and updatedAt
});

module.exports = Leaderboard;
