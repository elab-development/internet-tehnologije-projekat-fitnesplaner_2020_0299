<?php

namespace App\Http\Controllers;

use App\Models\Exercise;
use App\Http\Controllers\Controller;
use App\Http\Resources\ExerciseResource;
use App\Http\Resources\ExerciseCollection;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ExerciseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $exercises = Exercise::all();

        return new ExerciseCollection($exercises);
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
                    'name' => 'required|string|max:255',
                    'description' => 'required|string',
                ]);
            } catch (\Illuminate\Validation\ValidationException $e) {
                return response()->json(['error' => $e->getMessage()], 422);
            }

            $exercise = Exercise::create($validatedData);

            return response()->json(['message' => 'Exercise created successfully', 'data' => $exercise], 201);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Exercise $exercise)
    {
        return new ExerciseResource($exercise);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Exercise $exercise)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Exercise $exercise)
    {
        if ($request->isMethod('put') || $request->isMethod('patch')) {
            try {
                $validatedData = $request->validate([
                    'name' => 'string|max:255',
                    'description' => 'string',
                ]);
            } catch (\Illuminate\Validation\ValidationException $e) {
                return response()->json(['error' => $e->getMessage()], 422);
            }

            $exercise->update($validatedData);

            return response()->json(['message' => 'Exercise updated successfully!', 'data' => $exercise], 204);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Exercise $exercise)
    {
        $exercise->delete();

        return response()->json(['message' => 'Exercise deleted successfully', 'data' => $exercise], 204);
    }
}
