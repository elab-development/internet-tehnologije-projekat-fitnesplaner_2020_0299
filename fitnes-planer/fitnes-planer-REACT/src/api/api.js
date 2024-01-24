const token = localStorage.getItem("token");

export async function fetchWorkouts() {
    const response = await fetch('http://localhost:8000/api/workouts', {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        },
    });

    const data = await response.json();
    return data;
};

export async function fetchWorkoutExercises(id) {
    const response = await fetch(`http://localhost:8000/api/workouts/${id}/exercises`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        },
    });

    const data = await response.json();
    return data;
};

export async function submitWorkout(newWorkout) {
    const response = await fetch(`http://localhost:8000/api/workouts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({date: newWorkout.date, title: newWorkout.title, notes: newWorkout.notes, rating: newWorkout.rating})
    });

    const data = await response.json();
    return data;
};

export async function submitWorkoutExercise(id, workoutExercise) {
    const response = await fetch(`http://localhost:8000/api/workouts/${id}/exercises`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token},`
        },
        body: JSON.stringify({exercise_id: workoutExercise.exercise, weight: parseInt(workoutExercise.weight), sets: parseInt(workoutExercise.sets), reps: parseInt(workoutExercise.reps)})
    });

    const data = await response.json();
    return data;
};

export async function deleteWorkoutExercise(id, workoutExercise) {
    const response = await fetch(`http://localhost:8000/api/workouts/${id}/exercises/${workoutExercise}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        },
    });

    const data = await response.json();
    return data;
};

export async function deleteWorkout(workoutId) {
    const response = await fetch(`http://localhost:8000/api/workouts/${workoutId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        },
    });

    const data = await response.json();
    return data;
};

export async function fetchExercises() {
    const response = await fetch('http://localhost:8000/api/exercises', {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        },
    });

    const data = await response.json();
    return data;
};

export async function submitExercise(newExercise) {
    const response = await fetch(`http://localhost:8000/api/exercises`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({name: newExercise.name, description: newExercise.description})
    });

    const data = await response.json();
    return data;
};

export async function deleteExercise(id) {
    const response = await fetch(`http://localhost:8000/api/exercises/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    const data = await response.json();
    return data;
};

export async function login(email, password) {
    const response = await fetch(`http://localhost:8000/api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password})
    });

    const data = await response.json();
    if (data['access_token']) {
        localStorage.setItem("token", data['access_token']);
        localStorage.setItem("role", data['role']);
    }
    return data;
};

export async function register(name, email, password) {
    const response = await fetch('http://localhost:8000/api/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, password})
    });

    const data = await response.json();
    return data;
};

export async function logout() {
    const response = await fetch('http://localhost:8000/api/logout', {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        },
    });

    const data = await response.json();
    localStorage.removeItem("token");
    return data;
};

export async function getWorkoutSuggestion(exercise='', type='', muscle='', equipment='', difficulty='') {
    const link = `http://localhost:8000/api/getWorkoutSuggestion?name=${exercise}&type=${type}&muscle=${muscle}&equipment=${equipment}&difficulty=${difficulty}`;
    const response = await fetch(link, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    
    const data = await response.json();
    return data;
};