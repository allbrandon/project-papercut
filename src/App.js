import React from "react";
import "./App.css";
import MainScreen from "./components/MainScreen.tsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TransactionComponent from "./components/TransactionComponent/TransactionComponent";
function App() {
  return (
    <Router>
      <Route exact path="/" component={MainScreen} />
      <Route exact path="/receipt/:id" component={TransactionComponent} />
    </Router>
  );
}

export default App;
