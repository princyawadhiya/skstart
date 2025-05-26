<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;
use App\Model\ManageSatta;
use App\Model\OpenKhel;
use App\Model\CloseKhel;
use App\Model\WalletHistory;
use App\Model\BiddingHistory;
use App\User;
use App\Model\ResultData;
use App\Enquery;

class ManageSattaController extends Controller
{
    
    public function returnPoint(Request $request)
    {
       $biddingHistory =  BiddingHistory::where('id',$request->id)->first(); 
       
       $user = User::where('id',$biddingHistory->user_id)->first();
       $manageSatta = ManageSatta::where('id',$biddingHistory->manage_satta_id)->first();
       
       $biddingHistory->update([
           'run_status' => 'r',
           'result_status' => 'Returned Point',
           'payable_amount' => $biddingHistory->amount,
           ]);
       
     
       
       User::where('id',$biddingHistory->user_id)->update([
           'wallet' => $user->wallet + $biddingHistory->amount]);
       
         \App\Model\AccountStatement::create([
                          'user_id' => $user->id,
                          'amount' => $biddingHistory->amount,
                          'balance' => User::where('id',$biddingHistory->user_id)->first()->wallet,
                          'message' => 'Return Point '.$manageSatta->title. " ".strtoupper($biddingHistory->type) .' Digit '.$biddingHistory->digit.'.', 
                           'create_time' => \Carbon\Carbon::now(),
                           ]);
                           
       $response['biddingHistory'] = $biddingHistory;
       $response['user'] = User::where('id',$biddingHistory->user_id)->first();
       
       return response()->json($response);
    }
    public function manageSatta()
    {
    	$managesSatta = ManageSatta::where('game_type','1')->get();

    	return view('admin.manage-satta',compact('managesSatta'));
    }

    // open pana
    //substr($request->open_pana, 2, 1)

