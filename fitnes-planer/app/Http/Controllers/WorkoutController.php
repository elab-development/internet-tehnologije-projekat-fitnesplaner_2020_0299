<?php

namespace App\Http\Controllers;

use App\Models\Workout;
use App\Http\Controllers\Controller;
use App\Http\Resources\WorkoutResource;
use App\Http\Resources\WorkoutCollection;
use Illuminate\Http\Request;

class WorkoutController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $workouts = Workout::all();

        return new WorkoutCollection($workouts);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if ($request->isMethod('post')) {
            try {
                $validatedData = $request->validate([
                    'date' => 'required',
                    'title' => 'required|string|max:255',
                    'notes' => 'string',
                    'rating' => 'numeric|between:1, 5'
                ]);
            } catch (\Illuminate\Validation\ValidationException $e) {
                return response()->json(['error' => $e->getMessage()], 422);
            }

            $workout = Workout::create($validatedData);

            return response()->json(['message' => 'Workout created successfully', 'data' => $workout], 201);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Workout $workout)
    {
        $workout->load('exercises');
        
        return new WorkoutResource($workout);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Workout $workout)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Workout $workout)
    {
        if ($request->isMethod('put') || $request->isMethod('patch')) {
            try {
                $validatedData = $request->validate([
                    'date' => 'date_format:Y-m-d',
                    'title' => 'string|max:255',
                    'notes' => 'string',
                    'rating' => 'numeric|between:1,5'
                ]);
            } catch (\Illuminate\Validation\ValidationException $e) {
                return response()->json(['error' => $e->getMessage()], 422);
            }

            $workout->update($validatedData);

            return response()->json(['message' => 'Workout updated successfully', 'data' => $workout], 201);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Workout $workout)
    {
        $workout->delete();
        return response()->json(['message' => 'Workout deleted successfully', 'data' => $workout], 201);
    }
}
