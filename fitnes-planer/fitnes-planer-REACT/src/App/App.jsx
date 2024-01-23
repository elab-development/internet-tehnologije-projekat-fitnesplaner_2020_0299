import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Logo from '../images/logo.png';
import './App.css';

import Home from "../Home/Home.jsx";
import Treninzi from "../Treninzi/Treninzi.jsx";
import Vezbe from "../Vezbe/Vezbe.jsx";
import Grupe from "../Grupe/Grupe.jsx";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import Logout from "../Logout/Logout.jsx";
import Trening from "../Treninzi/Trening.jsx";
import { AuthContext } from '../Auth/AuthContext.jsx';

function App() {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return null;
  }

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="navbar-content">
            <Link to="/" className="logo">
              <img src={Logo} alt="React logo" />
              <h1 className="textLogo">FIT PLAN</h1>
            </Link>
            <div className="nav-links">
              {authenticated ? (
                <>
                  <Link to="/grupe">Grupe</Link>
                  <Link to="/vezbe">Vezbe</Link>
                  <Link to="/treninzi">Treninzi</Link>
                  <Link to="/logout" style={{ color: "red" }}>Logout</Link>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
              )
              }
            </div>
          </div>
        </nav>

        <main className="portal">
          <Routes>
            <Route path="*" element={!authenticated ? <Navigate to="/" /> : null} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={!authenticated ? <Login /> : <Navigate to="/" />} />
            <Route path="/register" element={!authenticated ? <Register /> : <Navigate to="/" />} />

            {authenticated &&
              <>
                <Route path="/vezbe" element={<Vezbe />} />
                <Route path="/grupe" element={<Grupe />} />
                <Route path="/treninzi" element={<Treninzi />} />
                <Route path="/treninzi/:id" element={<Trening />} />
                <Route path="/logout" element={<Logout />} />
              </>
            }
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
