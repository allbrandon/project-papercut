import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import TransactionComponent from "./components/TransactionComponent/TransactionComponent";

function App() {
  return (
    <Router>
      <Route exactpath="/" component={TransactionComponent} />
      {/* <Route exactpath="/" component={ItemListComponent} /> */}
    </Router>
  );
}

export default App;
