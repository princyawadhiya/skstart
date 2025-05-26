<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\AccountStatement;

class AccountStatementsController extends Controller
{
    public function index()
    {
    	$accountStatement = AccountStatement::orderDesc()->get();
    	return view('admin.account-statement',compact('accountStatement'));
    }
}
