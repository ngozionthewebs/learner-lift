import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Profile from './pages/MyProfile';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
            <Switch>
                <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/admin">
                <Admin/>
              </Route>
              <Route path="/profile">
                <Profile/>
              </Route>
            </Switch>
      </div>
    </Router>
  );
}

export default App;
