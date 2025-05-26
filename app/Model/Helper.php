<?php
use Illuminate\Support\Facades\DB;
use Ixudra\Curl\Facades\Curl;

function moneyDistrebute($manageSattaId,$manageSattaType,$pana)
{


 // echo \Carbon\CarbonImmutable::now()->add(-1, 'day');
   $from_date = \Carbon\CarbonImmutable::now()->add(-2, 'day');

    $to_date = \Carbon\Carbon::today();


   if($manageSattaId == '6' && $manageSattaType == 'close' )
   {
    

      $biddingHistories = \App\Model\BiddingHistory::whereBetween(DB::raw('DATE(create_time)'), array($from_date, $to_date))->where('run_status','n')->where('manage_satta_id',$manageSattaId)->with('user','manageSatta','game')->get();
        //echo "6";

      /*$biddingHistories = \App\Model\BiddingHistory::whereDate('create_time',\Carbon\Carbon::today())->orWhereDate('create_time',\Carbon\CarbonImmutable::now()->add(-1, 'day'))->where([['run_status','n'],['manage_satta_id',$manageSattaId]])->with('user','manageSatta','game')->get();
       echo "6";
*/
   }

   elseif($manageSattaId == '7' && $manageSattaType == 'close' )
   {

      $biddingHistories = \App\Model\BiddingHistory::whereBetween(DB::raw('DATE(create_time)'), array($from_date, $to_date))->where('run_status','n')->where('manage_satta_id',$manageSattaId)->with('user','manageSatta','game')->get();
       //echo "7";

   }
   else
   {

      $biddingHistories = \App\Model\BiddingHistory::whereDate('create_time',\Carbon\Carbon::today())->where('run_status','n')->where('manage_satta_id',$manageSattaId)->with('user','manageSatta','game')->get();
      // echo "else";

   }

//dd($biddingHistories);


    $manageSattaRecord = \App\Model\ManageSatta::where('id',$manageSattaId)->first();


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
                     
                      elseif($value->game_id == 2 || $value->game_id == 6 || $value->game_id == 7 )
                      {
                        if($value->manageSatta->close_jodi == $value->digit)
                        {
                            
                           if($value->game_id == 2)
                            {
                             $game_rate  = $value->game->game_rate;
                            }
                            elseif($value->game_id == 6)
                            {
                              $game_rate  = $value->game->game_rate;
                            }
                            elseif($value->game_id == 7)
                            {
                              $game_rate  = $value->game->game_rate;
                            }  
                          $result = "Won";
                          //$game_rate  = $value->game->game_rate;
                         
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
                       /*Half Sangam */
                    elseif($value->game_id == 8 )
                      {
 
                  if($value->manageSatta->open_aakda == $value->open_single && $value->manageSatta->close_pana == $value->close_pana_digit)

                       {
                       $game_rate  = $value->game->game_rate;
                       $result = "Won";
                        }
                     
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }
                        

                       } 
                     /*Full Sangam */
                    elseif($value->game_id == 9 )
                      {
                if($value->manageSatta->open_pana == $value->open_pana_digit && $value->manageSatta->close_pana == $value->close_pana_digit)
                        {
                      

                             $game_rate  = $value->game->game_rate;
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
                     
                      elseif($value->game_id == 2 || $value->game_id == 6 || $value->game_id == 7 )
                      {
                        if($value->manageSatta->close_jodi == $value->digit)
                        {
                            
                           if($value->game_id == 2)
                            {
                             $game_rate  = $value->game->game_rate;
                            }
                            elseif($value->game_id == 6)
                            {
                              $game_rate  = $value->game->game_rate;
                            }
                            elseif($value->game_id == 7)
                            {
                              $game_rate  = $value->game->game_rate;
                            }    
                          $result = "Won";
                          //$game_rate  = $value->game->game_rate;
                         
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
                      /*Half Sangam */
                    elseif($value->game_id == 8 )
                      {
 
                  if($value->manageSatta->open_aakda == $value->open_single && $value->manageSatta->close_pana == $value->close_pana_digit)

                       {
                       $game_rate  = $value->game->game_rate;
                       $result = "Won";
                        }
                     
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }
                        

                       }
                        /*Full Sangam */
                    elseif($value->game_id == 9 )
                      {
                if($value->manageSatta->open_pana == $value->open_pana_digit && $value->manageSatta->close_pana == $value->close_pana_digit)
                        {
                      

                             $game_rate  = $value->game->game_rate;
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
                   
                   


                     if('open' == $manageSattaType) {
                       


                       \App\Model\BiddingHistory::where('id',$value->id)->where('run_status','n')->where('type',$manageSattaType)->where('game_id','!=',2)->where('game_id','!=',6)->where('game_id','!=',7)->where('game_id','!=',8)->where('game_id','!=',9)->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);
                     }
                      elseif ('close' == $manageSattaType) {
                         

                        \App\Model\BiddingHistory::where('id',$value->id)->where('run_status','n')->where('type',$manageSattaType)->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);

                         \App\Model\BiddingHistory::where('id',$value->id)->where('run_status','n')->where('game_id',2)->where('type','open')->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);
                       
                       \App\Model\BiddingHistory::where('id',$value->id)->where('run_status','n')->where('game_id',6)->where('type','open')->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);
                         \App\Model\BiddingHistory::where('id',$value->id)->where('run_status','n')->where('game_id',7)->where('type','open')->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);
                       
                       \App\Model\BiddingHistory::where('id',$value->id)->where('run_status','n')->where('game_id',8)->where('type','open')->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);
                       
                       \App\Model\BiddingHistory::where('id',$value->id)->where('run_status','n')->where('game_id',9)->where('type','open')->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);
                      }
                  
                 
       //dd($payableAmount);                
  if( $payableAmount > 0)
  {

                   

                    $biddingHistory =  \App\Model\BiddingHistory::where('id',$value->id)->where('user_id',$value->user_id)->first();
                  

                        $userUpdate = \App\User::where('id',$value->user->id);
                        $userUpdate->update([
                            'wallet' => $userUpdate->first()->wallet+$payableAmount]);

                      \App\Model\AccountStatement::create([
                          'user_id' => $value->user->id,
                          'amount' => $payableAmount,
                          'balance' => $userUpdate->first()->wallet,
                          'message' => 'Win '.$manageSattaRecord->title. " ".strtoupper($value->type) .' Digit '.$value->digit.'.', 
                           'create_time' => \Carbon\Carbon::now(),
                           ]);

                   
                    

                      $wonMessage = $value->message ."(Won) - ".$payableAmount;
                      $noti_status=$value->user->notification_status;
                      $noti_token=$value->user->push_notification_token;
                  

                       
                      notification($wonMessage,$noti_status,$noti_token);
                      nitificationSave($value->first()->id,$wonMessage);

                 }
                 
                   
           }
           
           
                    if(count($biddingHistories) > 0)
          {
           
           $notification_user = \App\Model\BiddingHistory::whereDate('create_time',\Carbon\Carbon::today())->where('manage_satta_id',$manageSattaId)->with('user','manageSatta','game')->groupBy('user_id')->get();
           
           
            foreach ($notification_user as $key => $data) {
            
              $message = 'Result out for '. $manageSattaRecord->title. " ". $manageSattaType ." ". $pana;
              
                     $noti_status =  $data->user->notification_status;
                     $noti_token = $data->user->push_notification_token;
                     $user_id =$data->user->id;
                     

                      notification($message,$noti_status,$noti_token);

                      nitificationSave($data->user->id,$message);
               }
          
          }

        //   if(count($biddingHistories) > 0)
        //   {
        //         $usersNitifi = \App\User::get();

        //   foreach ($usersNitifi as $key => $value) {
            
        //       $message = 'Result out for '. $manageSattaRecord->title. " ". $manageSattaType ." ". $pana;
        //              $noti_status =  $value->notification_status;
        //              $noti_token = $value->push_notification_token;
        //              $user_id =$value->id;
                     

        //               notification($message,$noti_status,$noti_token,$user_id);

        //               nitificationSave($value->id,$message);
        //   }
        //   }

          
}

