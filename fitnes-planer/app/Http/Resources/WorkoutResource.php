<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ExerciseResource;

class WorkoutResource extends JsonResource
{
    public static $wrap = 'workout';

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'workout_id' => $this->resource->workout_id,
            'date' => $this->resource->date,
            'title' => $this->resource->title,
            'notes' => $this->resource->notes,
            'rating' => $this->resource->rating,
            'exercise' => ExerciseResource::collection(
                $this->resource->exercises()->whereHas('workouts')->get()
            ),
        ];
    }
}
