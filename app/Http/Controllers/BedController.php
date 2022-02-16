<?php

namespace App\Http\Controllers;

use App\Model\Bed;
use Illuminate\Http\Request;

class BedController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $beds = Bed::with('room')->get();
        return response()->json($beds, 200);
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
        $bed = new Bed;
        $bed->description = $request->item['description'];
        $bed->bed_number = $request->item['bed_number'];
        $bed->room_id = $request->item['room_id'];
        $bed->status = $request->item['status'];
        $bed->save();

        return response()->json($bed, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Bed  $bed
     * @return \Illuminate\Http\Response
     */
    public function show(Bed $bed)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Bed  $bed
     * @return \Illuminate\Http\Response
     */
    public function edit(Bed $bed)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Bed  $bed
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bed $bed)
    {
        $bed = Bed::where('id', $request->item['id'])->first();
        $bed->description = $request->item['description'];
        $bed->bed_number = $request->item['bed_number'];
        $bed->room_id = $request->item['room_id'];
        $bed->status = $request->item['status'];
        $bed->update();

        return response()->json($bed, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Bed  $bed
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bed $bed, $id)
    {
        $bed = Bed::where('id', $id)->first();
        if($bed != null)
        {
            $bed->delete();
            return response()->json($bed, 200);
        }
    }
}
