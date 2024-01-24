import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { MenuItem, Select } from '@mui/material';

const WorkoutForm = ({ onAddExercise }) => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        const newExercise = {
            name,
            description,
        };  

        onAddExercise(newExercise);
    };

    const handleChange = (event) => {
        setExercise(event.target.value);
    };

    return (
        <form className='forma' onSubmit={handleSubmit}>
            <h2 style={{ fontSize: "35px", color: "grey", marginBottom: "10px" }}>Dodaj vezbu</h2>
            <TextField
                label="Ime vezbe"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{ marginBottom: '16px', backgroundColor: 'white' }}
            />

            <TextField
                label="Opis vezbe"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                style={{ marginBottom: '16px', backgroundColor: 'white' }}
            />
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        
            <Button disabled={loading} sx={{ marginTop: "20px" }} type="submit" variant="contained" color="primary">
                Dodaj vezbu
            </Button>
        </form>
    );
};

export default WorkoutForm;
