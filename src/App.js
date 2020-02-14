<<<<<<< HEAD
import React from 'react';
import './App.css';
import MainScreen from './components/MainScreen.tsx'
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    
    <Router>
      <Route exact path='/' component={MainScreen} />
    </Router>
    

=======
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import ItemComponent from "./components/ReceiptComponent/ItemComponent";
// import ItemListComponent from "./components/ReceiptComponent/ItemListComponent";

function App() {
  return (
    <Router>
      <Route exactpath="/" component={ItemComponent} />
      {/* <Route exactpath="/" component={ItemListComponent} /> */}
    </Router>
>>>>>>> master
  );
}

export default App;
