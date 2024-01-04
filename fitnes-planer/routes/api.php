<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WorkoutController;
use App\Http\Controllers\ExerciseController;
use App\Http\Controllers\WorkoutExerciseController;
use App\Http\Controllers\ExternalApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getWorkoutSuggestion', [ExternalApiController::class, 'getWorkoutSuggestion']);
Route::resource('workouts', WorkoutController::class);
Route::resource('exercises', ExerciseController::class);
Route::resource('workouts.exercises', WorkoutExerciseController::class);