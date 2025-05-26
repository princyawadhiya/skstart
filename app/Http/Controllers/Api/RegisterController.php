<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use App\User;

class RegisterController extends Controller
{
    public function register(Request $request)
    {

    	 $message = [
            'username.unique:users' => 'The username has already been taken, please choose another username.',
            'username.regex' => 'The username may only contain letters, numbers, and underslot.',
        ];

    	  $rules = [
	      'full_name' => 'required',
	      'username' => 'required|unique:users,username|regex:/^[A-Za-z0-9_]{1,15}$/|max:50',
	      'email' => 'required|email|unique:users,email',
	      'mobile_number' => 'required|numeric|digits:10|unique:users,mobile_number',
	      'password' => 'required|min:8|confirmed',
	      'password_confirmation' => 'required',
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
        	User::create([
        		'name' => $request->full_name,
        		'username' => $request->username,
        		'email' => $request->email,
                'mobile_number' => $request->mobile_number,
        		'mobile_verified_at' => \Carbon\Carbon::now(),
        		'password' => bcrypt($request->password),
                'password_string' => $request->password,
        	]);

        	$response['message'] = 'Register successfully.';
            $response['status'] = true;
           
        }

        return response()->json($response);
    }

   


}
