<?php

namespace App\Http\Controllers;

use App\Model\Nurse;
use Illuminate\Http\Request;

class NurseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $nurses = Nurse::with('user')->get();
        return response()->json($nurses, 200);
        
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

        $nurse = new Nurse;
        $nurse->name = $request->item['name'];
        $nurse->email = $request->item['email'];
        $nurse->phone = $request->item['phone'];
        $nurse->address = $request->item['address'];
        $nurse->status = $request->item['status'];
        $nurse->user_id = $request->item['user_id'];
        $nurse->save();

        return response()->json($nurse, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Nurse  $nurse
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $nurse = Nurse::whereId($id)->first();
        return response()->json($nurse, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Nurse  $nurse
     * @return \Illuminate\Http\Response
     */
    public function edit(Nurse $nurse)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Nurse  $nurse
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Nurse $nurse)
    {

        $nurse = Nurse::where('id', $request->item['id'])->first();

        $nurse->name = $request->item['name'];
        $nurse->email = $request->item['email'];
        $nurse->phone = $request->item['phone'];
        $nurse->address = $request->item['address'];
        $nurse->status = $request->item['status'];
        $nurse->user_id = $request->item['user_id'];
        $nurse->update();

        return response()->json($nurse, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Nurse  $nurse
     * @return \Illuminate\Http\Response
     */
    public function destroy(Nurse $nurse, $id)
    {
        $nurse = Nurse::where('id', $id)->first();
        if($nurse != null)
        {
            $nurse->delete();
            return response()->json(null, 200)->with(['message'=>'Nurse has deleted successfully.']);
        }
    }
}
