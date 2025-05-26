<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\PrivacyPolicy;

class PrivacyPoliciesController extends Controller
{
    public function privacyPoliciesGet()
    {

    	$privacyPolicies = PrivacyPolicy::first();


    	return view('auth.privacy-policy',compact('privacyPolicies'));
    }
}
