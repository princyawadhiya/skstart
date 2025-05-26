<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class AccountStatement extends Model
{
      protected $guarded = ['id'];
     public function user()
    {
    	return $this->belongsTo('App\User','user_id');
    }

      public function scopeOrderAsc($query)
    {
      return  $this->orderBy('created_at','ASC');
    }

     public function scopeOrderDesc($query)
    {
      return  $this->orderBy('created_at','DESC');
    }
}
