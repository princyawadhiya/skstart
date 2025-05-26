<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\ManageSatta;

class SundayOn extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sundayon:on';

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
       $manageSatta =  ManageSatta::whereIn('id',['8','9','14','15'])->where('status','y')->get();

        foreach ($manageSatta as $key => $value) {
           $value->update([
            'open_action' => 'y',
            'close_action' => 'y'
         ]);
        }
         
    }
}
