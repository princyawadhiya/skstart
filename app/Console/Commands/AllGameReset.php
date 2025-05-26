<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\ManageSatta;
use App\Model\ResultData;

class AllGameReset extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'allgamereset:reset';

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
        //  $manageSattas =  ManageSatta::where('status','y')->where('id','!=',6)->where('id','!=',7)->where('id','!=',11)->where('id','!=',12)->where('id','!=',13)->where('id','!=',24)->get();
        
         $manageSattas =  ManageSatta::where('status','y')->get();
         
          $ResultData =  ResultData::get();

         foreach ($manageSattas as $key => $value) {
            $value->update([
            'open_action' => 'y',
            'close_action' => 'y',

           
         ]);

         }
         
           foreach ($ResultData as $key => $value) {
            $value->update([
            'open_action' => 'y',
            'close_action' => 'y',

           
         ]);

         }

        
    }
}
