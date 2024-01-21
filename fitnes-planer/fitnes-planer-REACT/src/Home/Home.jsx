import React, { useEffect, useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import './Home.css';



// videi
// import video1 from './images/Video.mp4';

// Importing images
import client1 from './images/home1.png';

// Importovanje krugova
import krug1 from './images/krug1.png';
import krug2 from './images/krug2.png';
import krug3 from './images/krug3.png';
import krug4 from './images/krug4.png';
import krug5 from './images/krug5.png';

// import krug1 from './images/alt/1.png';
// import krug2 from './images/alt/2.png';
// import krug3 from './images/alt/3.png';
// import krug4 from './images/alt/4.png';
// import krug5 from './images/alt/5.png';



function Home() {
  const [loaded, setLoaded] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setLoaded(true);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      const viewportHeight = window.innerHeight;
      const originalHeaderHeight = isMobile ? 240 : viewportHeight * 0.5; // 240px for mobile, 50vh for desktop
      const minHeight = 100;
      const maxHeight = originalHeaderHeight;
      const newHeight = Math.max(minHeight, maxHeight - scrollPosition);
      const scaleFactor = newHeight / maxHeight;

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

      // Border radius changes
      const maxBorderRadius = 500; // Maximum border radius
      const borderRadiusChangeRate = 0.9; // Rate of change (adjust as needed)
      let newBorderRadius = 10 + scrollPosition * borderRadiusChangeRate;
      newBorderRadius = Math.min(newBorderRadius, maxBorderRadius); // Ensures border radius isn't more than max

      // Apply new border radius to header
      header.style.borderBottomLeftRadius = `${newBorderRadius}px`;
      header.style.borderBottomRightRadius = `${newBorderRadius}px`;

      // Width changes
      const maxWidthPercentage = 100; // Maximum width in percentage
      const minWidthPercentage = 20; // Minimum width in percentage
      const widthChangeRate = (maxWidthPercentage - minWidthPercentage) / 300; // Adjust width change rate
      let newWidthPercentage = maxWidthPercentage - scrollPosition * widthChangeRate;
      newWidthPercentage = Math.max(newWidthPercentage, minWidthPercentage); // Ensures width isn't less than min

      // Apply new width to header
      header.style.width = `${newWidthPercentage}%`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const testimonials = [
    {
      quote: "The attention to detail and care in their service is unparalleled! My car has never looked better.",
      client: "Predrag ********",
      image: client1 // Reference the imported image here
    },
    {
      quote: "The attention to detail and care in their service is unparalleled! My car has never looked better.",
      client: "Petar ********",
      image: client1 // Reference the imported image here
    },
    {
      quote: "The attention to detail and care in their service is unparalleled! My car has never looked better.",
      client: "Filip ********",
      image: client1 // Reference the imported image here
    },
    // ... other testimonials
  ];


  // Hook to scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  // Sta musterije kazu automatsko listanje
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


  // Ucitavanje videa
  const videoRef = useRef(null);

  useEffect(() => {
    // Play the video as soon as the component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Error attempting to play video:', error);
      });
    }
  }, []);


  return (
    <animated.div style={fadeIn} className="home-container">


      <header className="header">
        <div className="header-content">
          {/*       <video 
            autoPlay 
            loop 
            muted 
            playsInline // Added for iOS support
            className="header-video" 
            style={{ 
                position: 'absolute', 
                width: '100vw', 
                left: '-40vw', 
                top: '-250px', 
                height: 'auto', 
                minHeight: '600px'
            }}
            ref={videoRef} // Add a reference to the video
        >
            <source src={video1} type="video/mp4" />
        </video>*/}

          <div className="header-text">
            <h1 className="company-name">FIT PLAN</h1>
            <p className="slogan">Vas fitness saputnik</p>
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
            <div className="service-text">
              <h2 className="service-title">Treninzi</h2>
              <p className="service-description">
                Nasi treninzi sastoje se od pojedinacnih vezbi za svaku grupu misica.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src={krug2} alt="Krug2" />
            </div>
            <div className="service-text">
              <h2 className="service-title">Vezbe</h2>
              <p className="service-description">
                Transformisite svoje telo jednostavnim planom vezbi.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src={krug3} alt="Krug3" />
            </div>
            <div className="service-text">
              <h2 className="service-title">Suplementi</h2>
              <p className="service-description">
                Zastite i obnovite misice nasim proteinskim sejkovima.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src={krug4} alt="Krug4" />
            </div>
            <div className="service-text">
              <h2 className="service-title">Teretane</h2>
              <p className="service-description">
                Poboljsajte celokupan dozivljaj posetom nase teretane.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <img src={krug5} alt="Krug4" />
            </div>
            <div className="service-text">
              <h2 className="service-title">Ishrana</h2>
              <p className="service-description">
                Poboljsate svoje zdravlje nasim neverovatnim programom ishrane!
              </p>
            </div>
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
