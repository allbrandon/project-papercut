import React, { useState } from "react";
import "./App.css";
import MainScreen from "./pages/MainScreen.tsx";
import UserContext from "./context/UserContext";
import { Router } from "@reach/router";
import TransactionComponent from "./components/TransactionComponent/TransactionComponent";
import SignUpComponent from "./components/SignUpComponent/SignUpComponent";
import SignInComponent from "./components/SignInComponent/SignInComponent";
import WelcomeComponent from "./components/WelcomeComponent/WelcomeComponent";
import SettingsPage from "./pages/SettingsPage";

function App() {
  const user = useState({ name: "Austin", email: "a@gmail.com" });
  return (
    <UserContext.Provider value={user}>
      <div>
        <Router>
          <MainScreen path="/" />
          <TransactionComponent path="/receipt/:trans_id" />
          <SignUpComponent path="/signup" />
          <SignInComponent path="/signin" />
          <WelcomeComponent path="/welcome" />
          <SettingsPage path="/settings" />
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
