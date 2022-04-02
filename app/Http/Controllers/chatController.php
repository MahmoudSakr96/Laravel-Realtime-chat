<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\massage;
use App\Models\user;
use Illuminate\Support\Facades\DB;

class chatController extends Controller
{
    public function index (){
        
        return view('chat');
        

    }
    public function sendMassage(Request $request){
        event(
            new massage(
                
                $request->input('username'),
                $request->input('massage')
            )
        );
        return ['sucess'=>true];

    }
}
