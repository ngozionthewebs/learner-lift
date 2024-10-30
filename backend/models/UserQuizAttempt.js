// models/UserQuizAttempt.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const UserQuizAttempt = sequelize.define('UserQuizAttempt', {
  attempt_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quiz_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  attempt_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = UserQuizAttempt;
