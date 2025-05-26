<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Model\AccountStatement;
use App\Model\PointRequest;
use App\Model\BiddingHistory;
use App\Model\WithdralPoint;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register()
    {
    	return view('admin.register-user');
    }

    public function userDetail(Request $request)
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

            $user = User::find($request->id);

             echo view('admin.model.user-detail')->with([
                'user' => $user])->render();

        }
    }


    public function registerPost(Request $request)
    {
         $message = [
            'username.unique:users' => 'The username has already been taken, please choose another username.',
            'username.regex' => 'The username may only contain letters, numbers, and underslot.',
        ];

        $this->validate($request,[
          'full_name' => 'required',
          'username' => 'required|unique:users,username|regex:/^[A-Za-z0-9_]{1,15}$/|max:50',
          'email' => 'required|email|unique:users,email',
          'mobile_number' => 'required|numeric|digits:10|unique:users,mobile_number',
          'password' => 'required|min:8|confirmed',
          'password_confirmation' => 'required',
      ], $message);


        User::create([
                'name' => $request->full_name,
                'username' => $request->username,
                'email' => $request->email,
                'mobile_number' => $request->mobile_number,
                'password' => bcrypt($request->password),
                'password_string' => $request->password,
                'mobile_verified_at' => \Carbon\Carbon::today(),
            ]);

          

            return redirect()->back()->with('success','Register successfully.');

    }

    public function index()
    {
    	 $users = User::orderAsc()->typeUser()->get();


    	return view('admin.users-index',compact('users'));
    }

   
    /*biddingHistories*/
    public function biddingHistories(User $user)
    {
        
       
    $biddingHistories =  BiddingHistory::where('user_id',$user->id)->orderBy('id','DESC')->paginate(150);
     return view('admin.bidding-histories')->with([ 
      'biddingHistories' => $biddingHistories,
      'user' => $user,
    ]);
    }

    /*accountStatement*/

     public function accountStatement(User $user)
    {
        $accountStatements =  $user->accountStatements;
         return view('admin.account-statement')->with([ 
          'accountStatements' => $accountStatements,
          'user' => $user,
        ]);
    }

    /*pointtransferOpenmodal*/

    public function pointtransferOpenmodal(Request $request)
    {
        $rules = [
        'id' => 'required',
    ];

  
        $validation = Validator::make(Input::all(), $rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
             return response()->json($response);
        }
        else
        {
         $user =  User::where('id',$request->id)->first();
          echo view('admin.model.point-transfer',compact('user'))->render();
        }
    }

    /*pointTransfer*/

     public function pointTransfer(Request $request)
    {
      
         $rules = [
          'points' => 'required|numeric',
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
             $user = User::where('id',$request->id);

             $user->update([
                
                'wallet' => $user->first()->wallet+$request->points,
               
             ]);

             AccountStatement::create([
              'user_id' => $user->first()->id,
              'amount' => $request->points,
              'balance' => $user->first()->wallet,
              'create_time' => \Carbon\Carbon::now(),
              'message' => 'Deposit.',
              'time' => strtotime('now'),
               ]);

             $message = $request->points . ' Points has been deposit in your wallet.';
             $noti_status = $user->first()->notification_status;
             $noti_token = $user->first()->push_notification_token;


             notification($message,$noti_status,$noti_token);

             nitificationSave($user->first()->id,$message);
                
        
                

        }

         return response()->json($response);
    }
    /*pointWithdrawn*/
     public function pointWithdrawn(Request $request)
    {
        $rules = [
        'id' => 'required',
    ];

  
        $validation = Validator::make(Input::all(), $rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
             return response()->json($response);
        }
        else
        {
         $user =  User::where('id',$request->id)->first();
          echo view('admin.model.point-withdrawn',compact('user'))->render();
        }
    }

    /**/
     public function pointWithdrawnUpdate(Request $request)
    {

      
         $rules = [
          'points' => 'required|numeric',
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
              $user = User::where('id',$request->id);

             if($user->first()->wallet > 0 && $user->first()->wallet >= $request->points )
             {
              $user->update([
                
                'wallet' => $user->first()->wallet-$request->points,
               
             ]);

                WithdralPoint::create([
                'user_id'  => $user->first()->id, 
                'type'  => 'd',
                'amount' => $request->points,
                 'create_time' => \Carbon\Carbon::now(),
                'time' => time(),
                  ]);

             AccountStatement::create([
              'user_id' => $user->first()->id,
              'amount' => $request->points,
              'balance' => $user->first()->wallet,
              'message' => 'Withdrawn.',
               'create_time' => \Carbon\Carbon::now(),
               'time' => strtotime('now'),
               ]);

            $message = $request->points . ' Points has been withdrawn from your wallet.';
             $noti_status = $user->first()->notification_status;
             $noti_token = $user->first()->push_notification_token;


             notification($message,$noti_status,$noti_token);
             nitificationSave($user->first()->id,$message);

               $response['amount_status'] = true;

             }
             else
             {
              $response['amount_status'] = false;

             }
            

             
                
        
                

        }

         return response()->json($response);
    }

    /*pointRequestWithdrawn*/
     public function pointRequestWithdrawn(Request $request)
    {
        $rules = [
        'id' => 'required',
        'point_request_id' => 'required',
    ];

  
        $validation = Validator::make(Input::all(), $rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
             return response()->json($response);
        }
        else
        {
         $user =  User::where('id',$request->id)->first();

         $withdralPointRequest = WithdralPoint::where('id',$request->point_request_id)->first();
          echo view('admin.model.point-request-withdrawn',compact('user','withdralPointRequest'))->render();
        }
    }

      public function pointRequestWithdrawnUpdate(Request $request)
    {

      
         $rules = [
          'points' => 'required|numeric',
          'id' => 'required',
          'point_request_id' => 'required',
         
          
         
          

      ];

    
        $validation = Validator::make(Input::all(),$rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {
         


             $response['status'] = true;
              $user = User::where('id',$request->id);
               $withdralPointRequest = WithdralPoint::where('id',$request->point_request_id)->first();

              
             if($user->first()->wallet > 0 && $user->first()->wallet >= $request->points )
             {
              $user->update([
                
                'wallet' => $user->first()->wallet-$request->points,
               
             ]);

             AccountStatement::create([
              'user_id' => $user->first()->id,
              'amount' => $request->points,
              'balance' => $user->first()->wallet,
              'message' => 'Withdrawn by ADMIN',
              'create_time' => \Carbon\Carbon::now(),
              'time' => strtotime("now"),

               ]);

             WithdralPoint::where('id',$withdralPointRequest->id)->update([
              'type'  => 'd',
              'amount' => $request->points ]);

               $response['amount_status'] = true;

             }
             else
             {
              $response['amount_status'] = false;

             }
            

             
                
        
                

        }

         return response()->json($response);
    }

    /*pointRequest*/

    public function pointRequest(Request $request)
    {
          $rules = [
          'id' => 'required',
      ];

  
        $validation = Validator::make(Input::all(), $rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;

           return response()->json($response);
        }
        else
        {

          $pointRequest = PointRequest::where('id',$request->id)->first();


          $user =  User::where('id',$pointRequest->user_id)->first();
          echo view('admin.model.point-request',compact('user','pointRequest'))->render();
        }
    }

    /*requestPointPost*/

    public function requestPointPost(Request $request)
    {
      if($request->option == 'c')
      {
         if ($request->has('reason')) {
            
             $rules['reason'] = "required";

             $message['reason.required'] = "Reason  filed in required";
            /* $message['message.max'] = "The traking address may not be greater than 150 characters";*/

             $reason = $request->reason;
        }

      }
     
        else
        {
             $reason = NULL;
        }

         // rules
        $rules['id'] = "required";
    

        // message
        $message['id.required'] = "id filed in required";
       

    
        $validation = Validator::make(Input::all(),$rules,$message);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {
            $response['status'] = true;

             $pointRequest = PointRequest::where('id',$request->id)->update([
              'type' => $request->option,
              'message' => $reason,
            ]);
        }

         return response()->json($response);
    }

    public function pointRequestDelete(Request $request){

      $rules = [
          'id' => 'required'];

    
        $validation = Validator::make(Input::all(),$rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;

            
        }
        else
        {
            $manageSatta = PointRequest::where('id',$request->id)->delete();
            $response['status'] = true;
            $response['message'] = "deleted successfully.";
        }
         return response()->json($response);

    }

public function view_notifi(Request $request)
{
   $users = User::orderBy('id','ASC')->get();
  return view('admin.send-notification-two',compact('users'));

}






//           public function admin_notification(Request $request)
// {


//  $this->validate($request,[
           
//             'title' => 'required',
//             'message' => 'required',
           
            
//         ]);

//  if ($request->title != null) {

//   if ($request->member_id != '0') {

//     $usersNitifi = \App\User::where('notification_status','y')->where('id',$request->member_id)->get();

//           foreach ($usersNitifi as $key => $value) {
            
//                      $message = $request->message;
//                      $noti_status =  $value->notification_status;
//                      $noti_token = $value->push_notification_token;
//                      $user_id =$value->id;
                     

//                       notification_admin($message,$noti_status,$noti_token,$user_id); 

//   }

// }else{


//     $usersNitifi = \App\User::where('notification_status','y')->get();


//           foreach ($usersNitifi as $key => $value) {
            
//                      $message = $request->message;
//                      $noti_status =  $value->notification_status;
//                      $noti_token = $value->push_notification_token;
//                      $user_id =$value->id;
                     

//             notification_admin($message,$noti_status,$noti_token,$user_id); 
//   }

//      }   

//             //nitificationSave($value->id,$message);
//           }
       
   

//   return redirect()->back()->with('success','notification send  successfully.');


    
// }


public function admin_notification(Request $request)
    {



//$ids= implode(", ",$request->member_id);
$ids=$request->member_id;

      $message = [
        'title.required' => 'The title field is required.'];

      
      $rules = [
       'title' => 'required',
      'message' => 'required',
       
        

    ];

  
        $validation = Validator::make(Input::all(),$rules,$message);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {

          $response['status'] = true;

foreach ($ids as $key => $value) {
         
         if($value == '0'){

          $usersNitifi = \App\User::where('notification_status','y')->get();



          foreach ($usersNitifi as $key => $value) {
            
                     $message = $request->message;
                     $noti_status =  $value->notification_status;
                     $noti_token = $value->push_notification_token;
                     $user_id =$value->id;
                     

          notification_admin($message,$noti_status,$noti_token,$user_id); 

  }
         }else{

          $usersNitifi = \App\User::where('notification_status','y')->where('id',$value)->get();


                foreach ($usersNitifi as $key => $value) {
            
                     $message = $request->message;
                     $noti_status =  $value->notification_status;
                     $noti_token = $value->push_notification_token;
                     $user_id =$value->id;
                     

                      notification_admin($message,$noti_status,$noti_token,$user_id); 

  }
         }



}

      

        }

         return response()->json($response);
    }




  
//  public function admin_notification(Request $request)
//     {

// dd($request->all());
//       $message = [
//         'title.required' => 'The title field is required.'];

      
//       $rules = [
//        'title' => 'required',
//       'message' => 'required',
       
        

//     ];

  
//         $validation = Validator::make(Input::all(),$rules,$message);

//         if ($validation->fails()) {

//             $response['errors'] = $validation->getMessageBag()->toArray();
//             $response['status'] = false;
//         }
//         else
//         {

//           $response['status'] = true;
            
//              if ($request->member_id != '0') {

//     $usersNitifi = \App\User::where('notification_status','y')->where('id',$request->member_id)->get();

//           foreach ($usersNitifi as $key => $value) {
            
//                      $message = $request->message;
//                      $noti_status =  $value->notification_status;
//                      $noti_token = $value->push_notification_token;
//                      $user_id =$value->id;
                     

//                       notification_admin($message,$noti_status,$noti_token,$user_id); 

//   }

// }else{

//  $usersNitifi = \App\User::where('notification_status','y')->get();



//           foreach ($usersNitifi as $key => $value) {
            
//                      $message = $request->message;
//                      $noti_status =  $value->notification_status;
//                      $noti_token = $value->push_notification_token;
//                      $user_id =$value->id;
                     

//           notification_admin($message,$noti_status,$noti_token,$user_id); 

//   }
// } 
        
            

//         }

//          return response()->json($response);
//     }

  

}
