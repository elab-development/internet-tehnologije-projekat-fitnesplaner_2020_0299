import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from '../images/logo.png';


// Ensure the path for your CSS file is correct
import './App.css';

// Import your components
import Home from "../Home/Home.jsx";




function App() {

  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const isTop = window.scrollY < 100;
    setSticky(!isTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




    return (
        <Router>
            <div className="app">
                
                <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
                    <div to="/" className="logo-container">
                      <Link to="/" className={`logo ${isSticky ? 'fade-out' : ''}`}>
                        <img src={Logo} alt="React logo"/>
                      </Link>
                       <Link to="/" className={`textLogo ${isSticky ? 'slide-in' : ''}`}>
                        <h1 className="textLogo">FIT PLAN</h1>
                      </Link>
                    </div>



                     <div className={`buttons ${isSticky ? 'center' : ''}`}>
                      <div className="dropdown one">
                          <Link to="/">Grupe {/* Usluge*/}</Link>
                      </div>

                      <div className="dropdown two ">
                          <Link to="/">Vezbe {/* Galerija*/}</Link>
                          
                      </div>
                      <div className="dropdown three">
                           <Link to="/">Treninzi {/* Kontakt*/}</Link>
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

