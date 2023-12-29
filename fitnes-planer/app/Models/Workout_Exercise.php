<?php

namespace App\Models;

use Thiagoprz\EloquentCompositeKey\HasCompositePrimaryKey;
use Illuminate\Database\Eloquent\Model;

class Workout_Exercise extends Model
{
    use HasCompositePrimaryKey;
    protected $primaryKey = ['workout_id', 'exercise_id'];
    protected $fillable = [
        'workout_id',
        'exercise_id',
        'weight',
        'sets',
        'reps',
    ];
    public $incrementing = false;
}
