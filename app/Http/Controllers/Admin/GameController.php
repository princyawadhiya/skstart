<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Game;
use App\Model\StarlineGameRate;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Validator;

class GameController extends Controller
{
    public function index()
    {
    	$games = Game::get();
    	return view('admin.game-index',compact('games'));
    }

     /*satta delete*/

    public function gameDelete(Request $request)
    {

         $rules = [
          'id' => 'required'];

    
        $validation = Validator::make(Input::all(),$rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;

            
        }
        else
        {
            $manageSatta = Game::where('id',$request->id)->delete();
            $response['status'] = true;
            $response['message'] = "deleted successfully.";
        }
         return response()->json($response);

    }

    /* game edit*/
    public function gameEdit(Request $request)
    {
        

        $rules = [
          'id' => 'required',
           ];

    
        $validation = Validator::make(Input::all(),$rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;

            return response()->json($response);
        }
        else
        {

            $game = game::find($request->id);
            
               echo view('admin.model.game-edit')->with([
                'game' => $game])->render();
    

        }
    }

    /*game update*/
     public function gameUpdate(Request $request)
    {
      
         $rules = [
          'game_name' => 'required',
          'game_rate' => 'required|numeric',
          'game_rate_limit' => 'required|numeric',
          'status' => 'required',
           'id' => 'required',
         
          

      ];

    
        $validation = Validator::make(Input::all(),$rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {
             $response['status'] = true;

             Game::where('id',$request->id)->update([
                'name' => $request->game_name,
                'game_rate' => $request->game_rate,
                'game_rate_limit' => $request->game_rate_limit,
                'status' => $request->status,
               
             ]);
                
        
                

        }

         return response()->json($response);
    }

        /*game add*/
     public function gameSave(Request $request)
    {
      
         $rules = [
          'game_name' => 'required',
          'game_rate' => 'required|numeric',
          'game_rate_limit' => 'required|numeric',
          'status' => 'required',
          
         
          

      ];

    
        $validation = Validator::make(Input::all(),$rules);

        if ($validation->fails()) {

            $response['errors'] = $validation->getMessageBag()->toArray();
            $response['status'] = false;
        }
        else
        {
        	/*slug generate*/

             $game = Game::orderBy('id','DESC')->first();

            if($game == null )
            {
              $slugId = '1';
            }
            else
            {
             $slugId =  $game->id+1;
            }


             $response['status'] = true;

             StarlineGameRate::create([
             	  'slug' => str_limit(str_slug($request->input('game_name').'-'.$slugId),50),
                'name' => $request->game_name,
                'game_rate' => $request->game_rate,
                'game_rate_limit' => $request->game_rate_limit,
                'status' => $request->status,
               
             ]);
                
        
                

        }

         return response()->json($response);
    }
}
