<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workout extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'title',
        'notes',
        'rating',
    ];

    public function exercises() {
        return $this->belongsToMany(Exercise::class, 'workout_exercise', 'workout_id', 'exercise_id')->withPivot(['weight', 'sets', 'reps']);
    }
}