//previews date result decration 
function moneyDistrebutesattagames($manageSattaId,$manageSattaType,$pana,$date)
{


  $biddingHistories = \App\Model\BiddingHistory::whereDate('create_time',$date)->where('run_status','n')->where('manage_satta_id',$manageSattaId)->where('game_type','1')->with('user','PriResultData','game')->get();
  

    $manageSattaRecord = \App\Model\ManageSatta::where('id',$manageSattaId)->first();


           foreach ($biddingHistories as $key => $value) {
                     $result = 0;


                     if($value->type == 'open')
                     {


                      /*single*/
                      if($value->game_id == 1)
                      {

                       if($value->PriResultData->open_aakda == $value->digit)
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
                     
                      elseif($value->game_id == 2 || $value->game_id == 6 || $value->game_id == 7 )
                      {
                        if($value->PriResultData->close_jodi == $value->digit)
                        {
                            
                           if($value->game_id == 2)
                            {
                             $game_rate  = $value->game->game_rate;
                            }
                            elseif($value->game_id == 6)
                            {
                              $game_rate  = $value->game->game_rate;
                            }
                            elseif($value->game_id == 7)
                            {
                              $game_rate  = $value->game->game_rate;
                            }  
                          $result = "Won";
                          //$game_rate  = $value->game->game_rate;
                         
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
                        if($value->PriResultData->open_pana == $value->digit)
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
                       /*Half Sangam */
                    elseif($value->game_id == 8 )
                      {
 
                  if($value->PriResultData->open_aakda == $value->open_single && $value->PriResultData->close_pana == $value->close_pana_digit)

                       {
                       $game_rate  = $value->game->game_rate;
                       $result = "Won";
                        }
                     
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }
                        

                       } 
                     /*Full Sangam */
                    elseif($value->game_id == 9 )
                      {
                if($value->PriResultData->open_pana == $value->open_pana_digit && $value->PriResultData->close_pana == $value->close_pana_digit)
                        {
                      

                             $game_rate  = $value->game->game_rate;
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
                       if($value->PriResultData->close_aakda == $value->digit)
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
                     
                      elseif($value->game_id == 2 || $value->game_id == 6 || $value->game_id == 7 )
                      {
                        if($value->PriResultData->close_jodi == $value->digit)
                        {
                            
                           if($value->game_id == 2)
                            {
                             $game_rate  = $value->game->game_rate;
                            }
                            elseif($value->game_id == 6)
                            {
                              $game_rate  = $value->game->game_rate;
                            }
                            elseif($value->game_id == 7)
                            {
                              $game_rate  = $value->game->game_rate;
                            }    
                          $result = "Won";
                          //$game_rate  = $value->game->game_rate;
                         
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
                        if($value->PriResultData->close_pana == $value->digit)
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
                      /*Half Sangam */
                    elseif($value->game_id == 8 )
                      {
 
                  if($value->PriResultData->open_aakda == $value->open_single && $value->PriResultData->close_pana == $value->close_pana_digit)

                       {
                       $game_rate  = $value->game->game_rate;
                       $result = "Won";
                        }
                     
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }
                        

                       }
                        /*Full Sangam */
                    elseif($value->game_id == 9 )
                      {
                if($value->PriResultData->open_pana == $value->open_pana_digit && $value->PriResultData->close_pana == $value->close_pana_digit)
                        {
                      

                             $game_rate  = $value->game->game_rate;
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
                   
                   


                     if('open' == $manageSattaType) {
                       


                       \App\Model\BiddingHistory::where('id',$value->id)->where('run_status','n')->where('type',$manageSattaType)->where('game_id','!=',2)->where('game_id','!=',6)->where('game_id','!=',7)->where('game_id','!=',8)->where('game_id','!=',9)->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);
                     }
                      elseif ('close' == $manageSattaType) {
                         

                        \App\Model\BiddingHistory::where('id',$value->id)->where('run_status','n')->where('type',$manageSattaType)->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);

                         \App\Model\BiddingHistory::where('id',$value->id)->where('run_status','n')->where('game_id',2)->where('type','open')->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);
                       
                       \App\Model\BiddingHistory::where('id',$value->id)->where('run_status','n')->where('game_id',6)->where('type','open')->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);
                         \App\Model\BiddingHistory::where('id',$value->id)->where('run_status','n')->where('game_id',7)->where('type','open')->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);
                       
                       \App\Model\BiddingHistory::where('id',$value->id)->where('run_status','n')->where('game_id',8)->where('type','open')->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);
                       
                       \App\Model\BiddingHistory::where('id',$value->id)->where('run_status','n')->where('game_id',9)->where('type','open')->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);
                      }
                  
                 
                   
  if( $payableAmount > 0)
  {

                   

                    $biddingHistory =  \App\Model\BiddingHistory::where('id',$value->id)->where('user_id',$value->user_id)->first();
                  

                        $userUpdate = \App\User::where('id',$value->user->id);
                        $userUpdate->update([
                            'wallet' => $userUpdate->first()->wallet+$payableAmount]);

                      \App\Model\AccountStatement::create([
                          'user_id' => $value->user->id,
                          'amount' => $payableAmount,
                          'balance' => $userUpdate->first()->wallet,
                          'message' => 'Win '.$manageSattaRecord->title. " ".strtoupper($value->type) .' Digit '.$value->digit.'.', 
                           'create_time' => \Carbon\Carbon::now(),
                           ]);

                   
                    

                      $wonMessage = $value->message ."(Won) - ".$payableAmount;  

                       nitificationSave($userUpdate->first()->id,$wonMessage);
                     // notification($wonMessage,$noti_status,$noti_token);

                 }

                   
           }

           if(count($biddingHistories) > 0)
           {
                $usersNitifi = \App\User::get();

           foreach ($usersNitifi as $key => $value) {
            
               $message = 'Result out for '. $manageSattaRecord->title. " ". $manageSattaType ." ". $pana;
                     $noti_status =  $value->notification_status;
                     $noti_token = $value->push_notification_token;


                      notification($message,$noti_status,$noti_token);

                      nitificationSave($value->id,$message);
           }
           }

          
}


//star line games

function moneyDistrebutestarlinegame($manageSattaId,$manageSattaType,$pana)
{
   $manageSattaRecord = \App\Model\ManageSatta::where('id',$manageSattaId)->first();

    $biddingHistories = \App\Model\BiddingHistory::where('game_type',$manageSattaRecord->game_type)->whereDate('create_time',\Carbon\Carbon::today())->where('run_status','n')->where('manage_satta_id',$manageSattaId)->with('user','manageSatta','StarlineGameRate')->get();
  

           foreach ($biddingHistories as $key => $value) {
                     $result = 0;


                     if($value->type == 'open')
                     {


                      /*single*/
                      if($value->game_id == 3)
                      {

                       if($value->manageSatta->open_aakda == $value->digit)
                        {
                          $result = "Won";
                          $game_rate  = $value->StarlineGameRate->game_rate;
                         
                        } 
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }

                      
                       

                      }

                       /*single patti*/
                      elseif($value->game_id == 4 || $value->game_id == 5 || $value->game_id == 6   )
                      {
                        if($value->manageSatta->open_pana == $value->digit)
                        {
                            if($value->game_id == 4)
                            {
                             $game_rate  = $value->StarlineGameRate->game_rate;
                            }
                            elseif($value->game_id == 5)
                            {
                              $game_rate  = $value->StarlineGameRate->game_rate;
                            }
                            elseif($value->game_id == 6)
                            {
                              $game_rate  = $value->StarlineGameRate->game_rate;
                            }
                              $result = "Won";
                         
                        } 
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }
                        

                      }
   $payableAmount = $value->amount*$game_rate;
                     }
         

                      \App\Model\BiddingHistory::where('id',$value->id)->where('game_type',$manageSattaRecord->game_type)->where('run_status','n')->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);

