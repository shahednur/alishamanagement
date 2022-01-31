<?php

namespace App\Http\Controllers;

use App\Model\Appointment;
use Illuminate\Http\Request;
use Carbon\Carbon;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $appoints = Appointment::with('patient','doctor','room')->get();
        return response()->json($appoints, 200);
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
        $dt = Carbon::parse($request->item['date'])->format('Y-m-d');
        
        $appoint = new Appointment;
        $appoint->patient_id = $request->item['patient_id'];
        $appoint->doctor_id = $request->item['doctor_id'];
        $appoint->room_id = $request->item['room_id'];
        $appoint->s_time = $request->item['s_time'];
        $appoint->e_time = $request->item['e-time'];
        $appoint->remarks = $request->item['remarks'];
        $appoint->date = $dt;
        $appoint->status = $request->item['status'];
        $appoint->save();

        return response()->json($appoint, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Appointment $appointment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Appointment $appointment)
    {
        $dt = Carbon::parse($request->item['date'])->format('Y-m-d');

        $appoint = Appointment::where('id', $request->item['id'])->first();
        $appoint->patient_id = $request->item['patient_id'];
        $appoint->doctor_id = $request->item['doctor_id'];
        $appoint->room_id = $request->item['room_id'];
        $appoint->s_time = $request->item['s_time'];
        $appoint->e_time = $request->item['e-time'];
        $appoint->remarks = $request->item['remarks'];
        $appoint->date = $dt;
        $appoint->status = $request->item['status'];
        $appoint->update();

        return response()->json($appoint, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Appointment $appointment, $id)
    {
        $appoint = Appointment::where('id', $id)->first();
        if($appoint != null)
        {
            $appoint->delete();
            return response()->json(null, 200);
        }
    }
}
