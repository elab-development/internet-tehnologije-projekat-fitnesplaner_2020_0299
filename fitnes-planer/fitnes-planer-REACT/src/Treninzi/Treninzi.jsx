import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Treninzi.css';
import { fetchWorkouts, submitWorkout, deleteWorkout } from '../api/api';
import { Grid, Card, CardHeader, CardActionArea, CardActions } from '@mui/material';
import TreninziForma from './TreninziForma.jsx';

function Treninzi() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    fetchWorkouts().then((data) => { setWorkouts(data.workouts); console.log(data.workouts) });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddWorkout = (newWorkout) => {
    submitWorkout(newWorkout).then(() => window.location.reload());
  };

  const handleDelete = (workoutId) => {
    deleteWorkout(workoutId).then(() => window.location.reload());
  };

  return (
    <div className="treninzi">
      <h1> Treninzi </h1>
      <Grid container spacing={2} className='grid-container'>
        {workouts?.map(workout => (
          <Grid key={workout.workout_id} item xs={6} sm={4} md={3} className='grid-item' direction="column" alignItems="center" justifyContent="center">
            <Card key={workout.workout_id} variant="outlined" sx={{backgroundColor: "#a6d1e6"}}>
              <CardActionArea component={Link} to={workout.workout_id.toString()}>
                <CardHeader
                  title={workout.title}
                  subheader={workout.date}
                />
              </CardActionArea>
              <CardActions>
                  <button onClick={() => handleDelete(workout.workout_id)}>Delete Workout</button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <TreninziForma onAddWorkout={handleAddWorkout} />
    </div >
  );
}

export default Treninzi;
