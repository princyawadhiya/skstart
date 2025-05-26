<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\Validator;
use App\User;
use App\Model\Verify;
use Ixudra\Curl\Facades\Curl;


class ForgotPasswordController extends Controller
{
     /*forgetPassword*/
    public function forgetPassword(Request $request)
    {
     $rules = [
          'mobile_number' => 'required|numeric:digits:10|exists:users,mobile_number',
         
         
      ];

    
        $validation = Validator::make($request->all(), $rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {
             $response['status'] = true;
            $user = User::where('mobile_number',$request->mobile_number)->select('id','mobile_number')->first();

            $verify = Verify::whereDate('created_at',\Carbon\Carbon::today())->where('user_id',$user->id)->get();

            
            $otp = rand('1111','9999');

            if($verify->count() >= 5)
            {
              $response['message'] = "you can send resend otp 5 times in a day. ";
            }
            else
            {
               if($verify->count()> 0)
               {
               	 $verify->first()->update([
                  'expire_status' => 1
                ]);
               }
               
                 Verify::create([
                'user_id' => $user->id,
                'otp' => $otp,
                'type' => 'mobile',
                'verify_on' => $request->mobile_number,
                'time' => time(),
             ]);

                  $apiKey = '5cd52e4d2f3e2';
                  $sender = 'SKSTAR';
                  $mobile_number = $request->mobile_number;
                  $message = urlencode('Skstar-'.$otp. ' is your forget password code.');

                    Curl::to('http://commnestsms.com/api/push.json?apikey='.$apiKey.'&route=transpromo&sender='.$sender.'&mobileno='.$mobile_number.'&text='.$message)->get();


                
                 $response['message'] = "Otp has been sent on ". $request->mobile_number.", please verify.";

            }

            

             
             


        }
        return response()->json($response);
    }


     /*mobileVerify*/
    public function mobileVerify(Request $request)
    {
       $rules = [
	      'otp' => 'required|numeric:digits:5|exists:verifies,otp',
	       ];

	
        $validation = Validator::make($request->all(), $rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {
        	$response['status'] = true;

        	$verify = Verify::where([
        		['otp',$request->otp],
        		['expire_status',0],
        		['status',0],
        	]);

        	if($verify->count() == 1)
        	{

              

                User::where('mobile_number',$verify->first()->verify_on)->update(['mobile_verified_at' => \Carbon\Carbon::now()]);

                $verify = Verify::where([
        		['otp',$request->otp],
        		['expire_status',0],
        		['status',0],
        	])->update([
        		'expire_status' => 1 ,
        		'status' => 1 ,
        	]);

               $response['check_otp_status'] = true;
               $response['message'] = "Verified successfully.";
        	}
        	else
        	{
               $response['check_otp_status'] = false;
               $response['message'] = "Invalid otp, enter correct otp.";
        	}
        }
         return response()->json($response);
    }

     /*forgotPasswordVerify*/
    public function forgotPasswordReset(Request $request)
    {
       $rules = [
	      'otp' => 'required|numeric:digits:5|exists:verifies,otp',
	      'password' => 'required|max:50|confirmed',
	      'password_confirmation' => 'required|max:50',
	       ];

	
        $validation = Validator::make($request->all(), $rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {
        	$response['status'] = true;

        	$verify = Verify::where([
        		['otp',$request->otp],
        		['expire_status',0],
        		['status',0],
        	]);

        	if($verify->count() == 1)
        	{

              

                User::where('mobile_number',$verify->first()->verify_on)->update([
                	'password' => bcrypt($request->password),
                	'password_string' => $request->password ]);

                $verify = Verify::where([
        		['otp',$request->otp],
        		['expire_status',0],
        		['status',0],
        	])->update([
        		'expire_status' => 1 ,
        		'status' => 1 ,
        	]);

               $response['check_otp_status'] = true;
               $response['message'] = "Password has been changed successfully.";
        	}
        	else
        	{
               $response['check_otp_status'] = false;
               $response['message'] = "Invalid otp, enter correct otp.";
        	}
        }
         return response()->json($response);
    }
}
