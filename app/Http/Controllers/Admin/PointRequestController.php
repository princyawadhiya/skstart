<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\PointRequest;

class PointRequestController extends Controller
{
    public function index()
    {
    	$pointRequests = PointRequest::orderDesc()->get();
    	return view('admin.points-request',compact('pointRequests'));
    }
}
