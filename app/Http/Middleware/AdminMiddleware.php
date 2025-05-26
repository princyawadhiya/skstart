<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

       
        if($request->user()->user_type == 'admin')
        {
             return $next($request);
        }
        elseif($request->user()->user_type == 'user')
        {


            Auth::guard('web')->logout();
           return redirect()->route('login');
        }
        else
        {
            Auth::guard('web')->logout();
            return redirect()->route('login');
        }
       
    }
}
