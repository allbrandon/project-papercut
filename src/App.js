import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUpComponent from "./components/SignUpComponent/SignUpComponent";
import SignInComponent from "./components/SignInComponent/SignInComponent";
import WelcomeComponent from "./components/WelcomeComponent/WelcomeComponent";
import AccountProfileComponent from "./components/AccountProfileComponent/AccountProfileComponent";
import firebase from "./firebase";
import AccountSettings from "./components/AccountSettingsComponent/AccountSettings";

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

  return (
    <Router>
      <Route exact path="/signup" component={SignUpComponent} />
      <Route path="/signin" component={SignInComponent} />
      <Route path="/welcome" component={WelcomeComponent} />
      <Route path="/profile" component={AccountProfileComponent} />
      <Route exact path="/settings" component={AccountSettings} />
    </Router>
  );
}

export default App;
