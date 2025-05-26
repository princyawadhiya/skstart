<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Support\Facades\Hash;
use App\User;

class ChangePasswordController extends Controller
{
     public function __construct()
    {
        $this->middleware('auth:web');
    }

    protected $redirectTo = '/home';

    public function changePassword()
    {
        return view('admin.change-password');
    }

    public function changePasswordPost(Request $request)
    {

        $this->validate($request,[
            'current_password' => 'required',
            'new_password' => 'required|confirmed',
            'new_password_confirmation' => 'required',
        ]);



        if (Hash::check($request->current_password, Auth::user()->password)) {
            // The passwords match...
            User::where('id',Auth::id())->update([
                'password' => bcrypt($request->new_password),
                'password_string' => $request->new_password,
            ]);

            return redirect()->back()->with('successPassword','Password has been changed successfully.');
        }
        else
        {

            return redirect()->back()->withInput($request->only(['current_password','new_password','new_password_confirmation']))->with('NotMatchError','Current password is wrong .');

        }
    }
}