if( $payableAmount > 0)
  {

                    $biddingHistory =  \App\Model\BiddingHistory::where('id',$value->id)->where('game_type',$manageSattaRecord->game_type)->where('user_id',$value->user_id)->first();
                  

                        $userUpdate = \App\User::where('id',$value->user->id);
                        $userUpdate->update([
                            'wallet' => $userUpdate->first()->wallet+$payableAmount]);

                      \App\Model\AccountStatement::create([
                          'user_id' => $value->user->id,
                          'amount' => $payableAmount,
                          'balance' => $userUpdate->first()->wallet, 
                           'message' => 'Win '.$manageSattaRecord->title. ' Time'.date('h:i A', strtotime($manageSattaRecord->open_end_time)). ' Digit '.$value->digit.'.',
                           'create_time' => \Carbon\Carbon::now(),
                           ]);

              $wonMessage = $value->message ."(Won) - ".$payableAmount;  
                nitificationSave($userUpdate->first()->id,$wonMessage);
                     

                 }

                   }
    if(count($biddingHistories) > 0)
           {
                $usersNitifi = \App\Model\BiddingHistory::where('game_type',$manageSattaRecord->game_type)->whereDate('create_time',\Carbon\Carbon::today())->where('manage_satta_id',$manageSattaId)->with('user','manageSatta','StarlineGameRate')->groupBy('user_id')->get();



           foreach ($usersNitifi as $key => $value) {
            
               $message = 'Result out for '. $manageSattaRecord->title. " ". $manageSattaType ." ". $pana;
                     $noti_status =  $value->notification_status;
                     $noti_token = $value->push_notification_token;


                      notification($message,$noti_status,$noti_token);

                      nitificationSave($value->id,$message);
           }
           }


}

