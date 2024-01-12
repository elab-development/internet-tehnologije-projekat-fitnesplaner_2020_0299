import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './Vezbe.css';
import img1 from './images/1.png'; // Import the image
import img2 from './images/2.png'; // Import the image
import img3 from './images/3.png'; // Import the image
import img4 from './images/4.png'; // Import the image
import img5 from './images/5.png'; // Import the image
import img6 from './images/6.png'; // Import the image
import img7 from './images/7.png'; // Import the image
import img8 from './images/8.png'; // Import the image

function Vezbe() {

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Niz importovanih slika koji se prikazuje
  const photos = [img1, img2, img3, img4, img5, img6, img7, img8 /* ... jos URLova */];

  // Funkcija koja prati index trenutne slike
  const changePhoto = (direction) => {
    if (direction === 'next') {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    } else {
      setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    }
  };

  // PhotoZoom Component
function PhotoZoom({ photo, onClose }) {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 } });

  const handleArrowClick = (direction, event) => {
    event.preventDefault(); // Prevent default button behavior
    event.stopPropagation(); // Prevent click event from reaching the backdrop
    changePhoto(direction);
  };

  const handleClose = (event) => {
    event.preventDefault(); // Prevent default behavior when closing the photo
    onClose();
  };

  return (
    <animated.div style={animation} className="backdrop" onClick={handleClose}>
      <div className="zoomed-photo-container">
        <animated.img style={animation} src={photo} alt="Zoomed" className="zoomed-photo" />
        <div className="photo-navigation">
          <button onClick={(e) => handleArrowClick('prev', e)}>&lt;</button>
          <button onClick={(e) => handleArrowClick('next', e)}>&gt;</button>
        </div>

        <div className="photo-indicator">
          {currentPhotoIndex + 1} / {photos.length}
        </div>
      </div>
    </animated.div>
  );
}


  // Photo Component
  function Photo({ src, onClick, index }) {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1
    });
    return (
      <div ref={ref} className={`photo-container ${inView ? 'in-view' : ''}`} onClick={() => {
        onClick();
        setCurrentPhotoIndex(index);
      }}>
        <img src={src} alt="Gallery" />
      </div>
    );
  }

  // PhotoGallery Component
  function PhotoGallery({ photos, onSelect }) {
   return (
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <Photo key={photo} src={photo} onClick={() => onSelect(photo)} index={index} />
        ))}
      </div>
    );
  }


  return (
    <div className="vezbe">
    <h1> Vezbe </h1><br/><br/>

      <PhotoGallery photos={photos} onSelect={setSelectedPhoto} />
      {selectedPhoto && <PhotoZoom photo={photos[currentPhotoIndex]} onClose={() => setSelectedPhoto(null)} />}
    </div>
  );
}

export default Vezbe;
