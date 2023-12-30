<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Workout;
use App\Models\Exercise;
use App\Models\WorkoutExercise;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Workout::query()->delete();
        User::query()->delete();
        Exercise::query()->delete();

        User::factory(10)->create();

        $workout1 = Workout::create([
            'date'=>date('2023-12-29'),
            'title'=>"Chest day",
            'notes'=>"Nema notes",
            'rating'=>5
        ]);
        $workout2 = Workout::create([
            'date'=>date('2023-12-31'),
            'title'=>"Arm day",
            'notes'=>"Biceps and triceps",
            'rating'=>3
        ]);

        $exercise1 = Exercise::create([
            'name'=>"Bench press",
            'description'=>"Compound exercise for chest"
        ]);
        $exercise2 = Exercise::create([
            'name'=>"Incline db press",
            'description'=>"Compound exercise for upper chest"
        ]);

        WorkoutExercise::create([
            'workout_id'=>$workout1->workout_id,
            'exercise_id'=>$exercise1->exercise_id,
            'weight'=>120,
            'sets'=>3,
            'reps'=>5
        ]);
        WorkoutExercise::create([
            'workout_id'=>$workout1->workout_id,
            'exercise_id'=>$exercise2->exercise_id,
            'weight'=>60,
            'sets'=>5,
            'reps'=>10
        ]);
    }


}
