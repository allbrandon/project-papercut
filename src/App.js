import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainScreen from './components/MainScreen.tsx'
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    
    <Router>
      <Route exact path='/' component={MainScreen} />
    </Router>
    

  );
}

export default App;
