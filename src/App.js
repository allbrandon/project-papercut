import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AccountSettings from "./components/AccountSettingsComponent/AccountSettings";

function App() {
  return (
    <Router>
      <Route exactpath="/" component={AccountSettings} />
    </Router>
  );
}

export default App;
