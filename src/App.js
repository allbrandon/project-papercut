import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import StoreDetail from "./components/TransactionComponent/StoreDetail";
import Heading from "./components/TransactionComponent/Heading";
import ReceiptDetail from "./components/TransactionComponent/ReceiptDetail";

function App() {
  return (
    <Router>
      <Route exactpath="/" component={Heading} />
      <Route exactpath="/" component={ReceiptDetail} />
      <Route exactpath="/" component={StoreDetail} />
    </Router>
  );
}

export default App;
