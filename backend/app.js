// app.js
const express = require('express');
const sequelize = require('./config/db'); // Import the db connection
const userRoutes = require('./routes/userRoutes'); 
const quizRoutes = require('./routes/quizRoutes'); 
require('./models/relationships');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware to parse JSON
app.use(express.json());

// Test database connection and sync
sequelize.sync({ force: false }).then(() => {
  console.log('Database & tables are ready!'); // This message should appear
});

// Connect the user routes
app.use('/api/users', userRoutes); // Ensure this line is added to connect user routes

// Connect the quiz routes
app.use('/api/quiz', quizRoutes); // Connect the quiz routes here

// Basic route to check if server is running
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`); // This message should appear
});
