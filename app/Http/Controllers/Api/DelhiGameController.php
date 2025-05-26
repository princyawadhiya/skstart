<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\DelhiGameRate;
use App\Model\ManageSatta;
use Auth;
use App\Model\BiddingHistory;
use App\Model\AccountStatement;
use Illuminate\Support\Facades\Validator;
use App\User;

class DelhiGameController extends Controller
{
    public function singleOpen($gameId)
    {

    $manageSatta = ManageSatta::where('id',$gameId)->where([
      ['open_action','y'],
      ['both_action','y']])->count();

        if($manageSatta > 0)
     {

       $delhiGame = DelhiGameRate::where('id',1)->first();

       $response['status'] = true;
       $response['delhiGame'] = $delhiGame;
       $response['game_type'] = 'open';

     }
     else
     {
      $response['status'] = false;
      $response['game_type'] = 'open';
      $response['games'] =  null;

     }
        
        return response()->json($response);
    }
    
    public function singleClose($gameId)
    {

    $manageSatta = ManageSatta::where('id',$gameId)->where([
      ['close_action','y'],
      ['both_action','y']])->count();

        if($manageSatta > 0)
     {

        $delhiGame = DelhiGameRate::where('id',1)->first();

        $response['status'] = true;
        $response['delhiGame'] = $delhiGame;
        $response['game_type'] = 'close';

    }else{

      $response['status'] = false;
      $response['game_type'] = 'close';
      $response['games'] =  null; 

    }
        
        return response()->json($response);
    }
    
     public function jodi($gameId)
    {
     $manageSatta = ManageSatta::where('id',$gameId)->where([
      ['open_action','y'],
      ['close_action','y']])->count();

        if($manageSatta > 0)
     {
        $delhiGame = DelhiGameRate::where('id',2)->first();

        $response['status'] = true;
        $response['delhiGame'] = $delhiGame;
        $response['game_type'] = 'jodi';
       }else{


      $response['status'] = false;
      $response['game_type'] = 'jodi';
      $response['games'] =  null; 

       } 
        return response()->json($response);
    }

        /*Delhi-game-bidding-History-add*/

    public function adddelhigamebidding(Request $request)
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

               $biddingHistoryCount = BiddingHistory::where('user_id',Auth::guard('api')->id())->where('manage_satta_id',$request->manage_satta_id)->where('type',$request->type)->where('game_id',$request->game_id)->where('digit',$request->digit)->where('run_status','n')->where('game_type','2')->whereDate('create_time',\Carbon\Carbon::today())->count();



               if($biddingHistoryCount == 0)
               {
                 foreach ($digits as $key => $value) {



                $manageSatta = ManageSatta::where('id',$request->manage_satta_id)->first();
                $game = DelhiGameRate::where('id',$request->game_id)->first();
                if($request->type == 'open'){

                    $biddingHistoryId = BiddingHistory::create([
                    'user_id' => $request->user_id,
                    'game_id' => $request->game_id,
                    'manage_satta_id' => $request->manage_satta_id,
                    'digit' => $value,
                    'amount' => $points[$key],
                    'type' => $request->type,
                    'game_type'=>'2',
                    'time' => strtotime("now"),
                     'create_time' => \Carbon\Carbon::now(),
                    'message' => 'Played '.$manageSatta->title. " ".strtoupper('Ander Haruf') .' Digit '.$value.'.', 
                 ]);

                }elseif($request->type == 'close'){


                   $biddingHistoryId = BiddingHistory::create([
                    'user_id' => $request->user_id,
                    'game_id' => $request->game_id,
                    'manage_satta_id' => $request->manage_satta_id,
                    'digit' => $value,
                    'amount' => $points[$key],
                    'type' => $request->type,
                    'game_type'=>'2',
                    'time' => strtotime("now"),
                     'create_time' => \Carbon\Carbon::now(),
                    'message' => 'Played '.$manageSatta->title. " ".strtoupper('Bahar Haruf') .' Digit '.$value.'.', 
                 ]);

                }else{

                  $biddingHistoryId = BiddingHistory::create([
                    'user_id' => $request->user_id,
                    'game_id' => $request->game_id,
                    'manage_satta_id' => $request->manage_satta_id,
                    'digit' => $value,
                    'amount' => $points[$key],
                    'type' => $request->type,
                    'game_type'=>'2',
                    'time' => strtotime("now"),
                     'create_time' => \Carbon\Carbon::now(),
                    'message' => 'Played '.$manageSatta->title. " ".strtoupper($request->type) .' Digit '.$value.'.', 
                 ]);



                }
               

                /*$biddingHistory = BiddingHistory::where('id',$biddingHistoryId->id)->with('user','game','manageSatta')->first();*/

                $userWallet = User::where('id',Auth::guard('api')->id())->first()->wallet - $points[$key];

                User::where('id',Auth::guard('api')->id())->update([
                    'wallet' => $userWallet ]);

                if($request->type == 'open'){
                AccountStatement::create([
                    'user_id' => Auth::guard('api')->id(),
                    'amount' => $points[$key],
                    'balance' => $userWallet,
                    'message' => 'Played '.$manageSatta->title. " ".strtoupper('Ander Haruf') .' Digit '.$value.'.', 
                    'time' => strtotime('now'),
                   'create_time' => \Carbon\Carbon::now(),

                ]);
              }elseif ($request->type == 'close') {
          
              
               AccountStatement::create([
                    'user_id' => Auth::guard('api')->id(),
                    'amount' => $points[$key],
                    'balance' => $userWallet,
                    'message' => 'Played '.$manageSatta->title. " ".strtoupper('Bahar Haruf') .' Digit '.$value.'.', 
                    'time' => strtotime('now'),
                   'create_time' => \Carbon\Carbon::now(),

                ]);

                  }else{

                    AccountStatement::create([
                    'user_id' => Auth::guard('api')->id(),
                    'amount' => $points[$key],
                    'balance' => $userWallet,
                    'message' => 'Played '.$manageSatta->title. " ".strtoupper($request->type) .' Digit '.$value.'.', 
                    'time' => strtotime('now'),
                   'create_time' => \Carbon\Carbon::now(),

                ]);

                  }  
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
      public function delhigameRate(Request $request)
    {
        $gameRate = DelhiGameRate::get();

        $response['status'] = true;
        $response['game_rate'] = $gameRate;

        return response()->json($response);

       
    }
}
