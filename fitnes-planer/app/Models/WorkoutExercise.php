<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkoutExercise extends Model
{
    use HasFactory;

    protected $primaryKey = ['workout_id', 'exercise_id'];
    protected $fillable = [
        'workout_id',
        'exercise_id',
        'weight',
        'sets',
        'reps',
    ];
    public $incrementing = false;

    public function workout() {
        return $this->belongsTo(Workout::class, 'workout_id');
    }

    public function exercise() {
        return $this->belongsTo(Exercise::class, 'exercise_id');
    }
}