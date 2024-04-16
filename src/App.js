// App.js

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/login" component={LoginPage} />
      {/* Add more Route components for other pages */}
    </Router>
  );
};

export default App;