    public function openPana(Request $request)
    {



	      $rules = [
	      'open_pana' => 'required|numeric|digits:3',
	  ];

	
        $validation = Validator::make(Input::all(), $rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {


	 
	   $one = substr($request->open_pana, 0, 1);
	   $two = substr($request->open_pana, 1, 1);
	   $three = substr($request->open_pana, 2, 1);

        // error

	   $condition1 = $one <= $two;

	   $condition2 = $one <= $three;

	   $condition3 = $two <= $three;
	   

	  
	   if($condition1 == false)
	   {
        $response['response_status'] = false; 
	   	$response['response_message'] = 'Pana Format is invaild. Format should be in ascending order example-123,456,789';
	   }
	   elseif($condition2 == false)
	   {
        $response['response_status'] = false; 
	   	$response['response_message'] = 'Pana Format is invaild. Format should be in ascending order example-123,456,789';
	   }
	   elseif($condition3 == false)
	   {
        $response['response_status'] = false; 
	   	$response['response_message'] = 'Pana Format is invaild, Format should be in ascending order example-123,456,789.';
	   }
	   else
	   {
	   	$response['response_status'] = true;

	   	
	   $manageSatta = ManageSatta::whereDate('created_at',\Carbon\Carbon::today())->count();

	   if($manageSatta == 0)
	   {

	   	$open_pana_sum = $one+$two+$three;

	    if(strlen($open_pana_sum) == '1')
	   {
        $aakda = substr($open_pana_sum, 0, 1);
	   }
	   elseif(strlen($open_pana_sum) == '2')
	   {
        $aakda = substr($open_pana_sum, 1, 1);
	   }

	   $manageSatta =   ManageSatta::create([
	   	'open_pana' => $request->open_pana,
	   	'open_number' => $open_pana_sum,
	   	'open_aakda' => $aakda,
	   	'open_time' => strtotime("now"),
	   ]);




	   /*open start*/
	   $openKhels = OpenKhel::whereDate('created_at',\Carbon\Carbon::today())->distinct()->groupBy('user_id')->with('user.openKhels')->get();


    	foreach ($openKhels as $key => $value) {
    		foreach ($value->user->openKhels as $key => $value) {

    			if($value->resultOpenKhel()->open_aakda == $value->akda)
    			{

    			$getMoney = $value->user->openKhelsPayableAmount($value->user->id)*9;
    			
    			User::where('id',$value->user->id)->update([
    				'wallet' => $value->user->wallet+$getMoney
    			]);
    			 \App\Model\WalletHistory::create([
    			 	'user_id' => $value->user->id,
                    'type' => 'open',
                    'pana' => $value->pana,
                    'akda' => $value->akda,
                    'amount' => $getMoney,
                    'wallet' => $value->user->wallet+$getMoney,
                    'current_amount_wallet' => $value->user->wallet,
                    'time' => strtotime("now"),
                ]);

    			}

    			
    			# code...
    		}
    		# code...
    	}
	   /*open end*/

	   
	   $response['data_response_satta_check'] = true;
	   $response['response_data'] = $manageSatta;
	   $response['response_message'] = "Successfully.";


	   }
	   else
	   {
	   	 $response['data_response_satta_check'] = false;
	  
	   $response['response_message'] = "You have already add todays open pana number.";

	   }
	   

	

	   }

         $response['status'] = true;
        }

        return response()->json($response);
    }


    // close pana

      public function closePana(Request $request)
    {


	      $rules = [
	      'close_pana' => 'required|numeric|digits:3',
	  ];

	
        $validation = Validator::make(Input::all(), $rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {


	 
	   $one = substr($request->close_pana, 0, 1);
	   $two = substr($request->close_pana, 1, 1);
	   $three = substr($request->close_pana, 2, 1);

        // error

	   $condition1 = $one <= $two;

	   $condition2 = $one <= $three;

	   $condition3 = $two <= $three;
	   

	  
	   if($condition1 == false)
	   {
        $response['response_status'] = false; 
	   	$response['response_message'] = 'Pana Format is invaild. Format should be in ascending order example-123,456,789';
	   }
	   elseif($condition2 == false)
	   {
        $response['response_status'] = false; 
	   	$response['response_message'] = 'Pana Format is invaild. Format should be in ascending order example-123,456,789';
	   }
	   elseif($condition3 == false)
	   {
        $response['response_status'] = false; 
	   	$response['response_message'] = 'Pana Format is invaild, Format should be in ascending order example-123,456,789.';
	   }
	   else
	   {
	   	$response['response_status'] = true;

	   	
	   $manageSattas = ManageSatta::whereDate('created_at',\Carbon\Carbon::today());

	   if($manageSattas->count() == 1)
	   {

	   	$close_pana_sum = $one+$two+$three;

	    if(strlen($close_pana_sum) == '1')
	   {
        $aakda = substr($close_pana_sum, 0, 1);
	   }
	   elseif(strlen($close_pana_sum) == '2')
	   {
        $aakda = substr($close_pana_sum, 1, 1);
	   }

	   $manageSatta =   ManageSatta::where('id',$manageSattas->first()->id)->update([
	   	'close_pana' => $request->close_pana,
	   	'close_number' => $close_pana_sum,
	   	'close_aakda' => $aakda,
	   	'close_jodi' => $manageSattas->first()->open_aakda.$aakda,
	   	'close_time' => strtotime("now"),
	   ]);

	   /*close start*/
	   $closeKhels = CloseKhel::whereDate('created_at',\Carbon\Carbon::today())->distinct()->groupBy('user_id')->with('user.openKhels')->get();

    	


    	foreach ($closeKhels as $key => $value) {
    		
    		foreach ($value->user->closeKhels as $key => $value) {

    			if($value->resultCloseKhel()->close_jodi == $value->akda)
    			{
    				$getMoney = $value->user->closeKhelsPayableAmount($value->user->id)*99;
    			
	    			User::where('id',$value->user->id)->update([
	    				'wallet' => $value->user->wallet+$getMoney
	    			]);
	    			 WalletHistory::create([
	    			 	'user_id' => $value->user->id,
	                    'type' => 'close',
	                    'amount' =>$getMoney,
	                    'wallet' => $value->user->wallet+$getMoney,
	                    'current_amount_wallet' => $value->user->wallet,
	                    'pana' => $value->pana,
	                    'akda' => $value->akda,
	                    'time' => strtotime("now"),
	                ]);

    			}

    			

    			

    			
    			# code...
    		}
    		# code...
    	}
	   /*close end*/

	   
	   $response['data_response_satta_check'] = true;
	   $response['response_data'] = $manageSattas->first();
	   $response['response_message'] = "Successfully.";


	   }
	   else
	   {
	   	 $response['data_response_satta_check'] = false;
	  
	   $response['response_message'] = "Add open pana then add close pana.";

	   }
	   

	

	   }

         $response['status'] = true;
        }

        return response()->json($response);
    }

    public function addSatta(Request $request)
    {
    	$message = [
    		'title_val.required' => 'The title field is required.'];

    	
    	$rules = [
    	  'title_val' => 'required',
    	  'open_start_time' => 'required',
    	  'open_end_time' => 'required',
    	  'close_start_time' => 'required',
          'close_end_time' => 'required',
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
        	 	'open_start_time' => $request->open_start_time,
        	 	'open_end_time' => $request->open_end_time,
        	 	'close_start_time' => $request->close_start_time,
                'close_end_time' => $request->close_end_time,
                'status' => $request->status,
        	 ]);
        	 	
        
        	 	

        }

         return response()->json($response);
    }

