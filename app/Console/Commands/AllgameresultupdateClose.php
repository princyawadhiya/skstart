<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\ResultData;
use App\Model\ManageSatta;

class AllgameresultupdateClose extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'AllgameresultupdateClose:Close';

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
       $currentdatetime =  strtotime(date("Y-m-d H:i",strtotime("now")));


   $resultupdate = ResultData::where('close_update',$currentdatetime)->where('game_type','1')->get();

   if ($resultupdate) {

     foreach ($resultupdate as $key => $value) {


     \App\Model\ManageSatta::where('id',$value->satta_id)->where('status','y')->where('close_action','n')->update([
                    'close_pana' => $value->close_pana,
                    'close_number' => $value->close_number,
                    'close_aakda' =>$value->close_aakda,
                    'close_jodi' => $value->close_jodi,
                    'close_update' => strtotime("now"),
                    'close_input_result_date'=>$value->close_input_result_date,
                       ]);



       $type='close';

  
       moneyDistrebute($value->satta_id,$type,$value->open_pana);

        }
    }
        
    }
}
