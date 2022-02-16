<?php

namespace App\Http\Controllers;

use App\Model\Laboratorist;
use Illuminate\Http\Request;

class LaboratoristController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $laboratorists = Laboratorist::with('user')->get();
        return response()->json($laboratorists, 200);
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
        $laboratorist = new Laboratorist;
        $laboratorist->name = $request->item['name'];
        $laboratorist->email = $request->item['email'];
        $laboratorist->phone = $request->item['phone'];
        $laboratorist->address = $request->item['address'];
        $laboratorist->status = $request->item['status'];
        $laboratorist->user_id = $request->item['user_id'];
        $laboratorist->save();

        return response()->json($laboratorist, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Laboratorist  $laboratorist
     * @return \Illuminate\Http\Response
     */
    public function show(Laboratorist $laboratorist)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Laboratorist  $laboratorist
     * @return \Illuminate\Http\Response
     */
    public function edit(Laboratorist $laboratorist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Laboratorist  $laboratorist
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Laboratorist $laboratorist)
    {
        $laboratorist = Laboratorist::where('id', $request->item['id'])->first();
        $laboratorist->name = $request->item['name'];
        $laboratorist->email = $request->item['email'];
        $laboratorist->phone = $request->item['phone'];
        $laboratorist->address = $request->item['address'];
        $laboratorist->status = $request->item['status'];
        $laboratorist->user_id = $request->item['user_id'];
        $laboratorist->update();

        return response()->json($laboratorist, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Laboratorist  $laboratorist
     * @return \Illuminate\Http\Response
     */
    public function destroy(Laboratorist $laboratorist, $id)
    {
        $laboratorist = Laboratorist::where('id', $id)->first();
        if($laboratorist != null)
        {
            $laboratorist->delete();
            return response()->json(null, 200)->with(['message'=>'Laboratorist has deleted successfully.']);
        }
    }
}
