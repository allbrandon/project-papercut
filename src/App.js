import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { firestore } from './firebase';
import { auth } from 'firebase';






function App() {
  const [receipts, setReceipts] = useState([])
  const [user, setUser] = useState([])
  // Fetches the database in real time
  useEffect(() => {
    async function fetchData() {
      const snapshot = await firestore.collection('receiptTest').get();
      const receiptLoad = snapshot.docs.map(doc => { return { id: doc.id, ...doc.data()}})
    
      setReceipts(receiptLoad)
      console.log(receipts)
      auth.onAuthStateChanged(user => {
        setUser({user});
      });
      console.log(user);
    }
    fetchData();
  }, [receipts]);
    // Handles new addition to database
  const handleCreate = async post => {
    firestore.collection('receiptTest').add(post);
  }

  const handleRemove = async id => {
    firestore.doc(`receiptTest/${id}`).delete();
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
