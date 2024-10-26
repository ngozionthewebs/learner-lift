
// Import the Sequelize constructor from the 'sequelize' package.
const { Sequelize } = require('sequelize');

// Import the 'dotenv' package to load environment variables from a .env file.
const dotenv = require('dotenv');

// Load environment variables from the .env file.
dotenv.config();

// Create a new Sequelize instance using database connection details from environment variables.
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database username
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST, // Database host (e.g., localhost)
    dialect: 'mysql', // The type of database you're using (MySQL in this case)
  }
);

// Test the database connection using Sequelize's 'authenticate' method.
sequelize.authenticate()
  .then(() => {
    console.log('Connected to the MySQL database.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Export the 'sequelize' instance so it can be used in other parts of the application.
module.exports = sequelize;
