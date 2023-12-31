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
            $date = $request->input('date');
            $title = $request->input('title');
            $notes = $request->input('notes');
            $rating = $request->input('rating');

            $workout = new Workout();
            $workout->date = date($date);
            $workout->title = $title;
            $workout->notes = $notes;
            $workout->rating = $rating;

            $workout->save();

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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Workout $workout)
    {
        //
    }
}
