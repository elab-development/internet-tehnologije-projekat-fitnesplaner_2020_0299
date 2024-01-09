<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\WorkoutExercise;
use App\Http\Resources\WorkoutExerciseResource;
use App\Http\Resources\WorkoutExerciseCollection;

class WorkoutExerciseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($workoutId)
    {
        $workoutExercises = WorkoutExercise::where('workout_id', $workoutId)->get();

        return new WorkoutExerciseCollection($workoutExercises);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, string $workout_id)
    {
        if ($request->isMethod('post')) {
            $request->merge(['workout_id' => $workout_id]);

            try {
                $validatedData = $request->validate([
                    'workout_id' => 'required|exists:workouts,workout_id',
                    'exercise_id' => 'required|exists:exercises,exercise_id',
                    'weight' => 'required|numeric|gt:0',
                    'sets' => 'required|numeric|gt:0',
                    'reps' => 'required|numeric|gt:0',
                ]);
            } catch (\Illuminate\Validation\ValidationException $e) {
                return response()->json(['error' => $e->getMessage()], 422);
            }

            $workout_exercise = WorkoutExercise::create($validatedData);

            return response()->json(['message' => 'Workout exercise created successfully', 'data' => $workout_exercise], 201);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $workout_id, string $workout_exercise_id)
    {
        $workout_exercise = WorkoutExercise::find($workout_exercise_id);

        if (!$workout_exercise) {
            return response()->json(['error' => 'Workout exercise not found!'], 404);
        }

        return new WorkoutExerciseResource($workout_exercise);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $workout_id, string $workout_exercise_id)
    {
        if ($request->isMethod('put') || $request->isMethod('patch')) {
            $workout_exercise = WorkoutExercise::find($workout_exercise_id);
            if (!$workout_exercise) {
                return response()->json(['error' => 'Workout exercise not found!'], 404);
            }

            try {
                $validatedData = $request->validate([
                    'weight' => 'numeric|gt:0',
                    'sets' => 'numeric|gt:0',
                    'reps' => 'numeric|gt:0',
                ]);
            } catch (\Illuminate\Validation\ValidationException $e) {
                return response()->json(['error' => $e->getMessage()], 422);
            }

            $workout_exercise->update($validatedData);

            return response()->json(['message' => 'Workout exercise updated successfully!', 'data' => $workout_exercise], 201);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $workout_id, string $workout_exercise_id)
    {
        $workout_exercise = WorkoutExercise::find($workout_exercise_id);

        if (!$workout_exercise) {
            return response()->json(['error' => 'Workout exercise not found!'], 404);
        }

        $workout_exercise->delete();
        return response()->json(['message' => 'Workout exercise deleted successfully', 'data' => $workout_exercise], 201);
    }
}
