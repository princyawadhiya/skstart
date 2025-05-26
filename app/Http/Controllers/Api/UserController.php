<?php
namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\Validator;
use App\User;
use App\Notification;
use App\Model\Verify;
use App\Model\ManageSatta;
use App\Model\WithdralPoint;
use App\Model\NoticeBoard;
use App\Model\AccountStatement;
use App\Model\Setting;
use App\Model\HowToPlay;
use App\Model\Game;
use App\Model\Mobile;
use App\Model\StarlineGameRate;
use Ixudra\Curl\Facades\Curl;

class UserController extends Controller
{
    public function profileGet()
    {
      $data['user'] = Auth::guard('api')->user();
      return response()->json($data);
    }

    public function editPersonalDetail(Request $request)
    {
      $rules = [
        'name' => 'required|max:50',
        'email' => 'required|email|unique:users,email,'.Auth::guard('api')->user()->id,
         'address' => 'required|max:100',
    ];

  
        $validation = Validator::make($request->all(), $rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {
          

            User::where('id',Auth::guard('api')->user()->id)->update([
            'name' => $request->name,
            'email' => $request->email,
            'address' => $request->address,
            

           ]);

           
           $response['status'] = true;
           $response['user'] = User::where('id',Auth::guard('api')->user()->id)->select('id','name','email','address','mobile_number')->first();



        }
        return response()->json($response);


    }

    /*editbankingDetail*/

     public function editBankingDetail(Request $request)
    {
      $rules = [
        'bank_name' => 'required',
        'branch_name' => 'required',
        'account_number' => 'required',
        'ifsc' => 'required',
       
    ];

  
        $validation = Validator::make($request->all(), $rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {
          $user = User::where('id',Auth::guard('api')->user()->id)->select('id','bank_name','branch_name','account_number','ifsc');

          
       
            $user->update([
            'bank_name' => $request->bank_name,
            'branch_name' => $request->branch_name,
            'account_number' => $request->account_number,
            'ifsc' => $request->ifsc,

           ]);

            $response['status'] = true;
            $response['user'] = User::where('id',Auth::guard('api')->user()->id)->select('id','bank_name','branch_name','account_number','ifsc')->first();


        }
        return response()->json($response);


    }

    public function mobile(Request $request)
    {
     $rules = [
        'mobile_number' => 'required|numeric:digits:10|unique:users,mobile_number',
       
       
    ];

  
        $validation = Validator::make($request->all(), $rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {
           $response['status'] = true;
        
           $mobile =  Mobile::where('mobile_number',$request->mobile_number);

           $mobile->delete();

         
             $mobileInsert =  Mobile::create([
           
            'mobile_number' => $request->mobile_number,

           
             ]);
          /*$verify = Verify::whereDate('created_at',\Carbon\Carbon::today())->where('user_id',$mobileInsert->id)->orderDesc();*/
          
          $otp = rand('1111','9999');

       /*   if($verify->count() >= 5)
          {
              $response['message'] = "you can send resend otp 5 times in a day. ";
          }
          else
          {*/

            /*$verify->first()->update([
              'expire_status' => 1
            ]);
            */
             Verify::create([
            'user_id' => $mobileInsert->id,
            'otp' => $otp,
            'type' => 'mobile',
            'verify_on' => $request->mobile_number,
            'time' => time(),
           ]);
             $password = rand('11111','99999');

          

          


               $apiKey = '5cd52e4d2f3e2';
                  $sender = 'SKSTAR';
                  $mobile_number = $request->mobile_number;
                  $message = urlencode('Skstar-'.$otp. ' is your mobile number verify code.');

                    Curl::to('http://commnestsms.com/api/push.json?apikey='.$apiKey.'&route=transpromo&sender='.$sender.'&mobileno='.$mobile_number.'&text='.$message)->get();
            
               $response['message'] = "Otp has been sent on ". $request->mobile_number.", please verify.";

          /*}*/

          

           
           


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

              

                Mobile::where('mobile_number',$verify->first()->verify_on)->update(['status' => 'y']);

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

  

      /*accountHistory*/
    public function accountHistory(Request $request)
    {
       $response['account_history'] = Auth::guard('api')->user()->accountStatements;

       return response()->json($response);
    }

    public function results()
    {
        $response['results'] = ManageSatta::where('status','y')->select('title','open_pana','open_aakda','open_end_time','close_pana','close_aakda','close_end_time')->get();

         return response()->json($response);
    }

    public function withdralPoints(Request $request)
    {


        $rules = [
          'amount' => 'required|numeric',
           ];

    
        $validation = Validator::make($request->all(), $rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {
              $response['status'] = true;
              $user = User::where('id',Auth::guard('api')->id());
              $withdralPoint = WithdralPoint::where([
                ['user_id',Auth::guard('api')->id()],
                ['type','=','r']])->count();



              if($withdralPoint == 0)
              {

                if($user->first()->wallet > 0 && $user->first()->wallet >= $request->amount )
             {
         

                    WithdralPoint::create([
                        'user_id' => Auth::guard('api')->id(),
                        'amount' => $request->amount,
                        'type' => 'r',
                    ]);

               $response['amount_status'] = true;
               $response['message'] = "Amount withdrawal request sent successfully.";

             }
             else
             {
              $response['amount_status'] = false;
              $response['message'] = "Your wallet has not sufficient points.";

             }

            /*  $response['if_already_exists'] = true;
              $response['message'] = "Your amount withdrawal request has been successfully.";
*/

              }
              else if($withdralPoint != 0)
              {
                 $response['if_already_exists'] = false;
              $response['message'] = "You have already sent amount withdrawal request.";

              }
              

              
             
            
           
        }
        return response()->json($response);

    }

   
    /*openGame*/
     public function openGame(Request $request, $gameId){


     $manageSatta = ManageSatta::where('id',$gameId)->where([
      ['open_action','y'],
      ['both_action','y']])->count();

     if($manageSatta > 0)
     {
       $games =  Game::isActive()->select('id','name','game_rate_limit')->get();

     $response['status'] = true;
     $response['game_type'] = 'open';
     $response['games'] =  $games;


     }
     else
     {
      $response['status'] = false;
      $response['game_type'] = 'open';
      $response['games'] =  null;

     }

    
     return response()->json($response);
    }

       /*openGame*/
     public function closeGame(Request $request , $gameId){

       $manageSatta = ManageSatta::where('id',$gameId)->where([
       ['close_action','y'],
       ['both_action','y']])->count();

     if($manageSatta > 0)
     {

       $games =  Game::isActive()->select('id','name','game_rate_limit')->where('id','!=','2')->get();

       $response['status'] = true;
       $response['game_type'] = 'close';
       $response['games'] =  $games;

    }
     else
     {
        $response['status'] = false;
        $response['game_type'] = 'close';
        $response['games'] =  null;
     }


     return response()->json($response);
    }


    /*manageSatta*/

    public function manageSatta(Request $request)
    {

      $manageSatta = ManageSatta::isActive()->select('id','title','open_pana','open_aakda','open_end_time','close_pana','close_aakda','close_end_time','open_action','close_action','both_action')->where('game_type','1')->get();

       $dehlimanageSatta = ManageSatta::isActive()->select('id','title','open_pana','open_aakda','open_end_time','close_pana','close_aakda','close_end_time','open_action','close_action','both_action')->where('game_type','2')->get();

        $title= ManageSatta::isActive()->select('title')->where('id','35')->where('game_type','3')->first();

        $response['status'] = true;
        $response['manageSatta'] =  $manageSatta;
        $response['dehlimanageSatta'] =$dehlimanageSatta;
        $response['title']=$title;

     return response()->json($response);
    }

public function starlinegame(Request $request)
    {

      $manageSatta = ManageSatta::isActive()->select('id','title','open_pana','open_aakda','open_end_time','open_action')->where('game_type','3')->get();
      
      $gameRate = StarlineGameRate::get(); 


        $response['status'] = true;
        $response['manageSatta'] =  $manageSatta;
        $response['gameRate']=$gameRate;

     return response()->json($response);
    }


    public function eWallet()
    {
        $user = User::select('id','wallet')->where('id',Auth::guard('api')->id())->first();


        $response['status'] = true;
        $response['user'] =  $user;

         return response()->json($response);

    }

    public function withdrawalHistory(Request $request)
    {
     
     $withdrawalHistory = WithdralPoint::where('user_id',Auth::guard('api')->id())->orderBy('created_at','DESC')->get();


        $response['status'] = true;
        $response['withdrawalHistory'] =  $withdrawalHistory;

         return response()->json($response);

    }



    /*noticeBoard*/

    public function noticeBoard()
    {
      $noticeBoard = NoticeBoard::first();

       $response['status'] = true;
       $response['noticeBoard'] =  $noticeBoard;

         return response()->json($response);
    }

    /*setting*/

     public function setting()
    {
      $setting = Setting::first();

       $response['status'] = true;
       $response['setting'] =  $setting;

         return response()->json($response);
    }

    /*setting*/

     public function howToPlay()
    {
      $howToPlay = HowToPlay::first();

       $response['status'] = true;
       $response['howToPlay'] =  $howToPlay;

         return response()->json($response);
    }

  

    public function pushNotification(Request $request)
    {
       User::where('id',Auth::guard('api')->id())->update([
        'push_notification_token' => $request->push_notification_token ]);

       $response['ststus'] = true;
       $response['message'] = "success";

       return response()->json($response);


    }

 
 
       public function notification()
{
    $fcmUrl = 'https://fcm.googleapis.com/fcm/send';
    $token=Auth::guard('api')->user()->push_notification_token;


    

    $notification = [
        'title' => 'SKStar',
        'body' => 'this is test',
        'sound' => true
    ];
    
    $extraNotificationData = ["message" => $notification,"moredata" =>'dd'];

    $fcmNotification = [
        //'registration_ids' => $tokenList, //multple token array
        'to'        => $token, //single token
        'notification' => $notification,
        'data' => $extraNotificationData
    ];

    $headers = [
        'Authorization: key=AIzaSyDe4ajrK9VpZUZg-Kp62EixkFYRUidQdDM',
        'Content-Type: application/json'
    ];


    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,$fcmUrl);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fcmNotification));
    $result = curl_exec($ch);

    $results = json_decode($result);

    dd($results);
    curl_close($ch);


    
}


public function notificationStatus(Request $request)
{
  

  if(Auth::guard('api')->user()->notification_status == 'n')
  {
     $status = 'y';
  }
  elseif (Auth::guard('api')->user()->notification_status == 'y') {
     $status = 'n';
  }

  User::where('id',Auth::guard('api')->id())->update([
    'notification_status' => $status ]);

    $response['ststus'] = true;
       $response['message'] = "success";

       return response()->json($response);

}

public function notificationList()
{
   $notifications = Notification::where('user_id',Auth::guard('api')->id())->orderBy('created_at','DESC')->get();

      $response['ststus'] = true;
       $response['notification'] = $notifications;

       return response()->json($response);
}


    

}
