<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\ManageSatta;

class SundayOff extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sundayoff:off';

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
        
          /**
     * time,bazar , Milan day are closed on sunday
     *
     * @return mixed
     */
        
        
       $manageSatta =  ManageSatta::whereIn('id',['1','3'])->where('status','y')->get();

        foreach ($manageSatta as $key => $value) {
           $value->update([
            'open_action' => 'n',
            'close_action' => 'n'
         ]);
        }
         
    }
}
