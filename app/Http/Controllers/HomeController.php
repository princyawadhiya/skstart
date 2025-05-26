<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use APP\Model\ManageSatta;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        /*dd( date('h:i A', strtotime(\App\Model\ManageSatta::first()->close_end_time)));*/

        return view('admin.home');
    }

    
}
