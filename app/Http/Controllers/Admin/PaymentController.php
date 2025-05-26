<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Model\OpenKhel;

class PaymentController extends Controller
{


 public function closeKhelPayment()
    {

    	$biddingHistory = \App\Model\BiddingHistory::whereDate('created_at',\Carbon\Carbon::today())->with('user','manageSatta','game')->get();

    	return view('admin.open-khel-payment',compact('openKhels'));
    }





    public function openKhelPayment()
    {

        $biddingHistories = \App\Model\BiddingHistory::whereDate('created_at',\Carbon\Carbon::today())->where('run_status','n')->with('user','manageSatta','game')->get();


           foreach ($biddingHistories as $key => $value) {
                     $result = 0;
                     if($value->type == 'open')
                     {

                      /*single*/
                      if($value->game_id == 1)
                      {

                       if($value->manageSatta->open_aakda == $value->digit)
                        {
                          $result = "Won";
                          $game_rate  = $value->game->game_rate;
                         
                        } 
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }

                      }


                      /*jodi*/
                     
                      elseif($value->game_id == 2)
                      {
                        if($value->manageSatta->close_jodi == $value->digit)
                        {
                          $result = "Won";
                          $game_rate  = $value->game->game_rate;
                         
                        } 
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }
                        

                      }

                       /*single patti*/
                      elseif($value->game_id == 3 || $value->game_id == 4 || $value->game_id == 5   )
                      {
                        if($value->manageSatta->open_pana == $value->digit)
                        {
                            if($value->game_id == 3)
                            {
                             $game_rate  = $value->game->game_rate;
                            }
                            elseif($value->game_id == 4)
                            {
                              $game_rate  = $value->game->game_rate;
                            }
                            elseif($value->game_id == 5)
                            {
                              $game_rate  = $value->game->game_rate;
                            }
                              $result = "Won";
                         
                        } 
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }
                        

                      }

                     }

                     /*open end*/
                     /*close*/
                     elseif($value->type == 'close')
                     {
                      /*single*/
                      if($value->game_id == 1)
                      {
                       if($value->manageSatta->close_aakda == $value->digit)
                        {
                          $result = "Won";
                          $game_rate  = $value->game->game_rate;
                         
                        } 
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }


                        

                      }

                      /*jodi*/
                     
                      elseif($value->game_id == 2)
                      {
                        if($value->manageSatta->close_jodi == $value->digit)
                        {
                          $result = "Won";
                          $game_rate  = $value->game->game_rate;
                         
                        } 
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }
                        

                      }

                       /*single patti*/
                      elseif($value->game_id == 3 || $value->game_id == 4 || $value->game_id == 5   )
                      {
                        if($value->manageSatta->close_pana == $value->digit)
                        {
                            if($value->game_id == 3)
                            {
                             $game_rate  = $value->game->game_rate;
                            }
                            elseif($value->game_id == 4)
                            {
                              $game_rate  = $value->game->game_rate;
                            }
                            elseif($value->game_id == 5)
                            {
                              $game_rate  = $value->game->game_rate;
                            }
                              $result = "Won";
                         
                        } 
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }
                        

                      }

                     }
                     /*close end*/
                     $payableAmount = $value->amount*$game_rate;



                    

                     \App\Model\BiddingHistory::where('id',$value->id)->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                    ]);

                   $biddingHistory =  \App\Model\BiddingHistory::where('id',$value->id)->first();


                    if( $biddingHistory->result_status == "Won")
                    {
                        $userUpdate = \App\User::where('id',$value->user->id);
                        $userUpdate->update([
                            'wallet' => $userUpdate->first()->wallet+$payableAmount]);

                      \App\Model\AccountStatement::create([
                          'user_id' => $value->user->id,
                          'amount' => $payableAmount,
                          'balance' => $userUpdate->first()->wallet,
                          'message' => 'Got winning points.'
                           ]);

                    }






                   
           }

    	  

        

    }
}
