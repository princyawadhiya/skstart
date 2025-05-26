<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Verify extends Model
{
    public function user()
    {
    	return $this->belongsTo('App\User','user_id');
    }
     protected $guarded = ['id'];

     public function scopeOrderAsc($query)
    {
      return  $this->orderBy('created_at','ASC');
    }

     public function scopeOrderDesc($query)
    {
      return  $this->orderBy('created_at','DESC');
    }
}
