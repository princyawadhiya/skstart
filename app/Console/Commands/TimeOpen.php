<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\ManageSatta;
use App\Model\ResultData;
class TimeOpen extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'time:open';

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
        'open_action' => 'n'
     ]);

     $currentdate =  date("Y-m-d");
     
     $resultupdate = ResultData::where('open_input_result_date',$currentdate )->where('satta_id',1)->first();


     if($resultupdate){
        
     $manageSatta->update([
        'open_pana' => $resultupdate->open_pana,
        'open_number'=>$resultupdate->open_number,
        'open_aakda' =>$resultupdate->open_aakda,
        'open_update' =>$resultupdate->open_update,
        'open_input_result_date'=>$resultupdate->open_input_result_date,
     ]);

       $type='open';

  
       moneyDistrebute($manageSatta->id,$type,$resultupdate->open_pana);

 }
    }
}
