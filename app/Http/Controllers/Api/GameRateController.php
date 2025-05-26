<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GameRate;

class GameRateController extends Controller
{
    public function gameRate(Request $request)
    {
    	$gameRate = GameRate::first(); 

    	$response['status'] = true;
    	$response['game_rate'] = $gameRate;

    	return response()->json($response);

       
    }
}
