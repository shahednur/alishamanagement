<?php

namespace App\Http\Controllers;

use App\Model\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rooms = Room::get();
        return response()->json($rooms, 200);
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
        $room = new Room;
        $room->name = $request->item['name'];
        $room->description = $request->item['description'];
        $room->limit = $request->item['limit'];
        $room->charge = $request->item['charge'];
        $room->status = $request->item['status'];
        $room->save();

        return response()->json($room, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function show(Room $room)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function edit(Room $room)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Room $room)
    {
        $room = Room::where('id', $request->item['id'])->first();
        $room->name = $request->item['name'];
        $room->description = $request->item['description'];
        $room->limit = $request->item['limit'];
        $room->charge = $request->item['charge'];
        $room->status = $request->item['status'];
        $room->update();

        return response()->json($room, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Room  $room
     * @return \Illuminate\Http\Response
     */
    public function destroy(Room $room, $id)
    {
        $room = Room::where('id', $id)->first();
        if($room != null)
        {
            $room->delete();
            return response()->json($room, 200);
        }
    }
}
