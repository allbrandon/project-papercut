import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainScreen from './MainScreen'
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    
    <Router>
      <Route exact path='/' component={MainScreen} />
    </Router>
    

  );
}

export default App;
