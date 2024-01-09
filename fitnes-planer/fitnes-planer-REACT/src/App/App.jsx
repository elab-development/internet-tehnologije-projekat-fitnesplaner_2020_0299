import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import './App.css';
import Home from "../Home/Home.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="navbar-content">
            <Link to="/" className="logo">
              <img src={Logo} alt="React logo"/>
              <h1 className="textLogo">FIT PLAN</h1>
            </Link>
            <div className="nav-links">
              <Link to="/">Grupe</Link>
              <Link to="/">Vezbe</Link>
              <Link to="/">Treninzi</Link>
            </div>
          </div>
        </nav>

        <main className="portal">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2023 FIT-PLAN. Sva prava su zadržana.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
