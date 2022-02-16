<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Spatie\Permission\Models\Role;
use DB;
use Hash;
use Illuminate\Support\Arr;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::get();
        return response()->json($users, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request->item,[
            'name'=>'required',
            'email'=>'required|email|unique:users,email',
            'password'=>'required|same:confirm-password',
            'roles'=>'required'
        ]);

        $user = new User;
        $user->name = $request->item['name'];
        $user->email = $request->item['email'];
        $user->password = Hash::make($request->item['password']);
        $user->save();

        $user->assignRole($request->input('roles'));

        return response()->json($user,200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        return response()->json($user, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request->item, [
            'name'=> 'required',
            'email'=> 'required|email|unique:users,email,'.$request->item['id'],
            'password'=> 'same:confirm-password',
            'roles' => 'required'
        ]);

        if(!empty($request->item['password'])){
            $request->item['password'] = Hash::make($request->item['password']);
        }else{
            $request->item = Arr::except($request->item, array('password'));
        }


        $user = User::where('id',$request->item['id'])->first();
        $user->name = $request->item['name'];
        $user->email = $request->item['email'];
        $user->password = Hash::make($request->item['password']);
        $user->update();

        DB::table('model_has_roles')->where('model_id', $id)->delete();

        $user->assignRole($request->item['roles']);

        return response()->json($user, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::where('id',$id)->first();
        if($user != null){
            $user->delete();
            return response()->json(null, 200)->with(['message'=>'User Has deleted successfully!']);
        }
    }
}
