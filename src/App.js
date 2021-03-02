import React, { useState, useEffect } from "react";
import "./App.css";
import MainScreen from "./pages/MainScreen.tsx";
import UserContext from "./context/UserContext";
import { Router } from "@reach/router";
import TransactionComponent from "./components/TransactionComponent/TransactionComponent";
import SignUpComponent from "./components/SignUpComponent/SignUpComponent";
import SignInComponent from "./components/SignInComponent/SignInComponent";
import WelcomeComponent from "./components/WelcomeComponent/WelcomeComponent";
import AccountSettings from "./components/AccountSettingsComponent/AccountSettings";

import firebase from "./firebase";

function App() {
  const [receipts, setReceipts] = useState([]);

  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val);
    });
  }, []);

  const [user, setUser] = useState([]);
  // Fetches the database in real time
  // useEffect(() => {
  //   async function fetchData() {
  //     const snapshot = await firebase.firestore.collection("receiptTest").get();
  //     const receiptLoad = snapshot.docs.map(doc => {
  //       return { id: doc.id, ...doc.data() };
  //     });

  //     setReceipts(receiptLoad);
  //     // console.log(receipts)
  //     firebase.auth.onAuthStateChanged(user => {
  //       setUser({ user });
  //     });
  //     // console.log(user);
  //   }
  //   fetchData();
  // }, [receipts]);
  // Handles new addition to database
  const handleCreate = async post => {
    firebase.firestore.collection("receiptTest").add(post);
  };

  const handleRemove = async id => {
    firebase.firestore.doc(`receiptTest/${id}`).delete();
  };

  // const user = useState({ name: "Austin", email: "a@gmail.com" });
  return (
    <UserContext.Provider value={user}>
      <div>
        <Router>
          <WelcomeComponent path="/" />

          <MainScreen path="/home" />
          <TransactionComponent path="/receipt/:trans_id" />
          <SignUpComponent path="/signup" />
          <SignInComponent path="/signin" />
          <AccountSettings path="/settings" />
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
