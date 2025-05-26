<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Model\ManageSatta;

class SundayReset extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sundayreset:all';

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
        $manageSattas =  ManageSatta::where('status','y')->whereIn('id',['11','12','13'])->get();

         foreach ($manageSattas as $key => $value) {
            $value->update([
            'open_action' => 'y',
            'close_action' => 'y',
            'open_pana' => null,
            'open_number' => null,
            'open_aakda' => null,
            'close_pana' => null,
            'close_number' => null,
            'close_aakda' => null,
            'close_jodi' => null,
           
         ]);

         }
    }
}
