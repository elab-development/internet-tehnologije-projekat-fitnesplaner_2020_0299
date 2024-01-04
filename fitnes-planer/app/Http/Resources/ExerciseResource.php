<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ExerciseResource extends JsonResource
{
    public static $wrap = 'exercise';

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $response = [
            'exercise_id' => $this->resource->exercise_id,
            'name' => $this->resource->name,
            'description' => $this->resource->description,
        ];

        if ($this->resource->relationLoaded('pivot')) {
            $response['exercise_details'] = [
                'weight' => $this->resource->pivot->weight,
                'sets' => $this->resource->pivot->sets,
                'reps' => $this->resource->pivot->reps,
            ];
        }
        
        return $response;
    }
}
