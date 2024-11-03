import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

// Axios interceptor for setting Authorization header
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/signup`, userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error.response ? error.response.data : error.message);
    throw new Error(error.response?.data?.message || 'Error during registration');
  }
};

// Function to log in a user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error.response ? error.response.data : error.message);
    throw new Error(error.response?.data?.message || 'Error during login');
  }
};

// Function to log out a user 
export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Example function to get user profile 
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/users/profile`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error.response ? error.response.data : error.message);
    throw new Error(error.response?.data?.message || 'Error fetching user profile');
  }
};

// Function to get leaderboard data by quiz ID
export const getLeaderboardData = async (quizId) => {
  try {
    const response = await axios.get(`${API_URL}/leaderboard/${quizId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching leaderboard data:', error.response ? error.response.data : error.message);
    throw new Error(error.response?.data?.message || 'Error fetching leaderboard data');
  }
};

