import axios from 'axios';

const API_URL = 'http://localhost:5001/api'; // Replace with your backend URL if different

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
// Function to login a user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};
