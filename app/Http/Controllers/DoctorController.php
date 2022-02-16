<?php

namespace App\Http\Controllers;

use App\Model\Doctor;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $doctors = Doctor::with('user','department')->get();
        return response()->json($doctors, 200);
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
        $doctor = new Doctor;
        $doctor->name = $request->item['name'];
        $doctor->email = $request->item['email'];
        $doctor->phone = $request->item['phone'];
        $doctor->address = $request->item['address'];
        $doctor->designation = $request->item['designation'];
        $doctor->user_id = $request->item['user_id'];
        $doctor->department_id = $request->item['department_id'];
        $doctor->status = $request->item['status'];
        $doctor->save();

        return response()->json($doctor, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Doctor  $doctor
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $doctor = Doctor::whereId($id)->first();
        return response()->json($doctor, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Doctor  $doctor
     * @return \Illuminate\Http\Response
     */
    public function edit(Doctor $doctor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Doctor  $doctor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Doctor $doctor)
    {
        $doctor = Doctor::where('id', $request->item['id'])->first();
        $doctor->name = $request->item['name'];
        $doctor->email = $request->item['email'];
        $doctor->phone = $request->item['phone'];
        $doctor->address = $request->item['address'];
        $doctor->designation = $request->item['designation'];
        $doctor->user_id = $request->item['user_id'];
        $doctor->department_id = $request->item['department_id'];
        $doctor->status = $request->item['status'];
        $doctor->update();

        return response()->json($doctor, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Doctor  $doctor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Doctor $doctor, $id)
    {
        $doctor = Doctor::where('id',$id)->first();
        if($doctor != null)
        {
            $doctor->delete();
            return response()->json(null, 200);
        }
    }
}
