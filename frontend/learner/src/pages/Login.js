import React, { useState, useContext } from 'react';
import '../styles/Login.css';
import { loginUser } from '../services/api';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
      try {
          const credentials = { email, password };
          const response = await loginUser(credentials);
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user)); // Save user data
          setUser(response.user);

          setMessage('Login successful!');
          window.location.href = '/';
      } catch (error) {
          setMessage('Invalid email or password. Please try again.');
      }
  };


  console.log(localStorage.getItem('user'));

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 d-flex flex-column justify-content-center align-items-start p-5 form">
          <h2>WELCOME <br/> BACK! :)</h2>
          <label className="mt-4" htmlFor="email">Email</label>
          <input 
            type="text" 
            id="email" 
            className="form-control mb-3" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <label htmlFor="password">Secure your account</label>
          <input 
            type="password" 
            id="password" 
            className="form-control mb-3" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <p className="mt-3" style={{ fontSize: '0.9rem' }}>
            I Don’t have an account? <a href="/sign-up" style={{ textDecoration: 'underline', color: '#467966' }}>Sign Up</a>
          </p>
          <button className="button-3" onClick={handleLogin}>LOGIN</button>
          <p>{message}</p>
        </div>
        <div className="col-6"><div className="image-2"></div></div>
      </div>
    </div>
  );
};

export default Login;
