import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, useLocation, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Profile from './pages/MyProfile';
import Quiz from './pages/Quiz';
import Leaderboard from './pages/Leaderboard';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';


// Protected Route Component
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

function App() {
  const location = useLocation();

  // Hide NavBar and Footer on /login and /sign-up routes
  const showNavBarAndFooter = !['/login', '/sign-up'].includes(location.pathname);

  return (
    <div className="App">
      {showNavBarAndFooter && <NavBar />} {/* Conditionally render NavBar */}
      <Switch>
        {/* Public routes */}
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
        
        {/* Protected routes */}
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute path="/admin" component={Admin} />
        <ProtectedRoute path="/profile" component={Profile} />
        <ProtectedRoute path="/leader-board" component={Leaderboard} />
        <ProtectedRoute path="/quiz/:quizId" component={Quiz} /> {/* New route for quiz */}
      </Switch>
      {showNavBarAndFooter && <Footer />} {/* Conditionally render Footer */}
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
