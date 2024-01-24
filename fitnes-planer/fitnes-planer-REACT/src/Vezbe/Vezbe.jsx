import React, { useState, useEffect, useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import './Vezbe.css';
import VezbaForma from "./VezbaForma.jsx";
import { deleteExercise, fetchExercises, submitExercise } from "../api/api.js";
import { AuthContext } from '../Auth/AuthContext.jsx';
import benchpress from './images/benchpress.png'; // Import the image
import crunches from './images/crunches.png'; // Import the image
import squat from './images/squat.png'; // Import the image
import shoulderpress from './images/shoulderpress.png'; // Import the image

function Vezbe() {
  const { role } = useContext(AuthContext);
  const [exercises, setExercises] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    fetchExercises().then((data) => setExercises(data.exercises));
  }, []);

  // Niz importovanih slika koji se prikazuje
  const photos = { benchpress, crunches, squat, shoulderpress /* ... jos URLova */ }

  // PhotoZoom Component
  function PhotoZoom({ photo, onClose }) {
    const animation = useSpring({ opacity: 1, from: { opacity: 0 } });

    const handleClose = (event) => {
      event.preventDefault(); // Prevent default behavior when closing the photo
      onClose();
    };

    return (
      <animated.div style={animation} className="backdrop" onClick={handleClose}>
        <div className="zoomed-photo-container">
          <animated.img style={animation} src={photo} alt="Zoomed" className="zoomed-photo" />

          <div className="photo-indicator">
            {currentPhotoIndex + 1} / {exercises.length}
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

  const handleDelete = (id) => {
    deleteExercise(id.toString()).then(() => window.location.reload());
  }

  // PhotoGallery Component
  function PhotoGallery({ photos, onSelect }) {
    return (
      <div className="photo-grid">
        {exercises.map((exercise, index) => (
          <div className="photo-and-name">
            {photos[exercise.name.replace(/\s+/g, '').toLowerCase()] ? (
              <Photo key={exercise.name} src={photos[exercise.name.replace(/\s+/g, '').toLowerCase()]} onClick={() => onSelect(photos[exercise.name.replace(/\s+/g, '').toLowerCase()])} index={index} />
            ) : <p style={{ margin: "145px 0" }}>(nema dostupne slike)</p>}
            <h2>{exercise.name}</h2>
            {role == "admin" ? (
              <button onClick={() => handleDelete(exercise.exercise_id)}>Obrisi</button>
            ) : null}
          </div>
        ))}
      </div>
    );
  };

  const handleSubmit = (newExercise) => {
    submitExercise(newExercise).then(() => window.location.reload());
  };

  return (
    <div className="vezbe">
      <h1> Vezbe </h1><br /><br />

      <PhotoGallery photos={photos} onSelect={setSelectedPhoto} />
      {selectedPhoto && <PhotoZoom photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />}

      {role == "admin" ? (
        <VezbaForma onAddExercise={handleSubmit} />
      ) : null}
    </div>
  );
}

export default Vezbe;
