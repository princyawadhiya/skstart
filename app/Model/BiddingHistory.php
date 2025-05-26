<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class BiddingHistory extends Model
{
      protected $guarded = ['id'];
      
      public function scopeOrderAsc($query)
    {
      return  $this->orderBy('created_at','ASC');
    }

     public function scopeOrderDesc($query)
    {
      return  $this->orderBy('created_at','DESC');
    }

    public function user()
    {
    	return $this->belongsTo('App\User','user_id');
    }

    public function manageSatta()
    {
    	return $this->belongsTo('App\Model\ManageSatta','manage_satta_id');
    }

    public function PriResultData()
    {
      return $this->belongsTo('App\Model\ResultData','manage_satta_id');
    }

     public function game()
    {
    	return $this->belongsTo('App\Model\Game','game_id');
    }
    
     public function delhiGameRate()
    {
    	return $this->belongsTo('App\Model\DelhiGameRate','game_id');
    }
    public function StarlineGameRate()
    {
    	return $this->belongsTo('App\Model\StarlineGameRate','game_id');
    }
    
    
    
   



}
