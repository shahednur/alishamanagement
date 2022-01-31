<?php

namespace App\Http\Controllers;

use App\Model\Project;
use Illuminate\Http\Request;
use DateTime;
use Carbon\Carbon;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::get();
        return response()->json($projects,200);
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
        // return $request;
        // $this->validate($request,[
        //     'name' => 'required|string|max:255',
        //     'project_code' => 'required|integer',
        //     'initial_value' => 'required|decimal|max:9',
        //     'revised_value' => 'required|decimal|max:9',
        //     'start_date' => 'required|date',
        //     'location' => 'required|string',
        //     'noa' => 'required|integer|max:191',
        //     'narration' => 'required|string|max:255',
        //     'company_id' => 'required|integer',
        //     'company_group_id' => 'required|integer',
        //     'created_by' => 'required|string|max:255',
        //     'created_date' => 'required|date',
        //     'status' => 'required|boolean',
        // ]);
        //try {
        // $project = new Project;
        // $project->name = $request->input('name');
        // $project->project_code = $request->input('project_code');
        // $project->initial_value = $request->input('initial_value');
        // $project->revised_value = $request->input('revised_value');
        // $project->start_date = $request->input('start_date');
        // $project->location = $request->input('location');
        // $project->noa = $request->input('noa');
        // $project->narration = $request->input('narration');
        // $project->company_id = $request->input('company_id');
        // $project->company_group_id = $request->input('company_group_id');
        // $project->created_by = $request->input('created_by');
        // $project->created_date = $request->input('created_date');
        // $project->status = $request->input('status');

            // if($project->save()){

        $dt = Carbon::now();

        $start_date =  $dt->toDateString($request->item['start_date']); 
        $created_date =  $dt->toDateString($request->item['created_date']); 
        // return $start_date;
               
        $project = new Project;
        $project->name = $request->item['name'];
        $project->project_code = $request->item['project_code'];
        $project->initial_value = $request->item['initial_value'];
        $project->revised_value = $request->item['revised_value'];
        $project->start_date = $start_date;
        $project->location = $request->item['location'];
        $project->noa = $request->item['noa'];
        $project->narration = $request->item['narration'];
        $project->company_id = $request->item['company_id'];
        $project->company_group_id = $request->item['company_group_id'];
        $project->created_by = $request->item['created_by'];
        $project->created_date = $created_date;
        $project->status = $request->item['status'];
        $project->save();

        // $projects = Project::create($request->all());
        return response()->json($project,200);
            // }
        // } catch(ValidationException $e)
        // {
        //     // Back to form with errors
        //     return Redirect::to('/')
        //         ->withErrors( $e->getErrors() )
        //         ->withInput();
        // }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $project = Project::whereId($id)->first();
        return response()->json([
            "project" => $project
        ], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Model\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Model\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
    
        //$project = Project::findOrFail($id);
        $project = Project::where('id',  $request->item['id'])->first();
        // return $project;
        $dt = Carbon::now();

        $start_date =  $dt->toDateString($request->item['start_date']); 
        $created_date =  $dt->toDateString($request->item['created_date']); 
      
        $project->update([
            'name'=>$request->item['name'],
            'project_code'=>$request->item['project_code'],
            'initial_value'=>$request->item['initial_value'],
            'revised_value'=>$request->item['revised_value'],
            'start_date'=>$start_date,
            'location'=>$request->item['location'],
            'noa'=>$request->item['noa'],
            'narration'=>$request->item['narration'],
            'company_id'=>$request->item['company_id'],
            'compnay_group_id'=>$request->item['company_group_id'],
            'created_by'=>$request->item['created_by'],
            'created_date'=>$created_date,
            'status'=>$request->item['status']
        ]);
        return response()->json($project,200);
        // $this->validate($request,[
        //     'name' => 'required|string|max:255',
        //     'project_code' => 'required|integer',
        //     'initial_value' => 'required|decimal|max:9',
        //     'revised_value' => 'required|decimal|max:9',
        //     'start_date' => 'required|date',
        //     'location' => 'required|string',
        //     'noa' => 'required|integer|max:191',
        //     'narration' => 'required|string|max:255',
        //     'company_id' => 'required|integer',
        //     'company_group_id' => 'required|integer',
        //     'created_by' => 'required|string|max:255',
        //     'created_date' => 'required|date',
        //     'status' => 'required|boolean',
        // ]);

        // if($project->save($request->all())){
            
        //}
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request,$id)
    {
        // return $request;
        $project = Project::where('id', $id)->first();
        if($project != null){
            $project->delete();
            return response()->json(null,200)->with(['message'=>'Project has deleted successfully!']);
        }
    }
}
