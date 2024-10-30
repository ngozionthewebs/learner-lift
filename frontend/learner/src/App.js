import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
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

function App() {
  const location = useLocation();

  // Hide NavBar and Footer on /login and /sign-up routes
  const showNavBarAndFooter = !['/login', '/sign-up'].includes(location.pathname);

  return (
    <div className="App">
      {showNavBarAndFooter && <NavBar />} {/* Conditionally render NavBar */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={Admin} />
        <Route path="/profile" component={Profile} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/leader-board" component={Leaderboard} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={Signup} />
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
