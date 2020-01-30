import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { firestore } from './firebase';
import { auth } from 'firebase';

function addReceipt() {
  // Add a new receipt to the database.
  // addReceipt("130000000000071480", true, "XXXXXXXXXXXX9538",
  // false, "Secret Sneaker Store", "TRXL900000")
  firestore.collection('receiptTest').add({
    barcode: "036000291463",
    timestamp: "11/01/19 8:00PM",
    eftposData: null,
    cardNo: null,
    store: "Sanctuary Hotel",
    items: 
      [{name: "Long Island",
      quantity: 53,
      price: 10.00}],
    total: 530,
    cash: 550,
    storeDetails: {
      address: "545 Kent St, Sydney",
      phone: "02 9264 7117",
      ABN: "91 618 156 548"}
    // timestamp: firestore.FieldValue.serverTimestamp()
  }).catch(function(error) {
    console.error('Error writing new message to database', error);
  });

  // db.collection('').doc(this.username).collection('booksList').add({
  //   password: this.password,
  //   name: this.name,
  //   rollno: this.rollno
  // })
}

function App() {
  const [receipts, setReceipts] = useState([])
  // const [user, setUser] = useState([])
  // Fetches the database in real time
  useEffect(() => {
    async function fetchData() {
      const snapshot = await firestore.collection('receiptTest').get();
      const receiptLoad = snapshot.docs.map(doc => { return { id: doc.id, ...doc.data()}})
    
      setReceipts(receiptLoad)
      // console.log(receipts)
      // auth.onAuthStateChanged(user => {
      //   setUser({user});
      // });
      // console.log(user);
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
      <button onClick={addReceipt}>
        Add Receipt
      </button>
    </div>
  );
}

export default App;
