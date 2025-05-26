<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class WithdralPoint extends Model
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
}
