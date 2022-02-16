<?php

namespace App\Http\Controllers;

use App\Model\Accountant;
use Illuminate\Http\Request;

class AccountantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $accountants = Accountant::with('user')->get();
        return response()->json($accountants, 200);
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
        $accountant = new Accountant;
        $accountant->name = $request->item['name'];
        $accountant->email = $request->item['email'];
        $accountant->phone = $request->item['phone'];
        $accountant->address = $request->item['address'];
        $accountant->status = $request->item['status'];
        $accountant->user_id = $request->item['user_id'];
        $accountant->save();

        return response()->json($accountant, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Accountant  $accountant
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $accountant = Accountant::whereId($id)->first();
        return response()->json($accountant, 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Accountant  $accountant
     * @return \Illuminate\Http\Response
     */
    public function edit(Accountant $accountant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Accountant  $accountant
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Accountant $accountant)
    {
        $accountant = Accountant::where('id', $request->item['id'])->first();
        $accountant->name = $request->item['name'];
        $accountant->email = $request->item['email'];
        $accountant->phone = $request->item['phone'];
        $accountant->address = $request->item['address'];
        $accountant->status = $request->item['status'];
        $accountant->user_id = $request->item['user_id'];
        $accountant->update();

        return response()->json($accountant, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Accountant  $accountant
     * @return \Illuminate\Http\Response
     */
    public function destroy(Accountant $accountant, $id)
    {
        $accouontant = Accountant::where('id', $id)->first();
        if($accouontant != null)
        {
            $accouontant->delete();
            return response()->json(null, 200)->with(['message'=>'Accountant has deleted successfully.']);
        }
    }
}