    /*game-model */

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
        	
        	 

        	echo view('admin.model.game-modal')->with([
        		'flag' => $request->flag ,
        		'manageSatta' => $manageSatta])->render();
    

        }
    }

    /*pana update*/

    public function panaUpdate(Request $request)
    {
       
$parent = $request->open_input_result_date;
$parent2 = $request->close_input_result_date;

$timestamp = strtotime($parent);
$timestamp2 = strtotime($parent2);

$inputdateopen = date('Y-m-d', $timestamp); // d.m.YYYY
$time = date('H:i', $timestamp); // HH:ss
$inputdateclose = date('Y-m-d', $timestamp2); // d.m.YYYY
$timeclose = date('H:i', $timestamp2); // HH:ss

//dd($inputdateclose);

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


        	if($request->flag == 'open')
        	{

         if ($manageSatta->first()->open_action == 'n' && $currentdate == $inputdateopen ) {
             
        		$manageSatta->update([
        			'open_pana' => $request->pana,
        			'open_number' => $pana_sum,
                    'open_aakda' => $aakda,
        			'open_update' => strtotime("now"),
                    'open_input_result_date'=>$request->open_input_result_date,
        		]);

    $check =ResultData::where('open_input_result_date',$inputdateopen)->where('satta_id',$request->id)->where('game_type','1');


     if($check->first() !=null){

        $check->update([
                    'open_pana' => $request->pana,
                    'open_number' => $pana_sum,
                    'open_aakda' => $aakda,
                    'open_update' => strtotime($request->open_input_result_date),
                    'game_type'  =>'1',
                    'open_input_result_date'=>$inputdateopen,
                ]);

     }else{
             ResultData::create([
                    'satta_id' =>$request->id,
                    'open_pana' => $request->pana,
                    'open_number' => $pana_sum,
                    'open_aakda' => $aakda,
                    'open_update' => strtotime($request->open_input_result_date),
                    'game_type'  =>'1',
                    'open_input_result_date'=>$inputdateopen,
             ]);  
     }
    

    moneyDistrebute($manageSatta->first()->id,$request->flag,$request->pana);

        		$response['pana_status'] = "open";


        	}else{

                $response['pana_status'] = "open";

    $check =ResultData::where('open_input_result_date',$inputdateopen)->where('satta_id',$request->id)->where('game_type','1');




     if($check->first() !=null){

        $check->update([
                    'open_pana' => $request->pana,
                    'open_number' => $pana_sum,
                    'open_aakda' => $aakda,
                    'open_update' => strtotime($request->open_input_result_date),
                    'game_type'  =>'1',
                    'open_input_result_date'=>$inputdateopen,
                ]);

     }else{
             ResultData::create([
                    'satta_id' =>$request->id,
                    'open_pana' => $request->pana,
                    'open_number' => $pana_sum,
                    'open_aakda' => $aakda,
                    'open_update' => strtotime($request->open_input_result_date),
                    'game_type'  =>'1',
                    'open_input_result_date'=>$inputdateopen,
             ]);  
     }
            }
        }
        	else if($request->flag == 'close')
        	{

 $check =ResultData::where('satta_id',$request->id)->where('open_input_result_date',$inputdateclose);

 //dd($check->first());

        		// if($manageSatta->first()->open_pana != null)
        		// {
                  if($check->first()->open_pana != null)
                {  
                if ($manageSatta->first()->close_action == 'n' && $currentdate == $inputdateclose ){
                    
    
                  $response['closepana_status'] = true;

                  $manageSatta->update([
        			'close_pana' => $request->pana,
        			'close_number' => $pana_sum,
        			'close_aakda' => $aakda,
        			'close_jodi' => $manageSatta->first()->open_aakda.$aakda,
                    'close_update' => strtotime("now"),
                    'close_input_result_date'=>$inputdateclose,
        		]);
                  
                    $check->update([
                    'close_pana' => $request->pana,
                    'close_number' => $pana_sum,
                    'close_aakda' => $aakda,
                    'close_jodi' => $manageSatta->first()->open_aakda.$aakda,
                    'close_update' => strtotime($request->close_input_result_date),
                    'close_input_result_date'=>$inputdateclose,
                ]);


            //moneyDistrebute($manageSatta->first()->id,$request->flag,$request->pana,$game_type);
             
        		}else{
                    $response['closepana_status'] = true;

                      $check->update([
                    'close_pana' => $request->pana,
                    'close_number' => $pana_sum,
                    'close_aakda' => $aakda,
                    'close_jodi' => $manageSatta->first()->open_aakda.$aakda,
                    'close_update' => strtotime($request->close_input_result_date),
                    'close_input_result_date'=>$inputdateclose,
                ]);

                }
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

    /*satta delete*/

    public function sattaDelete(Request $request)
    {

         $rules = [
          'id' => 'required'];

    
        $validation = Validator::make(Input::all(),$rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;

            
        }
        else
        {
            $manageSatta = ManageSatta::where('id',$request->id)->delete();
            $response['status'] = true;
            $response['message'] = "deleted successfully.";
        }
         return response()->json($response);

    }

    /*sattaView*/

    public function sattaView(Request $request)
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

             echo view('admin.model.satta-view')->with([
                'flag' => $request->flag ,
                'manageSatta' => $manageSatta])->render();

        }

    }

    /*satta edit*/

     public function sattaEdit(Request $request)
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
            
               echo view('admin.model.satta-edit')->with([
                'manageSatta' => $manageSatta])->render();
    

        }
    }

    /*satta update*/

     public function sattaUpdate(Request $request)
    {
        $message = [
            'title_val.required' => 'The title field is required.'];

        
        $rules = [
          'title_val' => 'required',
          'open_start_time' => 'required',
          'open_end_time' => 'required',
          'close_start_time' => 'required',
          'close_end_time' => 'required',
          'status' => 'required',
          'id' => 'required',
          'open_status' => 'required',
          'close_status' => 'required',
         
          

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
                'open_start_time' => $request->open_start_time,
                'open_end_time' => $request->open_end_time,
                'close_start_time' => $request->close_start_time,
                'close_end_time' => $request->close_end_time,
                'status' => $request->status,
                'open_action' => $request->open_status,
                'close_action' => $request->close_status,
             ]);
                
        
                

        }

         return response()->json($response);
    }
    
   public function EnquerySection(){

   $enquery = Enquery::all();
	return view('admin.enquery',compact('enquery'));
   }
   

}
