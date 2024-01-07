import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faBars } from '@fortawesome/free-solid-svg-icons';

// Ensure the path for your CSS file is correct
import './App.css';

// Import your components
import Home from "../Home/Home.jsx";




function App() {




    // Promenljiva i f-ja za Menu dugme na telefonu
    const [menuOpen, setMenuOpen] = useState(false);  // da li je kliknuto menu dugme
    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggle the state
        console.log('Menu toggled. New state:', !menuOpen);
    };
   


    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

      // ZA NESTAJACE FIT-PLAN DUGME U MOBILNOM NAVBARU
    const handleButtonClick = () => {
        window.location.href = '/';
    };





    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            const navbar = document.querySelector('.navbar');
            const headerBottom = header.getBoundingClientRect().bottom;

            if (window.scrollY > headerBottom) {
                navbar.classList.add('sticky-navbar');
            } else {
                navbar.classList.remove('sticky-navbar');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    window.addEventListener('scroll', () => {
        const logo = document.querySelector('.navbar-logo');
        if (window.scrollY > 100) {
            logo.classList.add('visible');
        } else {
            logo.classList.remove('visible');
        }
    });


    return (
        <Router>
            <div className="app">
                <header className="header">
                    <div to="/" className="logo-container">
                      <Link to="/" className="logo">
                        <img src={Logo} alt="React logo"/>
                      </Link>
                      <Link to="/" className="logo">
                        <h1 className="textLogo">FIT-PLAN</h1>
                      </Link>
                      
                      </div>
                    <div className="login-button-wrap">
                    <Link to="/" className="login-button" >Kontakt</Link>
                    </div>
                </header>

                <nav className="navbar">

                    {/* MENU DUGME ZA TELEFON */}
                    <div className={`menu-icon ${menuOpen ? 'menu-icon-open' : 'menu-icon-closed'}`} onClick={() => { toggleMenu(); resetSubMenu(); }}>
                        
                        {menuOpen 
                            ? <FontAwesomeIcon className="menu-icon-1" icon={faChevronLeft} />
                            : <FontAwesomeIcon className="menu-icon-2" icon={faBars} />
                        }

                        <button 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave} 
                            onClick={menuOpen ? () => { toggleMenu(); resetSubMenu(); } : handleButtonClick}
                            className="navbar-logo"
                        >
                            <h1>FIT-PLAN</h1>
                        </button>
                    </div>









                    {/*REGULAR NAVBAR*/}
                    <div className="dropdown one">
                        <Link to="/">Grupe</Link>
                    </div>

                    <div className="dropdown two ">
                        <Link to="/">Vezbe</Link>
                        
                    </div>
                    <div className="dropdown three">
                         <Link to="/">Treninzi</Link>
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

