<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
         Commands\PayWallet::class,
         /*time*/
         Commands\TimeOpen::class,
         Commands\TimeClose::class,

         /*kalyan*/
         Commands\KalyanOpen::class,
         Commands\KalyanClose::class,


           /*milanday*/
         Commands\MilanDayOpen::class,
         Commands\MilanDayClose::class,

         /*milannight*/
         Commands\MilanNightOpen::class,
         Commands\MilanNightClose::class,

     

          /*rajdhaniday*/
         Commands\RajdhaniDayOpen::class,
         Commands\RajdhaniDayClose::class,

          /*rajdhaninight*/
         Commands\RajdhaniNightOpen::class,
         Commands\RajdhaniNightClose::class,

       
         /*kalyan Night*/
         Commands\KalyanNightopen::class,
         Commands\KalyanNightclose::class,

         /*mumbai*/
         Commands\MumbaiOpen::class,
         Commands\MumbaiClose::class,

           /*SupremeDayClose*/
            Commands\SupremeDayOpen::class,
           Commands\SupremeDayClose::class,

            /*SupremeNightClose*/
            Commands\SupremeNightOpen::class,
           Commands\SupremeNightClose::class,

           /*NightTimeBazarClose*/
             Commands\NightTimeBazarOpen::class,
             Commands\NightTimeBazarClose::class,

            /*sunday one*/
             Commands\SundayOneOpen::class,
             Commands\SundayOneClose::class,
             /*sunday two*/
             Commands\SundayTwoOpen::class,
             Commands\SundayTwoClose::class,
             /*sunday three*/
             Commands\SundayThreeOpen::class,
             Commands\SundayThreeClose::class,

              /*Sridevi*/
              Commands\SrideviOpen::class,
              Commands\SrideviClose::class,

               /*Sridevi Night*/
              Commands\SrideviNightOpen::class,
              Commands\SrideviNightClose::class,

              

      

           

          /*allgamereset*/
           Commands\AllGameReset::class,

      


          /*allsundayreset*/
           Commands\SundayReset::class,
           
           /*Saturday */
           Commands\Saturday::class,
           /*SundayOn*/
           Commands\SundayOn::class,
           
           /*SundayOff*/
           Commands\SundayOff::class,
           
         /*Gali*/
         Commands\Galiopen::class,
         Commands\Galiclose::class,

          /*Desawar*/
         Commands\DesawarOpen::class,
         Commands\DesawarClose::class,

         /*Faridabad*/
         Commands\FaridabadClose::class,
         Commands\FaridabadOpen::class,

          /*Gaziabad*/
         Commands\GaziabadClose::class,
         Commands\GaziabadOpen::class,

         /* Desawar Reset */

         Commands\DesawarReset::class,

         /*Star line Game*/

          /*Ten*/
         Commands\StarLineTen::class,

            /*eleven*/
         Commands\StarLineeleven::class,

            /*twelve*/
         Commands\StarLinetwelve::class,

            /*thirteen*/
         Commands\StarLinethirteen::class,

            /*fourteen*/
         Commands\StarLinefourteen::class,

            /*fifteen*/
         Commands\StarLinefifteen::class,

            /*sixteen*/
         Commands\StarLinesixteen::class,

            /*seventeen*/
         Commands\StarLineseventeen::class,

            /*eighteen*/
         Commands\StarLineeighteen::class,

            /*nineteen*/
         Commands\StarLinenineteen::class,

           /*Twenty*/
         Commands\StarLinetwenty::class,

            /*Twentyone*/
         Commands\StarLinetwentyone::class,

         // AllgameresultupdateOpen

         Commands\AllgameresultupdateOpen::class,

          // AllgameresultupdateClose

         Commands\AllgameresultupdateClose::class,

         //AlldelhiresultupdateOpen
          Commands\AlldelhiresultupdateOpen::class,

          //AllstarresultupdateClose

          Commands\AllstarresultupdateClose::class,

          //AllstarresultupdateOpen

           Commands\AllstarresultupdateOpen::class,

    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('pay:wallet');

        /*time*/
        $schedule->command('time:open');
        $schedule->command('time:close');

        /*kalyan*/
         $schedule->command('kalyan:open');
         $schedule->command('kalyan:close');

          /*gali*/
         $schedule->command('Gali:open')->everyFiveMinutes();
         $schedule->command('Gali:close')->everyFiveMinutes();

         /*Desawar*/
         $schedule->command('Desawar:Open');
         $schedule->command('Desawar:Close');

         /*kalyan Night*/
         $schedule->command('KalyanNight:open');
         $schedule->command('KalyanNight:close');
          /*Gaziabad*/
         $schedule->command('Gaziabad:Open');
         $schedule->command('Gaziabad:Close');

          /*Faridabad*/
         $schedule->command('Faridabad:Open');
         $schedule->command('Faridabad:Close');

         /*milanday*/
          $schedule->command('milanday:open');
          $schedule->command('milanday:close');

          /*milannight*/
           $schedule->command('milannight:open');
          $schedule->command('milannight:close');

          /*rajdhaniday*/
           $schedule->command('rajdhaniday:open');
          $schedule->command('rajdhaniday:close');

          /*rajdhaninight*/
           $schedule->command('rajdhaninight:open');
           $schedule->command('rajdhaninight:close');

          /*mumbai*/
           $schedule->command('mumbai:open');
           $schedule->command('mumbai:close');

           /*SupremeDayClose*/
            $schedule->command('supremedayopen:open');
           $schedule->command('supremedayclose:close');

           /*supremenightclose*/
            $schedule->command('supremenightopen:open');
            $schedule->command('supremenightclose:close');

            /*nighttimebazarclose*/
              $schedule->command('nighttimebazaropen:open');
              $schedule->command('nighttimebazarclose:close');

               /*sundayone*/
              $schedule->command('sundayone:open');
              $schedule->command('sundayone:close');

               /*sundaytwo*/
              $schedule->command('sundaytwo:open');
              $schedule->command('sundaytwo:close');

               /*sundaythree*/
              $schedule->command('sundaythree:open');
              $schedule->command('sundaythree:close');

                /*Sridevi*/
              $schedule->command('srideviopen:open');
              $schedule->command('srideviclose:close');
               /*Sridevi night*/
              $schedule->command('sridevinightopen:open');
              $schedule->command('sridevinightclose:close');

        

          



             /*allgamereset*/
            $schedule->command('allgamereset:reset');
              /*allsundayreset*/
            $schedule->command('sundayreset:all');

                /* Desawar Reset */

            $schedule->command('Desawar:Reset');

           /*saturday off*/
            $schedule->command('saturday:off');

            /*sunday on */
            $schedule->command('sundayon:on');
            /*sunday off */
            $schedule->command('sundayoff:off');
            
            /*star line games */

            /*ten*/
            $schedule->command('Starline:ten');

            /*eleven */
            $schedule->command('Starline:eleven');

            /* twelve */
            $schedule->command('Starline:twelve');
            /*thirteen */
            $schedule->command('Starline:thirteen');

            /*fourteen */
            $schedule->command('Starline:fourteen');

            /*fifteen*/
            $schedule->command('Starline:fifteen');

            /*sixteen */
            $schedule->command('Starline:sixteen');

            /*seventeen */
            $schedule->command('Starline:seventeen');

            /*eighteen */
            $schedule->command('Starline:eighteen');

            /*nineteen */
            $schedule->command('Starline:nineteen');

            /*twenty */
            $schedule->command('Starline:twenty');

            /*twenty one */
            $schedule->command('Starline:twentyone');

             /*AllgameresultupdateOpen */ 

              $schedule->command('AllgameresultupdateOpen:Open');

               /*AllgameresultupdateClose */ 

              $schedule->command('AllgameresultupdateClose:Close');

              /*AlldelhiresultupdateOpen */ 

              $schedule->command('AlldelhiresultupdateOpen:Open');

               /*AllstarresultupdateClose */ 

              $schedule->command('AllstarresultupdateClose:Close');

              /*AllstarresultupdateOpen */ 

              $schedule->command('AllstarresultupdateOpen:Open');

      
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
