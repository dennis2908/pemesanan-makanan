<?php

namespace App\Http\Controllers;

use App\Models\Order;

use Illuminate\Http\Request;
use Validator;
use App\RabbitMQ\OrderConfirmation;
use App\RabbitMQ\OrderProcess;
use DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Redis;
class OrderController extends Controller
{
    public function index()
    {
        $data = Order::latest()->get();
		
		return response()->json(['result'=>$data]);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [

            'menu' => 'required|min:3',
            'email' => 'required|min:3'
      ]);
      
      
      if ($validator->passes()) {
          $id = DB::table('orders')->insertGetId([
            'menu' => $request->menu,
            'email' =>$request->email,
            'status' => 'pending',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
          ]);
          $idRed = microtime();
          Redis::set($idRed, $request->email);
        //   $value = Redis::get('key');
          $OrderConfirmation = new OrderConfirmation();
          $OrderConfirmation->publish($idRed);
          $OrderProcess = new OrderProcess();
          $OrderProcess->publish($id);

          return response()->json(['success'=>'Added new record.']);

      }

      return response()->json(['error'=>$validator->errors()->all()]);
    }
}