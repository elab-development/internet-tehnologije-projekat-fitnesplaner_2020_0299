import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Home.css';

function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const fadeIn = useSpring({
    opacity: loaded ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn} className="home-container">
      <header className="header">
        <h1 className="company-name">Luxury Cleaners</h1>
        <p className="slogan">Elevate Your Space to Pure Luxury</p>
      </header>

      <section className="services">
        <div className="service-card">
          <div className="service-icon">
            <img src="/car-interior-icon.png" alt="Car Interior Cleaning" />
          </div>
          <h2 className="service-title">Car Interior Cleaning</h2>
          <p className="service-description">
            Experience the ultimate in car interior cleanliness and luxury.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src="/sofa-icon.png" alt="Sofa Cleaning" />
          </div>
          <h2 className="service-title">Sofa Cleaning</h2>
          <p className="service-description">
            Transform your sofa into a masterpiece of comfort and style.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src="/awning-icon.png" alt="Awning Cleaning" />
          </div>
          <h2 className="service-title">Awning Cleaning</h2>
          <p className="service-description">
            Renew and protect your outdoor awnings with our premium service.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src="/carpet-icon.png" alt="Carpet Cleaning" />
          </div>
          <h2 className="service-title">Carpet Cleaning</h2>
          <p className="service-description">
            Elevate your living spaces with our luxurious carpet cleaning.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p className="contact-info">
          Contact us at: <a href="tel:+123456789">+1 (123) 456-789</a>
        </p>
        <p className="address">123 Luxury Lane, City, State, Zip</p>
      </footer>
    </animated.div>
  );
}

export default Home;
