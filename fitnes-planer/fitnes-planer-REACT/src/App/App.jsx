import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import './App.css';

import Home from "../Home/Home.jsx";
import Treninzi from "../Treninzi/Treninzi.jsx";
import Vezbe from "../Vezbe/Vezbe.jsx";
import Grupe from "../Grupe/Grupe.jsx";


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
              <Link to="/grupe">Grupe</Link>
              <Link to="/vezbe">Vezbe</Link>
              <Link to="/treninzi">Treninzi</Link>
            </div>
          </div>
        </nav>

        <main className="portal">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/treninzi" element={<Treninzi />} />
            <Route path="/vezbe" element={<Vezbe />} />
            <Route path="/grupe" element={<Grupe />} />
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
