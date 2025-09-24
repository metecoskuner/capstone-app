import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";
import Main from "./Main";

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Little <span>Lemon</span></h1>
        </header>
        <Nav />
        <Main />
        <footer>
          <p>&copy; 2025 Little Lemon. <a href="/contact">Contact Us</a></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;