<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exercise extends Model
{
    use HasFactory;

    protected $primaryKey = 'exercise_id';

    protected $fillable = [
        'name',
        'description',
    ];

    public function workouts() {
        return $this->belongsToMany(Workout::class, 'workout_exercises', 'exercise_id', 'workout_id')->withPivot(['weight', 'sets', 'reps']);
    }
}
