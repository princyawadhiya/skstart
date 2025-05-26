<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\ManageSatta;

class SrideviClose extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'srideviclose:close';

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
       $manageSatta =  ManageSatta::where('id',14)->where('status','y')->first();
         $manageSatta->update([
            'close_action' => 'n'
         ]);
    }
}
