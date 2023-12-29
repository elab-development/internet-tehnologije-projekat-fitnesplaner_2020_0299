<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Workout;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Workout::query()->delete();
        User::query()->delete();

        User::factory(10)->create();

        Workout::create([
            'date'=>date('2023-12-29'),
            'title'=>"Chest day",
            'notes'=>"Nema notes",
            'rating'=>5
        ]);
        Workout::create([
            'date'=>date('2023-12-31'),
            'title'=>"Arm day",
            'notes'=>"Biceps and triceps",
            'rating'=>3
        ]);
    }
}
