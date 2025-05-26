<?php

namespace App;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable , HasApiTokens;
    

    public function findForPassport($identifier) {
        return $this->orWhere('email', $identifier)->orWhere('username', $identifier)->orWhere('mobile_number', $identifier)->first();
   }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 
        'email', 
        'password',
        'api_token',
        'mobile_number',
        'username',
        'password_string',
        'address',
        'bank_name',
        'branch_name',
        'account_number',
         'ifsc',
         'mobile_verified_at',
         'wallet'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function getRouteKeyName()
    {
      return "username";
    }

    public function scopeOrderAsc($query)
    {
      return  $this->orderBy('name','ASC');
    }

     public function scopeOrderDesc($query)
    {
      return  $this->orderBy('name','DESC');
    }

    public function scopeTypeUser($query)
    {
      $query->where('user_type','user');
    }

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function biddingHistories()
    {
        return $this->hasMany("App\Model\BiddingHistory")->orderBy('id','DESC');
    }

    public function accountStatements()
    {
        return $this->hasMany("App\Model\AccountStatement")->orderBy('id','DESC');;
    }






     public function walletHistories()
    {
        return $this->hasMany("App\Model\WalletHistory")->orderBy('id','DESC');
    }


    

    


 

    
}
