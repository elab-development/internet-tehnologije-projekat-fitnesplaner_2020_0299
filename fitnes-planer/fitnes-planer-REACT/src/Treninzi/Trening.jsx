import { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
import { fetchWorkoutExercises } from '../api/api.js';
import "./Treninzi.css";
import TreningForma from "./TreningForma.jsx";
import { submitWorkoutExercise } from '../api/api.js';

function Trening() {
    const { id } = useParams();
    const [workoutExercises, setWorkoutExercises] = useState([]);

    useEffect(() => {
        fetchWorkoutExercises(id.toString()).then((data) => setWorkoutExercises(data.workout_exercises));
    }, []);

    const columns = [
        { field: "exercise", headerName: "Vezba", width: 200 },
        { field: "weight", headerName: "Tezina", width: 120 },
        { field: "sets", headerName: "Serije", width: 120 },
        { field: "reps", headerName: "Ponavljanja", width: 120 },
    ];

    const loadRows = () => {
        const rows = [];

        workoutExercises?.forEach((workoutExercise) => {
            rows.push({
                id: workoutExercise.id,
                exercise: workoutExercise.exercise.name,
                weight: workoutExercise.weight,
                sets: workoutExercise.sets,
                reps: workoutExercise.reps
            });
        });

        return rows;
    };

    const handleAddWorkoutExercise = (newWorkoutExercise) => {
        submitWorkoutExercise(id.toString(), newWorkoutExercise).then(() => window.location.reload());
    };

    return (
        <div className='trening-grid'>
            <DataGrid
                rows={loadRows()}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{
                    toolbar: GridToolbar
                }}
                pageSizeOptions={[5, 10]}
                disableRowSelectionOnClick
                sx={{ backgroundColor: "white" }}
            />

            <TreningForma onAddWorkoutExercise={handleAddWorkoutExercise} />
        </div>
    );
};

export default Trening;