//pre star line games result out

function moneyDistrebuteprestarlinegame($manageSattaId,$manageSattaType,$pana,$date)
{
   $manageSattaRecord = \App\Model\ManageSatta::where('id',$manageSattaId)->first();
   
    $ResultDataRecord = \App\Model\ResultData::where('id',$manageSattaId)->first();

    $biddingHistories = \App\Model\BiddingHistory::where('game_type',$ResultDataRecord->game_type)->whereDate('create_time',$date)->where('run_status','n')->where('manage_satta_id',$manageSattaId)->with('user','PriResultData','StarlineGameRate')->get();
  


           foreach ($biddingHistories as $key => $value) {
                     $result = 0;


                     if($value->type == 'open')
                     {


                      /*single*/
                      if($value->game_id == 3)
                      {

                       if($value->PriResultData->open_aakda == $value->digit)
                        {
                          $result = "Won";
                          $game_rate  = $value->StarlineGameRate->game_rate;
                         
                        } 
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }

                      
                       

                      }

                       /*single patti*/
                      elseif($value->game_id == 4 || $value->game_id == 5 || $value->game_id == 6   )
                      {
                        if($value->PriResultData->open_pana == $value->digit)
                        {
                            if($value->game_id == 4)
                            {
                             $game_rate  = $value->StarlineGameRate->game_rate;
                            }
                            elseif($value->game_id == 5)
                            {
                              $game_rate  = $value->StarlineGameRate->game_rate;
                            }
                            elseif($value->game_id == 6)
                            {
                              $game_rate  = $value->StarlineGameRate->game_rate;
                            }
                              $result = "Won";
                         
                        } 
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }
                        

                      }
   $payableAmount = $value->amount*$game_rate;
                     }
         

                      \App\Model\BiddingHistory::where('id',$value->id)->where('game_type',$ResultDataRecord->game_type)->where('run_status','n')->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);

