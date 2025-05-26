<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\ResultData;
use App\Model\ManageSatta;
class AllgameresultupdateOpen extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'AllgameresultupdateOpen:Open';

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

    $resultupdate = ResultData::where('open_update',$currentdatetime)->where('game_type','3')->get();

   if ($resultupdate) {

   foreach ($resultupdate as $key => $value) {


     \App\Model\ManageSatta::where('id',$value->satta_id)->where('status','y')->where('open_action','n')->update([
                   'open_pana' => $value->open_pana,
                   'open_number'=>$value->open_number,
                   'open_aakda' =>$value->open_aakda,
                  'open_update' =>$value->open_update,
                  'open_input_result_date'=>$value->open_input_result_date,
                       ]);



       $type='open';

  
       moneyDistrebute($value->satta_id,$type,$value->open_pana);

        }
          
    }
    }
}
