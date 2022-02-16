<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use DB;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    function __construct()
    {
        $this->middleware('permission:role-list|role-create|role_edit|role-delete',['only'=>['index','store']]);
        $this->middleware('permission:role-create',['only'=>['store']]);
        $this->middleware('permission:role-edit',['only'=>['show','update']]);
        $this->middleware('permission:role-delete', ['only'=>['destroy']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $roles = Role::orderBy('id','DESC')->get();
        return response()->json($roles, 200);
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
        $this->validate($request,[
            'name'=>'required|unique:roles,name',
            'permission'=>'required'
        ]);

        $role = new Role;
        $role->name = $request->item['name'];
        $role->save();
        $role->syncPermissions($request->item['permission']);

        return response()->json($role, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $role = Role::find($id);
        $rolePermissions = Permission::join("role_has_permissions","role_has_permissions.permission_id","=",'permissions.id')
            ->where("role_has_permissions.role_id",$id)
            ->get();

        return response()->json(["role"=>$role,"rolePermissions"=>$rolePermissions], 200);
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
        $this->validate($request->item,[
            'name'=>'required',
            'permission'=>'required'
        ]);

        $role = Role::where('id',$request->item['id'])->first();
        $role->name = $request->item['name'];
        $role->update();

        $role->syncPermissions($request->item['permission']);

        return response()->json($role, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $role = Role::where('id',$id)->first();
        if($role != null){
            $role->delete();
            return response()->json(null, 200)->with(['message'=>'Role has deleted successfully!']);
        }
    }
}
