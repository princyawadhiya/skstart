<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Laravel\Passport\HasApiTokens;
use DB;

class LogoutController extends Controller
{
    /*logout*/

    public function logout()
    {
    	$revoked = DB::table('oauth_access_tokens')->where('user_id', '=', Auth::guard('api')->id())->update(['revoked' => 1]);

    	DB::table('oauth_access_tokens')->where('user_id', '=', Auth::guard('api')->id())->delete();

    	$response['status'] = true;
    	$response['message'] = "Logout successfully.";

      

      return response()->json($response);
    }
}
