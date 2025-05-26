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
use App\Model\BiddingHistory;
use App\Model\HowToPlay;
use App\Model\StarlineGameRate;
use App\Model\Mobile;
use Ixudra\Curl\Facades\Curl;

class StarLineController extends Controller
{
    public function stargameplay(Request $request, $gameId)
    {
    	
     $manageSatta = ManageSatta::where('id',$gameId)->where([
      ['open_action','y'],
      ['both_action','y']])->count();


     if($manageSatta > 0)
     {
       $games =  StarlineGameRate::isActive()->select('id','name','game_rate_limit')->get();

     $response['status'] = true;
     $response['game_type'] = 'open';
     $response['manage_satta_id']=$gameId;
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

    public function stargamebidding(Request $request)
    {
   
       $rules = [
	      'user_id' => 'required',
	      'game_id' => 'required',
	      'manage_satta_id' => 'required',
	      'digit' => 'required',
	      'point' => 'required',	     
	      'type' => 'required',
	  ];

	
        $validation = Validator::make($request->all(), $rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {
             $manageSatta = ManageSatta::where([
                ['id',$request->manage_satta_id],
                ['status' ,'y']]);

            if($request->type == 'open')
            {
                $manageSatta->where('open_action','y');

            }
            elseif($request->type == 'close')
            {
              $manageSatta->where('close_action','y');
            }


            if($manageSatta->count() > 0)
            {
            $response['status'] = true;
            $digits = explode(",",$request->digit);
            $points = explode(",",$request->point);
            
            $sum = 0;
            foreach ($points as $key => $value) {
                 $sum+= $value ;
            }

            if(Auth::guard('api')->user()->wallet > 0 && Auth::guard('api')->user()->wallet >= $sum  )
            {

               $biddingHistoryCount = BiddingHistory::where('user_id',Auth::guard('api')->id())->where('manage_satta_id',$request->manage_satta_id)->where('type',$request->type)->where('game_id',$request->game_id)->where('digit',$request->digit)->where('run_status','n')->where('game_type','3')->whereDate('create_time',\Carbon\Carbon::today())->count();

               if($biddingHistoryCount == 0)
               {
                 foreach ($digits as $key => $value) {



                $manageSatta = ManageSatta::where('id',$request->manage_satta_id)->first();

                $biddingHistoryId = BiddingHistory::create([
                    'user_id' => $request->user_id,
                    'game_id' => $request->game_id,
                    'manage_satta_id' => $request->manage_satta_id,
                    'digit' => $value,
                    'amount' => $points[$key],
                    'type' => $request->type,
                    'game_type'=>'3',
                    'time' => strtotime("now"),
                     'create_time' => \Carbon\Carbon::now(),

                    'message' => 'Played '.$manageSatta->title.'.'.'Time:'.date('h:i A', strtotime($manageSatta->open_end_time)). ' Digit '.$value.'.',


                 ]);

                $userWallet = User::where('id',Auth::guard('api')->id())->first()->wallet - $points[$key];

                User::where('id',Auth::guard('api')->id())->update([
                    'wallet' => $userWallet ]);

                AccountStatement::create([
                    'user_id' => Auth::guard('api')->id(),
                    'amount' => $points[$key],
                    'balance' => $userWallet,
                    'message' => 'Played '.$manageSatta->title.'.'.'Time'.date('h:i A', strtotime($manageSatta->open_end_time)). ' Digit '.$value.'.', 
                    'time' => strtotime('now'),
                   'create_time' => \Carbon\Carbon::now(),

                  

                ]);
                    
                }
                $response['check_wallet'] = true;
                $response['message'] = "Bidding successfully.";

               }
               else
               {
         
                $response['check_wallet'] = true;
                $response['message'] = 'Digit '. $request->digit. " is already in bidding.";

               }

               

            }
            else
            {
                $response['check_wallet'] = false;
                $response['message'] = "Your wallet has not sufficient balance.";
            }


            }
            else
            {
                  $response['status'] = false;
                  $response['message'] = "Bidding Closed.";

            }

        }

        return response()->json($response);
    }

  public function gameRate(Request $request)
    {
    	$gameRate = StarlineGameRate::get(); 

    	$response['status'] = true;
    	$response['game_rate'] = $gameRate;

    	return response()->json($response);

       
    }
  public function stargameresult(Request $request)
  {
     $response['results'] = ManageSatta::where('status','y')->where('game_type','3')->select('title','open_pana','open_aakda','open_end_time')->get();

         return response()->json($response); 
  }
}
