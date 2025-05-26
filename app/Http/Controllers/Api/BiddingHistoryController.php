<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\Model\BiddingHistory;
use App\Model\AccountStatement;
use App\Model\ManageSatta;
use App\Model\Game;
use Illuminate\Support\Facades\Validator;
use App\User;

class BiddingHistoryController extends Controller
{
    public function biddingHistory()
    {
        	
             $response['status'] = true;
        	$response['bidding_history'] =  BiddingHistory::where('user_id',Auth::guard('api')->id())->orderBy('id','DESC')->with('user','game')->get();



        	return response()->json($response);


    }

    /*bidding-History-add*/

    public function biddingHistoryAdd(Request $request)
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

        //dd($digits,$points,$sum,Auth::guard('api')->user()->wallet);
        

           

            if(Auth::guard('api')->user()->wallet > 0 && Auth::guard('api')->user()->wallet >= $sum  )
            {

               $biddingHistoryCount = BiddingHistory::where('user_id',Auth::guard('api')->id())->where('manage_satta_id',$request->manage_satta_id)->where('type',$request->type)->where('game_id',$request->game_id)->where('digit',$request->digit)->where('run_status','n')->whereDate('create_time',\Carbon\Carbon::today())->count();

               if($biddingHistoryCount == 0)
               {
                 foreach ($digits as $key => $value) {

                $manageSatta = ManageSatta::where('id',$request->manage_satta_id)->first();
                $game = Game::where('id',$request->game_id)->first();

                $biddingHistoryId = BiddingHistory::create([
                    'user_id' => $request->user_id,
                    'game_id' => $request->game_id,
                    'manage_satta_id' => $request->manage_satta_id,
                    'digit' => $value,
                    'amount' => $points[$key],
                    'type' => $request->type,
                    'game_type'=>'1',
                    'time' => strtotime("now"),
                     'create_time' => \Carbon\Carbon::now(),
                    'message' => 'Played '.$manageSatta->title. " ".strtoupper($request->type) .' Digit '.$value.'.', 
                 ]);

                /*$biddingHistory = BiddingHistory::where('id',$biddingHistoryId->id)->with('user','game','manageSatta')->first();*/

                $userWallet = User::where('id',Auth::guard('api')->id())->first()->wallet - $points[$key];

                User::where('id',Auth::guard('api')->id())->update([
                    'wallet' => $userWallet ]);

                AccountStatement::create([
                    'user_id' => Auth::guard('api')->id(),
                    'amount' => $points[$key],
                    'balance' => $userWallet,
                    'message' => 'Played '.$manageSatta->title. " ".strtoupper($request->type) .' Digit '.$value.'.', 
                    'time' => strtotime('now'),
                   'create_time' => \Carbon\Carbon::now(),

                ]);
                    
                }

                

                
                //$response['bidding_history'] = $biddingHistory;
                $response['check_wallet'] = true;
                $response['message'] = "Bidding successfully.";

               }
               else
               {
                //$response['bidding_history'] = $biddingHistory;
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
}
