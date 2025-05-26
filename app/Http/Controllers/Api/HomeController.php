<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class HomeController extends Controller
{
    public function __construct()
    {
    	$this->middleware(['auth:api']);
    }

    public function index()
    {
    	return Auth::user();
    }
}
