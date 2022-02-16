<?php

namespace App\Http\Controllers;

use App\Model\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $departments = Department::with('department')->get();
        return response()->json($departments, 200);
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
        $department = new Department;
        $department->name = $request->item['name'];
        $department->description = $request->item['description'];
        $department->department_id = $request->item['department_id'];
        $department->status = $request->item['status'];
        $department->save();

        return response()->json($department, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $department = Department::whereId($id)->first();
        return response()->json($department, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function edit(Department $department)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Department $department)
    {
        $department = Department::where('id', $request->item['id'])->first();

        $department->name = $request->item['name'];
        $department->description = $request->item['description'];
        $department->department_id = $request->item['department_id'];
        $department->status = $request->item['status'];
        $department->update();

        return response()->json($department, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Department  $department
     * @return \Illuminate\Http\Response
     */
    public function destroy(Department $department, $id)
    {
        $department = Department::where('id', $id)->first();
        if($department != null){
            $department->delete();
            return response()->json(null, 200)->with(['message'=>'Department has deleted successfully!']);
        }
    }
}
