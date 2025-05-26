<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class DelhiGameRate extends Model
{
   public function getRouteKeyName()
    {
      return "slug";
    }
    
    protected $guarded = ['id'];
    
    public function scopeIsActive($query)
    {
       return  $this->where('status','y');
    }
}
