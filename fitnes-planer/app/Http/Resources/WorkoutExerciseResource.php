<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class WorkoutExerciseResource extends JsonResource
{
    public static $wrap = 'workout_exercise';

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $exercise = $this->resource->exercise;

        return [
            'workout_id' => $this->resource->workout_id,
            'exercise' => [
                'name' => $exercise->name,
                'description' => $exercise->description,
            ],
            'weight' => $this->resource->weight,
            'sets' => $this->resource->sets,
            'reps' => $this->resource->reps,
        ];
    }
}
