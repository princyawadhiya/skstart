<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {

	
    $user['user'] =	\App\User::where('id',$request->user()->id)->with('accountStatements','biddingHistories')->first();

    return response()->json($user);
});

Route::namespace('Api')->middleware(['auth:api','mobile_verified'])->group(function(){

	// profile
	Route::get('profile','UserController@profileGet');
	/*edit-personal-details*/
	Route::post('edit-personal-details','UserController@editPersonalDetail');
	/*edit-banking-details*/
	Route::post('edit-banking-details','UserController@editBankingDetail');
	

	/*bidding-history*/
	Route::get('bidding-history','BiddingHistoryController@biddingHistory');
	/*bidding-history-add*/
	Route::post('bidding-history-add','BiddingHistoryController@biddingHistoryAdd');
	/*account-history*/
	Route::get('account-history','UserController@accountHistory');

	/*result*/
	Route::get('results','UserController@results');

	Route::get('open-game/{gameId}','UserController@openGame');
	Route::get('close-game/{gameId}','UserController@closeGame');
	

	/*withdral_points*/
	Route::post('withdral-points','UserController@withdralPoints');

	/*game-rate*/
	Route::get('game-rate','GameRateController@gameRate');

	Route::get('manage-satta','UserController@manageSatta');
	Route::get('e-wallet','UserController@eWallet');

	/*withdrawal  history*/
	Route::get('withdrawal-history','UserController@withdrawalHistory');


	/*notice-board*/
	Route::get('notice-board','UserController@noticeBoard');
	/*setting*/
	Route::get('setting','UserController@setting');

	/*how-to-play*/
	Route::get('how-to-play','UserController@howToPlay');

	
	
	



	Route::post('home','HomeController@index');

	Route::get('logout','LogoutController@logout');

	Route::post('push-notification','UserController@pushNotification');

	Route::get('/notification', 'UserController@notification');
	Route::get('/notification-status', 'UserController@notificationStatus');
	Route::get('/notification-list', 'UserController@notificationList');
	
	/*delhi game*/
	    Route::get('delhi-game-rate','DelhiGameController@delhigameRate');
		Route::get('/single-open/{gameId}', 'DelhiGameController@singleOpen');
		Route::get('/single-close/{gameId}', 'DelhiGameController@singleClose');
		Route::get('/jodi/{gameId}', 'DelhiGameController@jodi');

		Route::post('/delhi-game-bidding','DelhiGameController@adddelhigamebidding');


	/* star line game */

	Route::get('star-line-game','UserController@starlinegame');
	Route::get('star-game-play/{gameId}','StarLineController@stargameplay');
	Route::post('star-game-bidding','StarLineController@stargamebidding');
    Route::get('star-game-rate','StarLineController@gameRate');
    Route::get('star-game-result','StarLineController@stargameresult');
});



Route::namespace('Api')->middleware(['guest:api'])->group(function(){

	Route::post('register','RegisterController@register');
	Route::post('login','LoginController@login');

	Route::post('forget-password','ForgotPasswordController@forgetPassword');
	Route::post('forget-password-reset','ForgotPasswordController@forgotPasswordReset');

	/*mobile*/
	Route::post('mobile','UserController@mobile');
	/*mobile-verify*/
	Route::post('mobile-verify','UserController@mobileVerify');

	/*privacy-policies*/
	Route::get('privacy-policies','PrivacyPoliciesController@privacyPolicies');
	

	

 });
