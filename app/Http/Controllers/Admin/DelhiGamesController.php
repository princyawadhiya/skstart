<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\ManageSatta;
use App\Model\DelhiGameRate;
use App\Model\ResultData;

class DelhiGamesController extends Controller
{
    public function index(){
    
        return view('admin.delhi-games');
    }
    
    public function getDelhiGames(){
        
        $delhiGames = ManageSatta::where('game_type','2')->get();
        $response['delgiGames'] = $delhiGames;
        
        return response()->json($response);
    

    }
   
    
    
    public function addDelhiGames(Request $request)
    {
        $message = [
            'open_end_time.required' => 'The Andar Harf End time is required.',
            'close_end_time.required' => 'The Bahar Haruf End  time is required.'
            ];
        $this->validate($request,[
            'title' => 'required',
            'open_end_time' => 'required',
            'close_end_time' => 'required',
            'status' => 'required',
            ],$message);
            
            
            /*slug generate*/

             $manageSatta = ManageSatta::orderBy('id','DESC')->first();

            if($manageSatta == null )
            {
              $slugId = '1';
            }
            else
            {
             $slugId =  $manageSatta->id+1;
            }

        	 $response['status'] = true;

        $delhiGame =	 ManageSatta::create([
                 'slug' => str_limit(str_slug($request->input('title').'-'.$slugId),50),
        	 	'title' => $request->title,
        	 	'open_end_time' => $request->open_end_time,
                'close_end_time' => $request->close_end_time,
                'status' => $request->status,
                'game_type' => '2',
        	 ]);
        	 
        	 
        	 $response['status'] = true;
        	 $response['delhiGame'] = $delhiGame; 
        	 
        	 return response()->json($response);
        	 
    }
    
    public function delhiGamesView(Request $request)
    {
       $delhiGame = ManageSatta::where('game_type','2')->where('id',$request->gameId)->first();
       
         $response['delhiGame'] = $delhiGame;
         
          return response()->json($response);
    }
    
    public function gameEdit(Request $request){
        
         $delhiGame = ManageSatta::where('game_type','2')->where('id',$request->gameId)->first();
         
         $response['delhiGame'] = $delhiGame;
         
         return response()->json($response);
        
    }
    
    public function delhiGameUpdate(Request $request)
    {
       $message = [
            'open_end_time.required' => 'The Andar Harf End time is required.',
            'close_end_time.required' => 'The Bahar Haruf End  time is required.',
            'open_action.required' => 'The Andar Haruf status is required.',
            'close_action.required' => 'The Bahar Haruf status is required.'
            ];
        $this->validate($request,[
            'title' => 'required',
            'open_end_time' => 'required',
            'close_end_time' => 'required',
            'status' => 'required',
            'open_action' => 'required',
            'close_action' => 'required',
            ],$message);
            
            
        $delhiGame =    ManageSatta::where('id',$request->gameId)->update([
                'title' => $request->title,
        	 	'open_end_time' => $request->open_end_time,
                'close_end_time' => $request->close_end_time,
                'status' => $request->status,
                'open_action' => $request->open_action,
                'close_action' => $request->close_action,
                
                ]);
                
                 $response['delhiGame'] = ManageSatta::where('id',$request->gameId)->first();
                 $response['message'] = 'successfully update';
         
         return response()->json($response);
            
    }
    
      public function getGameResultUpdate(Request $request)
      {
          
          $delhiGame = ManageSatta::where('game_type','2')->where('id',$request->gameId)->first();
         
         $response['delhiGame'] = $delhiGame;
         
         return response()->json($response);
          
      }
    
    public function gameResultUpdate(Request $request)
    {

        $parent = $request->open_input_result_date;
        $timestamp = strtotime($parent);

        $inputdateopen = date('Y-m-d', $timestamp); // d.m.YYYY
        $time = date('H:i', $timestamp); // HH:ss
  
        $currentdate =  date("Y-m-d");

        $this->validate($request,[
            'pana' => 'required|numeric|digits:2',
            'open_input_result_date' =>'required'
           
            ]);
            
            $one = substr($request->pana, 0, 1);
	        $two = substr($request->pana, 1, 1);
	       
	       $manageSatta =  ManageSatta::where('game_type','2')->where('id',$request->gameId);

           $ResultData =ResultData::where('id',$request->gameId);
	       
	    if ($currentdate == $request->open_input_result_date) {
               
        $delhiGame = ManageSatta::where('game_type','2')->where('id',$request->gameId)->update([
                 'close_jodi' => $request->pana ,
                 'open_aakda' => $one ,
                 'close_aakda' => $two ,
                 'open_input_result_date'=>$request->open_input_result_date,
                 ]);

                 
    moneyDistrebuteDelhiGame($manageSatta->first()->id,$request->pana);

       $response['delhiGame'] =  ManageSatta::where('game_type','2')->where('id',$request->gameId)->first();

              }else{

  
     $ResultData->update([
                    'close_jodi' => $request->pana ,
                    'open_aakda' => $one ,
                    'close_aakda' => $two ,
                    'open_update' => strtotime("now"),
                    'game_type'  =>'2',
                    'open_input_result_date'=>$request->open_input_result_date,
                ]);

 
    

        moneyDistrebutepreDelhiGame($ResultData->first()->id,$request->pana,$request->open_input_result_date);

           $response['delhiGame'] =  ResultData::where('game_type','2')->where('id',$request->gameId)->first();

              }   
                 
      
         
         return response()->json($response);
    }
    
    
    public function gameGameRate()
    {
        
        return view('admin.game-game-rate');
    }
    
    public function delhiGamesRatesList()
    {
        $delhiGameRates = DelhiGameRate::get();
        
        $response['delhiGameRates'] = $delhiGameRates;
        
        return response()->json($response);
    }
    
    public function delhiGameRateEdit(Request $request)
    {
         $delhiGameRate = DelhiGameRate::where('id',$request->id)->first();
         
         $response['delhiGameRate'] = $delhiGameRate;
         
         return response()->json($response);
    }
    
    public function delhiGameRateUpdate(Request $request)
    {
      
       $this->validate($request,[
           'name' => 'required',
           'game_rate' => 'required|numeric',
           'game_rate_limit' => 'required|numeric',
           'status' => 'required',
           ]); 
           
          DelhiGameRate::where('id',$request->id)->update([
               'name' => $request->name,
               'game_rate' => $request->game_rate,
               'game_rate_limit' => $request->game_rate_limit,
               'status' => $request->status
               ]);
               
               $response['delhiGameRate'] = DelhiGameRate::where('id',$request->id)->first();
         
               return response()->json($response);
    }
        
    
}
