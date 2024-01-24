import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { MenuItem, Select } from '@mui/material';
import { fetchExercises } from '../api/api';

const WorkoutForm = ({ onAddWorkoutExercise }) => {
    const [exercises, setExercises] = useState([]);
    const [exercise, setExercise] = useState('');
    const [weight, setWeight] = useState();
    const [sets, setSets] = useState();
    const [reps, setReps] = useState();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetchExercises().then((data) => setExercises(data.exercises));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (exercise == '') {
            setErrorMessage("Morate odabrati vezbu!");
            return;
        }
        if (parseInt(weight) < 1) {
            setErrorMessage("Tezina mora da bude pozitivan broj!");
            return;
        }
        else if (parseInt(sets) < 1) {
            setErrorMessage("Serije moraju da budu pozitivan broj!");
            return;
        }
        else if (parseInt(reps) < 1) {
            setErrorMessage("Ponavljanja moraju da budu pozitivan broj!");
            return;
        }

        setLoading(true);

        // Create a workout object
        const newWorkoutExercise = {
            exercise,
            weight,
            sets,
            reps,
        };  

        // Pass the new workout to the parent component
        onAddWorkoutExercise(newWorkoutExercise);
    };

    const handleChange = (event) => {
        setExercise(event.target.value);
    };

    return (
        <form className='forma' onSubmit={handleSubmit}>
            <Select
                label="Vezba"
                labelId="exercise"
                id="exercise"
                value={exercise}
                onChange={handleChange}
                style={{ marginBottom: '16px', backgroundColor: "white", width: "230px"}}
            >
                {exercises?.map((ex) => (
                    <MenuItem key={ex.exercise_id} value={ex.exercise_id}>{ex.name}</MenuItem>
                ))}
            </Select>

            <TextField
                label="Tezina"
                type="number"
                variant="outlined"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                style={{ marginBottom: '16px', backgroundColor: 'white' }}
            />

            <TextField
                label="Serije"
                type="number"
                variant="outlined"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                required
                style={{ marginBottom: '16px', backgroundColor: 'white' }}
            />

            <TextField
                label="Ponavljanja"
                type="number"
                variant="outlined"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                required
                style={{ marginBottom: '16px', backgroundColor: 'white' }}
            />
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        
            <Button disabled={loading} sx={{ marginTop: "20px" }} type="submit" variant="contained" color="primary">
                Dodaj vezbu u treningu
            </Button>
        </form>
    );
};

export default WorkoutForm;
