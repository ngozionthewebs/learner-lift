import React, { useState } from 'react';
import '../styles/Signup.css';
import { registerUser } from '../services/api.js'; // Import the API function

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async () => {
    try {
      const userData = { username, email, password };
      const response = await registerUser(userData);
      setMessage(response.message);
      // Redirect to login or dashboard after successful registration
      window.location.href = '/login';
    } catch (error) {
      setMessage(error.message || 'Error signing up. Please try again.');
    }
  };
  

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 d-flex flex-column justify-content-center align-items-start p-5 form">
          <h1>Join the <br/> Community</h1>
          <label className="mt-4" htmlFor="username">What should we call you? (username)</label>
          <input type="text" id="username" className="form-control mb-3" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="email">Where should we send you news?</label>
          <input type="email" id="email" className="form-control mb-3" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="password">Secure your account</label>
          <input type="password" id="password" className="form-control mb-3" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <p className="mt-3" style={{ fontSize: '0.9rem' }}>
                        I Don’t have an account? <a href="/login" style={{ textDecoration: 'underline', color: '#EB4C37' }}>Login</a>
          </p>
          <button className='button-4' onClick={handleSignup}>SIGN UP</button>
          <p>{message}</p>
        </div>
        <div className="col-6"><div className="image"></div></div>
      </div>
    </div>
  );
};

export default Signup;
