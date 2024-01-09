import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './Home.css';



// videi
import video1 from './images/video1.mov';

// Importing images
import client1 from './images/home1.png';

// Importovanje krugova
import krug1 from './images/krug1.png';
import krug2 from './images/krug2.png';
import krug3 from './images/krug3.png';
import krug4 from './images/krug4.png';
import krug5 from './images/krug5.png';




function Home() {
  const [loaded, setLoaded] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setLoaded(true);
  }, []);


useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const newHeight = Math.max(100, 350 - scrollPosition); // Adjusted for min height
    const scaleFactor = newHeight / 350; // Calculate scale factor

    const header = document.querySelector('.header');
    const headerText = document.querySelector('.header-text');
    const services = document.querySelector('.services');

    header.style.height = `${newHeight}px`;
    headerText.style.transform = `scale(${scaleFactor})`;

    // Define max and min padding values
    const maxPadding = 120;
    const minPadding = 0;

    // Calculate dynamic padding based on scroll position
    let dynamicPadding = minPadding + scrollPosition;
    dynamicPadding = Math.min(dynamicPadding, maxPadding); // Ensures padding isn't more than max

    // Set dynamic padding-top for .services
    services.style.paddingTop = `${dynamicPadding}px`;
  };

  window.addEventListener('scroll', handleScroll);

  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  const testimonials = [
    {
      quote: "The attention to detail and care in their service is unparalleled! My body has never looked better.",
      client: "Predrag ********",
      image: client1 // Reference the imported image here
    },
    {
      quote: "The attention to detail and care in their service is unparalleled! My body has never looked better.",
      client: "Petar ********",
      image: client1 // Reference the imported image here
    },
    {
      quote: "The attention to detail and care in their service is unparalleled! My body has never looked better.",
      client: "Filip ********",
      image: client1 // Reference the imported image here
    },
    // ... other testimonials
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prevActiveTestimonial) => (prevActiveTestimonial + 1) % testimonials.length);
    }, 5000); // Change testimonials every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [testimonials.length]);


  const fadeIn = useSpring({
    opacity: loaded ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });


  const nextTestimonial = () => {
    setActiveTestimonial((prevActiveTestimonial) => (prevActiveTestimonial + 1) % testimonials.length);
  };


  return (
    <animated.div style={fadeIn} className="home-container">


      <header className="header">
      <div className="header-content">
        <video autoPlay loop muted className="header-video" style={{ position: 'absolute', width: '100%', left: '50%', top: '50%', height: 'auto', transform: 'translate(-50%, -50%)', zIndex: '-1'}}>
          <source src={video1} type="video/mp4" />
        </video>
        <div className="header-text">
            <h1 className="company-name">(064-50-60-200)</h1>
            <p className="slogan">Pozovite odmah</p>
        </div>
      </div>
      </header>

      <div className="sekcije">

      <section className="services">
        {/* Replace with actual service details */}
        <div className="service-card">
          <div className="service-icon">
            <img src={krug1} alt="Krug1" />
          </div>
          <h2 className="service-title">Treninzi</h2>
          <p className="service-description">
            Nasi treninzi sastoje se od pojedinacnih vezbi za svaku grupu misica.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src={krug2} alt="Krug2" />
          </div>
          <h2 className="service-title">Vezbe</h2>
          <p className="service-description">
            Transformisite svoje telo jednostavnim planom vezbi.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src={krug3} alt="Krug3" />
          </div>
          <h2 className="service-title">Proteini</h2>
          <p className="service-description">
            Zastite i obnovite misice nasim proteinskim sejkovima.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src={krug4} alt="Krug4" />
          </div>
          <h2 className="service-title">Teretane</h2>
          <p className="service-description">
            Poboljsajte celokupan dozivljaj posetom nase teretane.
          </p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <img src={krug5} alt="Krug4" />
          </div>
          <h2 className="service-title">Ishrana</h2>
          <p className="service-description">
            Poboljsate svoje zdravlje nasim neverovatnim programom ishrane!
          </p>
        </div>
      </section>



    <section className="testimonials">
        <h2>Šta nase mušterije kažu</h2>
        <div className="testimonial-container">
          {testimonials.map((testimonial, index) => (
            <animated.div key={index} className={`testimonial ${activeTestimonial === index ? 'active' : ''}`}>
              <img src={testimonial.image} alt="Client" className="client-photo" />
              <blockquote>
                "{testimonial.quote}"
              </blockquote>
              <cite>- {testimonial.client}</cite>
            </animated.div>
          ))}
        </div>
        <button onClick={nextTestimonial}>Next</button>
    </section>


    </div>

    </animated.div>
  );
}

export default Home;