if( $payableAmount > 0)
  {

                    $biddingHistory =  \App\Model\BiddingHistory::where('id',$value->id)->where('game_type',$ResultDataRecord->game_type)->where('user_id',$value->user_id)->first();
                  

                        $userUpdate = \App\User::where('id',$value->user->id);
                        $userUpdate->update([
                            'wallet' => $userUpdate->first()->wallet+$payableAmount]);

                      \App\Model\AccountStatement::create([
                          'user_id' => $value->user->id,
                          'amount' => $payableAmount,
                          'balance' => $userUpdate->first()->wallet, 
                           'message' => 'Win '.$manageSattaRecord->title. ' Time'.date('h:i A', strtotime($manageSattaRecord->open_end_time)). ' Digit '.$value->digit.'.',
                           'create_time' => \Carbon\Carbon::now(),
                           ]);

              $wonMessage = $value->message ."(Won) - ".$payableAmount;  
                nitificationSave($userUpdate->first()->id,$wonMessage);
                     

                 }

                   }
    if(count($biddingHistories) > 0)
           {
               
               //dd($biddingHistories);
                $usersNitifi = \App\User::get();

           foreach ($usersNitifi as $key => $value) {
            
               $message = 'Result out for '. $manageSattaRecord->title. " ". $manageSattaType ." ". $pana;
                     $noti_status =  $value->notification_status;
                     $noti_token = $value->push_notification_token;


                      notification($message,$noti_status,$noti_token);

                      nitificationSave($value->id,$message);
           }
           }


}

/*end pre star  game result out */


