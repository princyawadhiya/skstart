<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use App\User;
use Auth;

class LoginController extends Controller
{
         public function username()
	    {
	       $login = request()->input('username');
	       $field = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
	       request()->merge([$field => $login]);
	       return $field;
	    }

	     public function login(Request $request)
    {

         $message = ['username.required' => 'Enter username either email.'];


    	  $rules = [
	      'username' => 'required',
	      'password' => 'required',
	     
	  ];

	
        $validation = Validator::make(Input::all(), $rules, $message);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
            $response['message'] = 'Fill all required field.';
            //$response['code'] = '200';
        }
        else
        {
        	
        	if(Auth::guard()->attempt(['username' => $request->username, 'password' => $request->password],true))
        	{

        		

        		$response['message'] = 'Login successfully.';
        		$response['status'] = true;
        		$response['data'] = Auth::user();
        	}
        	else
        	{
        		$response['message'] = 'Login id either password is wrong.';
        		$response['status'] = 'login_failed';

        	}
        }

        return response()->json($response);

    }

    
}
