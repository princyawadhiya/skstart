<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GameRate;

class GameRateController extends Controller
{
    public function gameRateGet()
    {
    	$gameRate = GameRate::first();
      return view('admin.game-rates',compact('gameRate'));
    }

    public function gameRatePost(Request $request)
    {

      $this->validate($request,[
      	'game_rate' => 'required']);


      GameRate::first()->update([
      	'game_rate' => $request->game_rate,
      ]);

      return redirect()->back()->with('success','Updated successfully.');


    }
}
