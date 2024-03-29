<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WorkoutController;
use App\Http\Controllers\ExerciseController;
use App\Http\Controllers\WorkoutExerciseController;
use App\Http\Controllers\ExternalApiController;
use App\Http\Controllers\API\AuthController;

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

Route::get('/exercises/export', [ExerciseController::class, 'export']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::resource('workouts', WorkoutController::class)->only(['update', 'store', 'destroy']);
    Route::resource('exercises', ExerciseController::class)->only(['update', 'store', 'destroy']);
    Route::resource('workouts.exercises', WorkoutExerciseController::class)->only(['update', 'store', 'destroy']);
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::get('/getWorkoutSuggestion', [ExternalApiController::class, 'getWorkoutSuggestion']);
Route::resource('workouts', WorkoutController::class)->only(['index', 'show']);
Route::resource('exercises', ExerciseController::class)->only(['index', 'show']);
Route::resource('workouts.exercises', WorkoutExerciseController::class)->only(['index', 'show']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);