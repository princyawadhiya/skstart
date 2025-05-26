<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\PrivacyPolicy;

class PrivacyPoliciesController extends Controller
{
      /*privacyPolicies*/

      public function privacyPolicies()
    {
    	
      $privacyPolicy = PrivacyPolicy::first();

       $response['status'] = true;
       $response['privacyPolicy'] =  $privacyPolicy;

         return response()->json($response);
    }
}
