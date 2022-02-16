<?php

namespace App\Http\Controllers;

use App\Model\Donor;
use Illuminate\Http\Request;
use Carbon\Carbon;

class DonorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $donors = Donor::with('blood')->get();
        return response()->json($donors, 200);
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
        
        $donor = new Donor;
        $donor->name = $request->item['name'];
        $donor->email = $request->item['email'];
        $donor->phone = $request->item['phone'];
        $donor->sex = $request->item['sex'];
        $donor->age = $request->item['age'];
        $donor->date = $dt;
        $donor->blood_id = $request->item['blood_id'];
        $donor->status = $request->item['status'];
        $donor->save();

        return response()->json($donor, 200);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Donor  $donor
     * @return \Illuminate\Http\Response
     */
    public function show(Donor $donor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Donor  $donor
     * @return \Illuminate\Http\Response
     */
    public function edit(Donor $donor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Donor  $donor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Donor $donor)
    {
        $donor = Donor::where('id', $request->item['id'])->first();
        $donor->name = $request->item['name'];
        $donor->email = $request->item['email'];
        $donor->phone = $request->item['phone'];
        $donor->sex = $request->item['sex'];
        $donor->age = $request->item['age'];
        $donor->date = $request->item['date'];
        $donor->blood_id = $request->item['blood_id'];
        $donor->status = $request->item['status'];
        $donor->update();

        return response()->json($donor, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Donor  $donor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Donor $donor, $id)
    {
        $donor = Donor::where('id', $id)->first();
        if($donor != null)
        {
            $donor->delete();
            return response()->json(null, 200);
        }
    }
}
