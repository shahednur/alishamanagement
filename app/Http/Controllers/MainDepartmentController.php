<?php

namespace App\Http\Controllers;

use App\Model\MainDepartment;
use Illuminate\Http\Request;

class MainDepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $mainDepartments = MainDepartment::get();
        return response()->json($mainDepartments, 200);
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
        $mainDepartment = new MainDepartment;
        $mainDepartment->name = $request->item['name'];
        $mainDepartment->description = $request->item['description'];
        $mainDepartment->status = $request->item['status'];
        $mainDepartment->save();

        return response()->json($mainDepartment, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\MainDepartment  $mainDepartment
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $main = MainDepartment::whereId($id)->first();
        return response()->json($main, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\MainDepartment  $mainDepartment
     * @return \Illuminate\Http\Response
     */
    public function edit(MainDepartment $mainDepartment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\MainDepartment  $mainDepartment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MainDepartment $mainDepartment)
    {
        $main = MainDepartment::where('id', $request->item['id'])->first();

        $main->name = $request->item['name'];
        $main->description = $request->item['description'];
        $main->status = $request->item['status'];
        $main->update();

        return response()->json($main, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\MainDepartment  $mainDepartment
     * @return \Illuminate\Http\Response
     */
    public function destroy(MainDepartment $mainDepartment, $id)
    {
        $main = MainDepartment::where('id', $id)->first();
        if($main != null){
            $main->delete();
            return response()->json(null, 200)->with(['message'=>'Main Department has deleted successfully!']);
        }
    }
}
