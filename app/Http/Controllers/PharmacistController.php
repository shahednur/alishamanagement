<?php

namespace App\Http\Controllers;

use App\Model\Pharmacist;
use Illuminate\Http\Request;

class PharmacistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pharmacists = Pharmacist::with('user')->get();
        return response()->json($pharmacists, 200);
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
        $pharmacist = new Pharmacist;
        $pharmacist->name = $request->item['name'];
        $pharmacist->email = $request->item['email'];
        $pharmacist->phone = $request->item['phone'];
        $pharmacist->address = $request->item['address'];
        $pharmacist->status = $request->item['status'];
        $pharmacist->user_id = $request->item['user_id'];
        $pharmacist->save();

        return response()->json($pharmacist, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Pharmacist  $pharmacist
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $pharmacist = Pharmacist::whereId($id)->first();
        return response()->json($pharmacist, 200); 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Pharmacist  $pharmacist
     * @return \Illuminate\Http\Response
     */
    public function edit(Pharmacist $pharmacist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Pharmacist  $pharmacist
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pharmacist $pharmacist)
    {
        $pharmacist = Pharmacist::where('id', $request->item['id'])->first();

        $pharmacist->name = $request->item['name'];
        $pharmacist->email = $request->item['email'];
        $pharmacist->phone = $request->item['phone'];
        $pharmacist->address = $request->item['address'];
        $pharmacist->status = $request->item['status'];
        $pharmacist->user_id = $request->item['user_id'];
        $pharmacist->update();

        return response()->json($pharmacist, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Pharmacist  $pharmacist
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pharmacist $pharmacist, $id)
    {
        $pharmacist = Pharmacist::where('id', $id)->first();
        if($pharmacist != null)
        {
            $pharmacist->delete();
            return response()->json(null, 200);
        }
    }
}
