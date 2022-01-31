<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Blood;

class BloodController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bloods = Blood::get();
        return response()->json($bloods, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $blood = new Blood;
        $blood->group = $request->item['group'];
        $blood->status = $request->item['status'];
        $blood->save();

        return response()->json($blood, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Blood  $bloods
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Blood $bloods)
    {
        $blood = Blood::where('id', $request->item['id'])->first();
        $blood->group = $request->item['group'];
        $blood->status = $request->item['status'];
        $blood->update();

        return response()->json($blood, 200);
    }
}