/*delhi game */
function moneyDistrebuteDelhiGame($manageSattaId,$pana)
{


 $manageSattaRecord = \App\Model\ManageSatta::where('id',$manageSattaId)->first();

 $from_date = \Carbon\CarbonImmutable::now()->add(-2, 'day');
 $to_date = \Carbon\Carbon::today();


if($manageSattaId == '24')
   {
    

      $biddingHistories = \App\Model\BiddingHistory::whereBetween(DB::raw('DATE(create_time)'), array($from_date, $to_date))->where('run_status','n')->where('manage_satta_id',$manageSattaId)->with('user','manageSatta','game')->get();

    }else{


      $biddingHistories = \App\Model\BiddingHistory::where('game_type',$manageSattaRecord->game_type)->whereDate('create_time',\Carbon\Carbon::today())->where('run_status','n')->where('manage_satta_id',$manageSattaId)->with('user','manageSatta','delhiGameRate')->get();
}

  //dd($biddingHistories);
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
                          $game_rate  = $value->delhiGameRate->game_rate;
                         
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
                     if($value->type == 'close')
                     {

                      /*single*/
                      if($value->game_id == 1)
                      {
                       if($value->manageSatta->close_aakda == $value->digit)
                        {
                          $result = "Won";
                          $game_rate  = $value->delhiGameRate->game_rate;
                         
                        } 
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }
                      }


                     }




                     /*close end*/

                     /*jodi  start*/
                     /*jodi*/
                        if($value->type == 'jodi')
                     {
                         
                       
                      if($value->game_id == 2)
                      {
                            
                     
                        if($value->manageSatta->close_jodi == $value->digit)
                        {
                          $result = "Won";
                          $game_rate  = $value->delhiGameRate->game_rate;
                         
                        } 
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }
                        

                      }
                    }
                    
                    


                     /*jodi end*/




                   $payableAmount = $value->amount*$game_rate;


                    
                       


                       \App\Model\BiddingHistory::where('id',$value->id)->where('game_type',$manageSattaRecord->game_type)->where('run_status','n')->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);
                     
                 
               

                 
                   
  if( $payableAmount > 0)
  {

                   

                    $biddingHistory =  \App\Model\BiddingHistory::where('id',$value->id)->where('game_type',$manageSattaRecord->game_type)->where('user_id',$value->user_id)->first();
                  

                        $userUpdate = \App\User::where('id',$value->user->id);
                        $userUpdate->update([
                            'wallet' => $userUpdate->first()->wallet+$payableAmount]);

                     if($value->type == 'open'){

                            \App\Model\AccountStatement::create([
                          'user_id' => $value->user->id,
                          'amount' => $payableAmount,
                          'balance' => $userUpdate->first()->wallet,
                          'message' => 'Win '.$manageSattaRecord->title. " ".strtoupper('Ander Haruf') .' Digit '.$value->digit.'.', 
                           'create_time' => \Carbon\Carbon::now(),
                           ]);

                        }elseif ($value->type == 'close') {

                            \App\Model\AccountStatement::create([
                          'user_id' => $value->user->id,
                          'amount' => $payableAmount,
                          'balance' => $userUpdate->first()->wallet,
                          'message' => 'Win '.$manageSattaRecord->title. " ".strtoupper('Bahar Haruf') .' Digit '.$value->digit.'.', 
                           'create_time' => \Carbon\Carbon::now(),
                           ]);
                          
                        }else{


                          \App\Model\AccountStatement::create([
                          'user_id' => $value->user->id,
                          'amount' => $payableAmount,
                          'balance' => $userUpdate->first()->wallet,
                          'message' => 'Win '.$manageSattaRecord->title. " ".strtoupper($value->type) .' Digit '.$value->digit.'.', 
                           'create_time' => \Carbon\Carbon::now(),
                           ]);
                        }


                   
                    

                      $wonMessage = $value->message ."(Won) - ".$payableAmount;  

                       nitificationSave($userUpdate->first()->id,$wonMessage);
                      //notification($wonMessage,$noti_status,$noti_token);

                 }

                   
           }

             if(count($biddingHistories) > 0)
             {


 $notification_user = \App\Model\BiddingHistory::where('game_type',$manageSattaRecord->game_type)->whereDate('create_time',\Carbon\Carbon::today())->where('manage_satta_id',$manageSattaId)->with('user','manageSatta','delhiGameRate')->groupBy('user_id')->get();

           
            foreach ($notification_user as $key => $data) {
            
               $message = 'Result out for '. $manageSattaRecord->title. " ". $pana;
              
                     $noti_status =  $data->user->notification_status;
                     $noti_token = $data->user->push_notification_token;
                     $user_id =$data->user->id;
                     

                      notification($message,$noti_status,$noti_token);

                      nitificationSave($data->user->id,$message);

 }
             }

           //       $usersNitifi = \App\User::get();



           // foreach ($usersNitifi as $key => $value) {
            
           //     $message = 'Result out for '. $manageSattaRecord->title. " ". $pana;
           //           $noti_status =  $value->notification_status;
           //           $noti_token = $value->push_notification_token;


           //            notification($message,$noti_status,$noti_token);

           //            nitificationSave($value->id,$message);
           

           
           
           
           
           
}
/*delhi game end*/


