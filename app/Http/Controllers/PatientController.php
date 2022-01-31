<?php

namespace App\Http\Controllers;

use App\Model\Patient;
use Illuminate\Http\Request;
use Carbon\Carbon;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $patients = Patient::with('doctor','blood','room','bed')->get();
        return response()->json($patients, 200);
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
        $dt = Carbon::parse($request->item['dob'])->format('Y-m-d');
        $patient = new Patient;
        $patient->name = $request->item['name'];
        $patient->email = $request->item['email'];
        $patient->phone = $request->item['phone'];
        $patient->address= $request->item['address'];
        $patient->sex = $request->item['sex'];
        $patient->dob = $dt;
        $patient->doctor_id = $request->item['doctor_id'];
        $patient->blood_id = $request->item['blood_id'];
        $patient->room_id = $request->item['room_id'];
        $patient->bed_id = $request->item['bed_id'];
        $patient->save();

        return response()->json($patient, 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function show(Patient $patient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function edit(Patient $patient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Patient $patient)
    {
        $dt = Carbon::parse($request->item['dob'])->format('Y-m-d');
        $patient = Patient::where('id', $request->item['id'])->first();
        $patient->name = $request->item['name'];
        $patient->email = $request->item['email'];
        $patient->phone = $request->item['phone'];
        $patient->address= $request->item['address'];
        $patient->sex = $request->item['sex'];
        $patient->dob = $dt;
        $patient->doctor_id = $request->item['doctor_id'];
        $patient->blood_id = $request->item['blood_id'];
        $patient->room_id = $request->item['room_id'];
        $patient->bed_id = $request->item['bed_id'];
        $patient->update();

        return response()->json($patient, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function destroy(Patient $patient, $id)
    {
        $patient = Patient::where('id', $id)->first();
        if($patient != null)
        {
            $patient->delete();
            return response()->json(null, 200);
        }
    }
}
