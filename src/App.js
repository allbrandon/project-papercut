import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUpComponent from "./components/SignUpComponent/SignUpComponent";
import SignInComponent from "./components/SignInComponent/SignInComponent";
import WelcomeComponent from "./components/WelcomeComponent/WelcomeComponent";
import AccountProfileComponent from "./components/AccountProfileComponent/AccountProfileComponent";

function App() {
  return (
    <Router>
      <Route exact path="/signup" component={SignUpComponent} />
      <Route path="/signin" component={SignInComponent} />
      <Route path="/welcome" component={WelcomeComponent} />
      <Route path="/profile" component={AccountProfileComponent} />
    </Router>
  );
}

export default App;
