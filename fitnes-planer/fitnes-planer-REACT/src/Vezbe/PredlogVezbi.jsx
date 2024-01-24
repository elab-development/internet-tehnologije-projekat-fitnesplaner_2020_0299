import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Vezbe.css";
import { getWorkoutSuggestion } from "../api/api";

function PredlogVezbi() {
    const [exercise, setExercise] = useState();
    const [type, setType] = useState();
    const [muscle, setMuscle] = useState();
    const [equipment, setEquipment] = useState();
    const [difficulty, setDifficulty] = useState();
    const [rows, setRows] = useState([]);

    const columns = [
        { field: "exercise", headerName: "Ime vezbe", width: 250 },
        { field: "type", headerName: "Tip vezbe", width: 120 },
        { field: "muscle", headerName: "Ciljani misic", width: 120 },
        { field: "difficulty", headerName: "Tezina izvodjenja", width: 120 },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempRows = [];

        getWorkoutSuggestion(exercise, type, muscle, equipment, difficulty).then((data) => {
            data.forEach(suggestion => {
                tempRows.push({
                    id: suggestion.name,
                    exercise: suggestion.name,
                    type: suggestion.type,
                    muscle: suggestion.muscle,
                    difficulty: suggestion.difficulty
                });
            });

            setRows(tempRows);
        });
    };

    return (
        <div className="predlog-container">
            <DataGrid
                rows={rows}
                columns={columns}
                disableRowSelectionOnClick
                sx={{ backgroundColor: "white" }}
            />

            <div className="predlog-forma">
                <h2 style={{ fontSize: "35px", color: "grey" }}>Dobij predlog vezbi</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-element">
                        <label htmlFor="exercise" style={{ marginRight: "10px" }}>Ime vezbe:</label>
                        <input
                            style={{ height: "25px", width: "250px" }}
                            type="text"
                            id="exercise"
                            value={exercise}
                            onChange={(e) => setExercise(e.target.value)}
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="type" style={{ marginRight: "10px" }}>Tip vezbe</label>
                        <input
                            style={{ height: "25px", width: "250px", marginRight: "30px" }}
                            id="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="type" style={{ marginRight: "10px" }}>Ciljani misic</label>
                        <input
                            style={{ height: "25px", width: "250px", marginRight: "30px" }}
                            id="muscle"
                            value={muscle}
                            onChange={(e) => setMuscle(e.target.value)}
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="type" style={{ marginRight: "10px" }}>Potrebna oprema</label>
                        <input
                            style={{ height: "25px", width: "250px", marginRight: "30px" }}
                            id="equipment"
                            value={equipment}
                            onChange={(e) => setEquipment(e.target.value)}
                        />
                    </div>
                    <div className="form-element">
                        <label htmlFor="type" style={{ marginRight: "10px" }}>Tezina izvodjenja</label>
                        <input
                            style={{ height: "25px", width: "250px", marginRight: "30px" }}
                            id="difficulty"
                            value={difficulty}
                            onChange={(e) => setDifficulty(e.target.value)}
                        />
                    </div>
                    <button className="submit" type="submit" style={{ backgroundColor: "green" }}>Posalji</button>
                </form>
            </div>
        </div>
    );
};

export default PredlogVezbi;