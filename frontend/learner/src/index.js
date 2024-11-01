import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWithRouter from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './context/UserContext';

// Create a root for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app wrapped in UserProvider
root.render(
  <React.StrictMode>
    <UserProvider>
      <AppWithRouter />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
