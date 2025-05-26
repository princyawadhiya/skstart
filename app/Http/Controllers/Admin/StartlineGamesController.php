<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use App\Model\ManageSatta;
use App\Model\StarlineGameRate;
use App\Model\ResultData;
class StartlineGamesController extends Controller
{
	public function index()
	{
	 $managesSatta = ManageSatta::where('game_type','3')->get();

        return view('admin.starline-games',compact('managesSatta'));
	}

    public function addstarline(Request $request)
    {

    $message = [
    		'title_val.required' => 'The title field is required.'];

    	
    	$rules = [
    	  'title_val' => 'required',
    	  'open_end_time' => 'required',
    	  'status' => 'required',
	  ];

	
        $validation = Validator::make(Input::all(),$rules,$message);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {
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

        	 ManageSatta::create([
                 'slug' => str_limit(str_slug($request->input('title_val').'-'.$slugId),50),
        	 	'title' => $request->title_val,
        	 	'open_end_time' => $request->open_end_time,
                'game_type' => '3',
                'status' => $request->status,
        	 ]);
        	 	
        }

         return response()->json($response);	
    }

    public function gameModal(Request $request)
    {
    	

        $rules = [
    	  'id' => 'required',
    	  'flag' => 'required',
    	   ];

	
        $validation = Validator::make(Input::all(),$rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;

            return response()->json($response);
        }
        else
        {

        	$manageSatta = manageSatta::find($request->id);
        	
        	 

        	echo view('admin.model.star-game-modal')->with([
        		'flag' => $request->flag ,
        		'manageSatta' => $manageSatta])->render();
    

        }
    }
    public function Starlinerate()
    {
    	$games = StarlineGameRate::get();
   
    	return view('admin.star-game-rate',compact('games'));
    }

        /*pana update*/

public function starpana(Request $request)
    {

$parent = $request->open_input_result_date;
$parent2 = $request->close_input_result_date;

$timestamp = strtotime($parent);
$timestamp2 = strtotime($parent2);

$inputdateopen = date('Y-m-d', $timestamp); // d.m.YYYY
$time = date('H:i', $timestamp); // HH:ss
$inputdateclose = date('Y-m-d', $timestamp2); // d.m.YYYY
$timeclose = date('H:i', $timestamp2); // HH:ss

//dd($request->open_input_result_date);

$currentdate =  date("Y-m-d");
       $rules = [
    	  'id' => 'required',
    	  'flag' => 'required',
    	  'pana' => 'required|numeric|digits:3',
    	   ];

	
        $validation = Validator::make(Input::all(),$rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;

            
        }
        else
        {
        	$one = substr($request->pana, 0, 1);
		    $two = substr($request->pana, 1, 1);
		    $three = substr($request->pana, 2, 1);

		    $pana_sum = $one+$two+$three;

	     if(strlen($pana_sum) == '1')
		   {
	        $aakda = substr($pana_sum, 0, 1);
		   }
	     elseif(strlen($pana_sum) == '2')
		   {
	        $aakda = substr($pana_sum, 1, 1);
		   }

        	$response['status'] = true;
        	$manageSatta = ManageSatta::where('id',$request->id);

            $ResultData =ResultData::where('id',$request->id);

          
        
        	if($request->flag == 'open')
        	{

 if ($currentdate == $request->open_input_result_date){
   
        		$manageSatta->update([
        			'open_pana' => $request->pana,
        			'open_number' => $pana_sum,
                    'open_aakda' => $aakda,
        			'open_update' => strtotime("now"),
                    'open_input_result_date'=>$request->open_input_result_date,
        		]);

    moneyDistrebutestarlinegame($manageSatta->first()->id,$request->flag,$request->pana);

        		$response['pana_status'] = "open";

}else{

                $response['pana_status'] = "open";


        $ResultData->update([
                    'open_pana' => $request->pana,
                    'open_number' => $pana_sum,
                    'open_aakda' => $aakda,
                    'open_update' => strtotime($request->open_input_result_date),
                    'game_type'  =>'3',
                    'open_input_result_date'=>$request->open_input_result_date,
                ]);

        moneyDistrebuteprestarlinegame($ResultData->first()->id,$request->flag,$request->pana,$request->open_input_result_date);

               }
        	}
        	else if($request->flag == 'close')
        	{


        		if($manageSatta->first()->open_pana != null )
        		{
                  $response['closepana_status'] = true;

                  $manageSatta->update([
        			'close_pana' => $request->pana,
        			'close_number' => $pana_sum,
        			'close_aakda' => $aakda,
        			'close_jodi' => $manageSatta->first()->open_aakda.$aakda,
                    'close_update' => strtotime("now"),
        		]);

            moneyDistrebutestarlinegame($manageSatta->first()->id,$request->flag,$request->pana);

        		}
        		else
        		{
        			$response['closepana_status'] = false;

        		}

        		$response['pana_status'] = "close";
        	}
        	else
        	{
        		$response['message'] = 'Something Went wrong';
        	}

        }
        return response()->json($response);

          
    }
        /* game edit*/
    public function gameEdit(Request $request)
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

            $game = StarlineGameRate::find($request->id);
            
               echo view('admin.model.stargame-rate-edit-model')->with([
                'game' => $game])->render();
    

        }
    }
        /*game update*/
     public function gameUpdate(Request $request)
    {
    
         $rules = [
          'game_name' => 'required',
          'game_rate' => 'required|numeric',
          'game_rate_limit' => 'required|numeric',
          'status' => 'required',
           'id' => 'required',
         
          

      ];

    
        $validation = Validator::make(Input::all(),$rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {
             $response['status'] = true;

             StarlineGameRate::where('id',$request->id)->update([
                'name' => $request->game_name,
                'game_rate' => $request->game_rate,
                'game_rate_limit' => $request->game_rate_limit,
                'status' => $request->status,
               
             ]);   

        }

         return response()->json($response);
    }
/* star View  */
        public function starView(Request $request)
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

            $manageSatta = manageSatta::find($request->id);

             echo view('admin.model.star-view')->with([
                'flag' => $request->flag ,
                'manageSatta' => $manageSatta])->render();

        }

    }

        /*satta edit*/

     public function starEdit(Request $request)
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

            $manageSatta = manageSatta::find($request->id);
            
               echo view('admin.model.star-edit')->with([
                'manageSatta' => $manageSatta])->render();
    

        }
    }

         public function stargameUpdate(Request $request)
    {

        $message = [
            'title_val.required' => 'The title field is required.'];

        
        $rules = [
          'title_val' => 'required',
          'open_end_time' => 'required',
          'status' => 'required',
          'id' => 'required',
          'open_status' => 'required',
      ];

    
        $validation = Validator::make(Input::all(),$rules,$message);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {
             $response['status'] = true;

             ManageSatta::where('id',$request->id)->update([
                'title' => $request->title_val,
                'open_end_time' => $request->open_end_time,
                'status' => $request->status,
                'open_action' => $request->open_status,
             ]);
                
        
                

        }

         return response()->json($response);
    }

}
