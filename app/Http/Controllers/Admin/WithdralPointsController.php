<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\WithdralPoint;

class WithdralPointsController extends Controller
{
    public function withdralPoints()
    {
    	$withdralPoints = WithdralPoint::orderDesc()->with('user')->get();


    	return view('admin.withdral-points',compact('withdralPoints'));
    }


}
