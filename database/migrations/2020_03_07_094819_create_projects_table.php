<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name')->nullable();
            $table->integer('project_code')->nullable();
            $table->decimal('initial_value', 9,2)->nullable();
            $table->decimal('revised_value', 9,2)->nullable();
            $table->date('start_date')->nullable();
            $table->string('location')->nullable();
            $table->string('noa')->nullable();
            $table->string('narration')->nullable();
            $table->integer('company_id')->nullable();
            $table->integer('company_group_id')->nullable();
            $table->string('created_by')->nullable();
            $table->date('created_date')->nullable();
            $table->boolean('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
