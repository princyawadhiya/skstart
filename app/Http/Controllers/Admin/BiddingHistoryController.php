<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\BiddingHistory;
use App\Model\ManageSatta;
use App\Model\AccountStatement;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use Auth;
use App\User;
use App\Enquery;

class BiddingHistoryController extends Controller
{
    public function index()
    {
    	$biddingHistories = BiddingHistory::orderBy('create_time','DESC')->paginate(100);
    	
    	return view('admin.bidding-histories',compact('biddingHistories'));
    }

     public function serach_bid(Request $request)
    {

      

      if (empty($request->all())) {

      $managesSatta = ManageSatta::where('game_type','1')->get();
      $biddingHistories = BiddingHistory::orderBy('create_time','DESC')->paginate(100);
      // $biddingHistories = BiddingHistory::orderBy('create_time','DESC')->paginate(100);
      $game_name=null;
      $game_id =null;
      
      return view('admin.bidding-serach',compact('biddingHistories','managesSatta','game_name','game_id'));
      }else{

     $game_name = ManageSatta::where('id',$request->game_id)->select('title')->first();
     $game_id =$request->game_id;
     
     $managesSatta = ManageSatta::where('game_type','1')->get();

$biddingHistories = BiddingHistory::where('manage_satta_id',$request->game_id)->orderBy('create_time','DESC')->paginate(100);

     // $biddingHistories = BiddingHistory::where('manage_satta_id', 'like', '%' . $request->game_id . '%')->paginate(100)->setpath('');

     $biddingHistories->appends(array(
              
         'game_id'=>input::get('game_id'),    
     ));

  return view('admin.bidding-serach',compact('biddingHistories','managesSatta','game_name','game_id'));

      }

    }

    public function biddingEdit(Request $request)
    {
    	  $rules = [
          'id' => 'required',
           ];

    
        $validation = Validator::make(Input::all(),$rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;

            return response()->json($response);
        }
        else
        {

            $bidding = BiddingHistory::where('id',$request->id)->with('user')->first();

           $user = User::where('id',$bidding->user->id)->first();
          
            
               echo view('admin.model.bidding-edit')->with([
                'bidding' => $bidding,
                'user' => $user,
              ])->render();
    

        }
    }

    /*bidding Update */
     public function biddingUpdate(Request $request)
    {
    	  $oldmessage=$request->oldmessage;
      
         $rules = [
          
          'points' => 'required|numeric',
          'change_point' => 'required|numeric',
          'id' => 'required',
          'change_digit'=>'required',
          'message' =>'required',
      ];


        $validation = Validator::make(Input::all(),$rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {
             $response['status'] = true;
             

             $biddingHistory =  BiddingHistory::where('id',$request->id)->first();

             $manageSatta = ManageSatta::where('id',$biddingHistory->manage_satta_id)->first();

              $user = User::where('id',$biddingHistory->user_id);

             

             
//dd($request->all());

               if($user->first()->wallet > 0 )
             {

              //$newtime = $biddingHistory->created_at;
              //data = (date($biddingHistory->created_at), "Y-m-d "); 

              $newdate=date("Y-m-d",strtotime($biddingHistory->created_at));


            $data=AccountStatement::where('user_id',$user->first()->id)->where('message',$oldmessage)->whereDate('created_at',$biddingHistory->created_at)->delete();



              BiddingHistory::where('id',$request->id)->update([
                'amount' => $request->change_point,
                'digit' => $request->change_digit,
                'message' =>$request->message,

              ]); 

                 $user->update([
                'wallet' => $user->first()->wallet+$request->points]);


                 


              
            /*deposit point*/
            // AccountStatement::create([
            //   'user_id' => $user->first()->id,
            //   'amount' => $request->points,
            //   'balance' => $user->first()->wallet,
            //   'message' => 'Deposit', 
            //   'time' => strtotime('now'),
            //    'create_time' => \Carbon\Carbon::now(),

            // ]);
             

             /*withdrawal*/

                $user->update([
                'wallet' => $user->first()->wallet-$request->change_point]);

             AccountStatement::create([
              'user_id' => $user->first()->id,
              'amount' => $request->change_point,
              'balance' => $user->first()->wallet,
              'message' => 'Played '.$manageSatta->title. " ".strtoupper($biddingHistory->type) .' Digit '.$request->change_digit.'.', 
              'time' => strtotime('now'),
               //'create_time' => \Carbon\Carbon::now(),
              'create_time'=>$biddingHistory->create_time,

            ]);
          
              
               
          

               $response['message'] = "Point value is updated successfully.";
               $response['if_exists'] = true;
             }
             else
             {

              $response['message'] = "Your wallet has not sufficient points.";
               $response['if_exists'] = false;

             }
        }

         return response()->json($response);
    }
    
      public function DeleteEnquery(Request $request){
     $id =  Enquery::find($request->id);
      $yes = $id->delete();
     return response()->json($yes);
    }
}
