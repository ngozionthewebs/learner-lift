// app.js
const express = require('express');
const path = require('path');
const sequelize = require('./config/db'); // Import the db connection
const userRoutes = require('./routes/userRoutes'); // Import user routes
const quizRoutes = require('./routes/quizRoutes'); // Import quiz routes
const leaderboardRoutes = require('./routes/leaderboardRoutes'); // Import leaderboard routes
require('./models/relationships'); // Ensure relationships are established

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON
app.use(express.json());

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Test database connection and sync
sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables are ready!'); // This message should appear
});

// Connect the user routes
app.use('/api/users', userRoutes); // Ensure this line is added to connect user routes

// Connect the quiz routes
app.use('/api/quiz', quizRoutes); // Connect the quiz routes here

// Connect the leaderboard routes
app.use('/api/leaderboard', leaderboardRoutes); // Connect the leaderboard routes

// Basic route to check if server is running
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`); // This message should appear
});
