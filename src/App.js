import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import ReceiptTest from "./components/ReceiptTest";
function App() {
  return (
    <Router>
      <Route exactpath="/" component={ReceiptTest} />
      {/* <Route exactpath="/" component={ItemListComponent} /> */}
    </Router>
  );
}

export default App;
