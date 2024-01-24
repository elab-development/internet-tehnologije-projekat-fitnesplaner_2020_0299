import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

const WorkoutForm = ({ onAddWorkout }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [rating, setRating] = useState(0);
  const [ratingError, setRatingError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic can be added here
    if (parseInt(rating) < 1 || parseInt(rating) > 5) {
      setRatingError("Ocena mora da bude izmedju 1 i 5!");
      return;
    }

    setLoading(true);

    setRatingError('');

    // Create a workout object
    const newWorkout = {
      title,
      date,
      notes,
      rating: parseInt(rating),
    };

    // Pass the new workout to the parent component
    onAddWorkout(newWorkout);

    // Clear the form
    setTitle('');
    setDate('');
    setNotes('');
    setRating(0);
  };

  return (
    <form className='forma' onSubmit={handleSubmit}>
      <TextField
        label="Ime treninga"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ marginBottom: '16px', backgroundColor: 'white' }}
      />

      <TextField
        label="Datum treninga"
        type="date"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        style={{ marginBottom: '16px', backgroundColor: 'white' }}
      />

      <TextField
        label="Beleske"
        variant="outlined"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        required
        style={{ marginBottom: '16px', backgroundColor: 'white' }}
      />

      <TextField
        label="Ocena (1-5)"
        type="number"
        variant="outlined"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        required
        style={{ marginBottom: '16px', backgroundColor: 'white' }}
      />
      {ratingError && <Alert severity="error">{ratingError}</Alert>}

      <Button disabled={loading} sx={{marginTop: "20px"}} type="submit" variant="contained" color="primary">
        Dodaj Trening
      </Button>
    </form>
  );
};

export default WorkoutForm;
