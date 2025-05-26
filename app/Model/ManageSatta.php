<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class ManageSatta extends Model
{
	 public function getRouteKeyName()
	    {
	      return "slug";
	    }
    
    protected $guarded = ['id'];

     public function scopeOrderAsc($query)
    {
      return  $this->orderBy('title','ASC');
    }

     public function scopeOrderDesc($query)
    {
      return  $this->orderBy('title','DESC');
    }

     public function scopeIsActive($query)
    {
      return  $this->where('status','y');
    }



}
