<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\ManageSatta;
use App\Model\ResultData;
class TimeClose extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'time:close';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
          $manageSatta =  ManageSatta::where('id',1)->where('status','y')->first();
         $manageSatta->update([
            'close_action' => 'n'
         ]);
 $currentdate =  date("Y-m-d");
     
     $resultupdate = ResultData::where('close_input_result_date',$currentdate )->where('satta_id',47)->first();


     if($resultupdate){
        
    $manageSatta->update([
                    'close_pana' => $resultupdate->close_pana,
                    'close_number' => $resultupdate->close_number,
                    'close_aakda' =>$resultupdate->close_aakda,
                    'close_jodi' => $resultupdate->close_jodi,
                    'close_update' => strtotime("now"),
                    'close_input_result_date'=>$resultupdate->close_input_result_date,
                ]);

       $type='close';

  
       moneyDistrebute($manageSatta->id,$type,$resultupdate->open_pana);

 }
    }
}
