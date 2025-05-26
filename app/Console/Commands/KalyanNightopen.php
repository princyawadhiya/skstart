<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\ManageSatta;
use App\Model\ResultData;
class KalyanNightopen extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'KalyanNight:open';

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
        $manageSatta =  ManageSatta::where('id',47)->where('status','y')->first();
         $manageSatta->update([
            'open_action' => 'n'
         ]);
         

   
    }
    
    }

