<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ExternalApiController extends Controller
{
        /**
     * Call external API to get a workout suggestion
     */
    public function getWorkoutSuggestion() {
        $api_url = 'https://api.api-ninjas.com/v1/exercises';   

        $query_params = [
            'name' => request()->input('name'),
            'type' => request()->input('type'),
            'muscle' => request()->input('muscle'),
            'difficulty' => request()->input('difficulty'),
        ];

        $api_url .= '?' . http_build_query($query_params);

        try {
            $response = Http::withHeaders([
                'X-Api-Key' => 'eewqD/B4CCuGAyMC+us3cA==IoKz3b1aD2OVHRjF'
            ])->get($api_url);

            if ($response->successful()) {
                $api_data = $response->json();
                return response()->json($api_data);
            } else {
                return response()->json(['message' => 'Failed to fetch data from external API.'], 500);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'An error occurred while processing the request'], 500);
        }
    }
}
