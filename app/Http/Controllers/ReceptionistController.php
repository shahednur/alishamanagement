<?php

namespace App\Http\Controllers;

use App\Model\Receptionist;
use Illuminate\Http\Request;

class ReceptionistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $receptionists = Receptionist::with('user')->get();
        return response()->json($receptionists, 200);
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
        $receptionist = new Receptionist;
        $receptionist->name = $request->item['name'];
        $receptionist->email = $request->item['email'];
        $receptionist->phone = $request->item['phone'];
        $receptionist->address = $request->item['address'];
        $receptionist->status = $request->item['status'];
        $receptionist->user_id = $request->item['user_id'];
        $receptionist->save();

        return response()->json($receptionist, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Receptionist  $receptionist
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $receptionist = Receptionist::whereId($id)->first();
        return response()->json($receptionist, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Receptionist  $receptionist
     * @return \Illuminate\Http\Response
     */
    public function edit(Receptionist $receptionist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Receptionist  $receptionist
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Receptionist $receptionist)
    {
        $receptionist = Receptionist::where('id', $request->item['id'])->first();
        $receptionist->name = $request->item['name'];
        $receptionist->email = $request->item['email'];
        $receptionist->phone = $request->item['phone'];
        $receptionist->address = $request->item['address'];
        $receptionist->status = $request->item['status'];
        $receptionist->user_id = $request->item['user_id'];
        $receptionist->update();

        return response()->json($receptionist, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Receptionist  $receptionist
     * @return \Illuminate\Http\Response
     */
    public function destroy(Receptionist $receptionist, $id)
    {
        $receptionist = Receptionist::where('id', $id)->first();
        if($receptionist != null)
        {
            $receptionist->delete();
            return response()->json(null, 200)->with(['message'=>'Nurse has deleted successfully.']);
        }
    }
}
