import React from "react";
import "./App.css";
import MainScreen from "./components/MainScreen.tsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TransactionComponent from "./components/TransactionComponent/TransactionComponent";
import SignUpComponent from "./components/SignUpComponent/SignUpComponent";
import SignInComponent from "./components/SignInComponent/SignInComponent";
import WelcomeComponent from "./components/WelcomeComponent/WelcomeComponent";
function App() {
  return (
    <Router>
      <Route exact path="/" component={MainScreen} />
      <Route exact path="/receipt/:trans_id" component={TransactionComponent} />
      <Route exact path="/signup" component={SignUpComponent} />
      <Route path="/signin" component={SignInComponent} />
      <Route path="/welcome" component={WelcomeComponent} />
    </Router>
  );
}

export default App;
