import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import ItemListComponent from "./components/ReceiptComponent/ItemListComponent";

function App() {
  return (
    <Router>
      <Route exactpath="/" component={ItemListComponent} />
    </Router>
  );
}

export default App;