/*pre  delhi game result out */
function moneyDistrebutepreDelhiGame($manageSattaId,$pana,$date)
{


 $manageSattaRecord = \App\Model\ManageSatta::where('id',$manageSattaId)->first();

 $ResultDataRecord = \App\Model\ResultData::where('id',$manageSattaId)->first();

      $biddingHistories = \App\Model\BiddingHistory::where('game_type',$ResultDataRecord->game_type)->whereDate('create_time',$date)->where('run_status','n')->where('manage_satta_id',$manageSattaId)->with('user','PriResultData','delhiGameRate')->get();


    
           foreach ($biddingHistories as $key => $value) {
                     $result = 0;


                     if($value->type == 'open')
                     {


                      /*single*/
                      if($value->game_id == 1)
                      {

                       if($value->PriResultData->open_aakda == $value->digit)
                        {
                          $result = "Won";
                          $game_rate  = $value->delhiGameRate->game_rate;
                         
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
                     if($value->type == 'close')
                     {

                      /*single*/
                      if($value->game_id == 1)
                      {
                       if($value->PriResultData->close_aakda == $value->digit)
                        {
                          $result = "Won";
                          $game_rate  = $value->delhiGameRate->game_rate;
                         
                        } 
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }
                      }


                     }




                     /*close end*/

                     /*jodi  start*/
                     /*jodi*/
                        if($value->type == 'jodi')
                     {
                         
                       
                      if($value->game_id == 2)
                      {
                            
                     
                        if($value->PriResultData->close_jodi == $value->digit)
                        {
                          $result = "Won";
                          $game_rate  = $value->delhiGameRate->game_rate;
                         
                        } 
                        else
                        {
                          $result = "Loss";
                          $game_rate  = 0;
                        }
                        

                      }
                    }
                    
                    


                     /*jodi end*/




                   $payableAmount = $value->amount*$game_rate;


                    
                       


                       \App\Model\BiddingHistory::where('id',$value->id)->where('game_type',$ResultDataRecord->game_type)->where('run_status','n')->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                       ]);
                     
                 
                  

               
                   
  if( $payableAmount > 0)
  {

                   

                    $biddingHistory =  \App\Model\BiddingHistory::where('id',$value->id)->where('game_type',$ResultDataRecord->game_type)->where('user_id',$value->user_id)->first();
                  

                        $userUpdate = \App\User::where('id',$value->user->id);
                        $userUpdate->update([
                            'wallet' => $userUpdate->first()->wallet+$payableAmount]);

                     if($value->type == 'open'){

                            \App\Model\AccountStatement::create([
                          'user_id' => $value->user->id,
                          'amount' => $payableAmount,
                          'balance' => $userUpdate->first()->wallet,
                          'message' => 'Win '.$manageSattaRecord->title. " ".strtoupper('Ander Haruf') .' Digit '.$value->digit.'.', 
                           'create_time' => \Carbon\Carbon::now(),
                           ]);

                        }elseif ($value->type == 'close') {

                            \App\Model\AccountStatement::create([
                          'user_id' => $value->user->id,
                          'amount' => $payableAmount,
                          'balance' => $userUpdate->first()->wallet,
                          'message' => 'Win '.$manageSattaRecord->title. " ".strtoupper('Bahar Haruf') .' Digit '.$value->digit.'.', 
                           'create_time' => \Carbon\Carbon::now(),
                           ]);
                          
                        }else{


                          \App\Model\AccountStatement::create([
                          'user_id' => $value->user->id,
                          'amount' => $payableAmount,
                          'balance' => $userUpdate->first()->wallet,
                          'message' => 'Win '.$manageSattaRecord->title. " ".strtoupper($value->type) .' Digit '.$value->digit.'.', 
                           'create_time' => \Carbon\Carbon::now(),
                           ]);
                        }


                   
                    

                      $wonMessage = $value->message ."(Won) - ".$payableAmount;  

                       nitificationSave($userUpdate->first()->id,$wonMessage);
                      //notification($wonMessage,$noti_status,$noti_token);

                 }



                







                   
           }

 if(count($biddingHistories) > 0)
             {
           $notification_user = \App\Model\BiddingHistory::where('game_type',$manageSattaRecord->game_type)->whereDate('create_time',\Carbon\Carbon::today())->where('manage_satta_id',$manageSattaId)->with('user','manageSatta','delhiGameRate')->groupBy('user_id')->get();

           
            foreach ($notification_user as $key => $data) {
            
               $message = 'Result out for '. $manageSattaRecord->title. " ". $pana;
              
                     $noti_status =  $data->user->notification_status;
                     $noti_token = $data->user->push_notification_token;
                     $user_id =$data->user->id;
                     

                      notification($message,$noti_status,$noti_token);

                      nitificationSave($data->user->id,$message);

 }
}

            /* if(count($biddingHistories) > 0)
             {
                 $usersNitifi = \App\User::get();

           foreach ($usersNitifi as $key => $value) {
            
               $message = 'Result out for '. $manageSattaRecord->title. " ". $pana;
                     $noti_status =  $value->notification_status;
                     $noti_token = $value->push_notification_token;


                      notification($message,$noti_status,$noti_token);

                      nitificationSave($value->id,$message);
           }
             }*/

           
           
           
           
           
}
/* pre delhi game end*/

    function  notification($message,$noti_status,$noti_token)
{
 
//dd($message,$noti_status,$noti_token);
    if($noti_status == 'y')
    {

      $fcmUrl = 'https://fcm.googleapis.com/fcm/send';
      $token= $noti_token;

    $notification = array(
        'title' => "SKStar",
        'body' => $message,
        'sound' => true
    );
    
    //dd($notification);
    
    // $extraNotificationData = array("message" => $notification,"moredata" =>'dd');

    $fcmNotification = array(
        //'registration_ids' => $tokenList, //multple token array
        'to'        => $token, //single token
        'notification' => $notification,
        'data' =>  $notification
    
    );
    
    //dd($fcmNotification);

    $headers = array(
        'Authorization: key=AIzaSyDe4ajrK9VpZUZg-Kp62EixkFYRUidQdDM',
        'Content-Type: application/json'
    );


    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,'https://fcm.googleapis.com/fcm/send');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fcmNotification));
    $result = curl_exec($ch);
    
    $results = json_decode($result); 
