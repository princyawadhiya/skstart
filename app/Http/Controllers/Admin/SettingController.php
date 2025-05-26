<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Setting;
use App\Model\NoticeBoard;
use App\Model\HowToPlay;
use App\Model\ManageSatta;
use App\Model\PrivacyPolicy;

class SettingController extends Controller
{
    public function settingsGet(Request $request)
    {
    	$setting = Setting::first();

       return view('admin.setting',compact('setting'));
    }

    public function settingsPost(Request $request)
    {
      $this->validate($request,[
           
            'whatsapp_number' => 'required',
            'message' => 'nullable',
            'game_status' => 'required'
            
        ]);

      if($request->game_status == 'y')
      {
        $manageSatta = ManageSatta::where('status','y')->update([
          'both_action' => 'y']);

      }else if($request->game_status == 'n')
      {
        $manageSatta = ManageSatta::where('status','y')->update([
          'both_action' => 'n']);

      }

      Setting::first()->update([
      	
        'whatsapp_number' => $request->whatsapp_number,
        'message' => $request->message,
      	'game_status' => $request->game_status,
      ]);

        return redirect()->back()->with('success','Setting updated successfully.');

    }


      public function howToPlayGet()
    {
    	$howToPlay = HowToPlay::first();
      return view('admin.how-to-play',compact('howToPlay'));
    }

    public function howToPlayPost(Request $request)
    {
    


      $this->validate($request,[
      	'how_to_play' => 'required']);

 

      HowToPlay::first()->update([
      	'how_to_play' => $request->how_to_play,
      ]);

      return redirect()->back()->with('success','Updated successfully.');


    }

    /*privacy policies*/

     public function privacyPolicies()
    {
      $privacyPolicies = PrivacyPolicy::first();
      return view('admin.privacy-policies',compact('privacyPolicies'));
    }

    public function privacyPoliciesPost(Request $request)
    {
    


      $this->validate($request,[
        'privacy_police' => 'required']);

 

      PrivacyPolicy::first()->update([
        'privacy_police' => $request->privacy_police,
      ]);

      return redirect()->back()->with('success','Updated successfully.');


    }

     public function noticeBoardGet()
    {
      $noticeBoard = NoticeBoard::first();

     
      return view('admin.notice-board',compact('noticeBoard'));
    }

    public function noticeBoardPost(Request $request)
    {
    


      $this->validate($request,[
        'notice_board' => 'required']);

 

      NoticeBoard::first()->update([
        'notice_board' => $request->notice_board,
      ]);

      return redirect()->back()->with('success','Updated successfully.');


    }
}