//dd($results,$message);
    
    // \App\NotificationCheck::create([
    //     'user_id' => '1912',
    //     'status' => $results->{'success'},
    //   ]);
    
    curl_close($ch);

    }

    

}

 function  notification_admin($message,$noti_status,$noti_token,$user_id)
{
 
//dd($message,$noti_status,$noti_token);
    if($noti_status == 'y')
    {

      $fcmUrl = 'https://fcm.googleapis.com/fcm/send';
      $token= $noti_token;

    $notification = array(
        'title' => "SKStar",
        'body' => $message,
        'sound' => true
    );
    


    $fcmNotification = array(
        //'registration_ids' => $tokenList, //multple token array
        'to'        => $token, //single token
        'notification' => $notification,
        'data' =>  $notification
    
    );
    
    //dd($fcmNotification);

    $headers = array(
        'Authorization: key=AIzaSyDe4ajrK9VpZUZg-Kp62EixkFYRUidQdDM',
        'Content-Type: application/json'
    );


    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,'https://fcm.googleapis.com/fcm/send');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_TIMEOUT, 0);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fcmNotification));
    $result = curl_exec($ch);
    
    $results = json_decode($result); 

    \App\Notification::create([
        'user_id' => $user_id,
        'message' => $message,
        'status' => $results->{'success'},
      ]);  
    curl_close($ch);

    }
}


  function nitificationSave($userId,$message)
  {
      \App\Notification::create([
        'user_id' => $userId,
        'message' => $message,
      ]);

  }


function openGame()
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
                     $payableAmount = $value->amount*$game_rate;

                     \App\Model\BiddingHistory::where('id',$value->id)->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                    ]);

                    if( $value->result_status == "Won")
                    {
                      $userUpdate = \App\User::where('id',$value->user->id);
                        $userUpdate->update([
                            'wallet' => $userUpdate->first()->wallet+$payableAmount]);

                      \App\Model\AccountStatement::create([
                          'user_id' => $value->user->id,
                          'amount' => $value->payable_amount,
                          'balance' => $userUpdate->first()->wallet,
                          'message' => 'Got winning points.'
                           ]);

                    }






                   
           }

}

function closeGame()
{
   $biddingHistories = \App\Model\BiddingHistory::whereDate('created_at',\Carbon\Carbon::today())->where('run_status','n')->with('user','manageSatta','game')->get();

  

           foreach ($biddingHistories as $key => $value) {
                    
                     if($value->type == 'open')
                     {

                     }
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
                      $payableAmount = $value->amount*$game_rate;

                     \App\Model\BiddingHistory::where('id',$value->id)->update([
                        'result_status' => $result,
                        'payable_amount' => $payableAmount,
                        'run_status' => 'y',
                    ]);

                    if( $value->result_status == "Won")
                    {
                      $userUpdate = \App\User::where('id',$value->user->id);
                        $userUpdate->update([
                            'wallet' => $userUpdate->first()->wallet+$payableAmount]);

                      \App\Model\AccountStatement::create([
                          'user_id' => $value->user->id,
                          'amount' => $value->payable_amount,
                          'balance' => $userUpdate->first()->wallet,
                          'message' => 'Got winning points.'
                           ]);

                    }






                   
           }



}