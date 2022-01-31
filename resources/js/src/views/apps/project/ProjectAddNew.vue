<!-- =========================================================================================
    File Name: TodoAddNew.vue
    Description: Add new todo component
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
 <div class="vx-col md:w-1/1 w-full mb-base">
            <form  @submit.prevent="editModal ? updateProject() : createProject()">
              <div class="vx-row">
                <div class="vx-col md:w-1/3">
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="name" label="Project Name" v-model="form.name" placeholder="Project Name" />
                            <!-- <has-error :form="form" field="name"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <label>Start Date</label>
                            <datepicker v-model="form.start_date" name="created_date" placeholder="Created Date" ></datepicker>
                            <!-- <has-error :form="form" field="start_date"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="noa" label="NOA" v-model="form.noa" placeholder="NOA"/>
                            <!-- <has-error :form="form" field="noa"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="created_by" label="Created By" v-model="form.created_by" placeholder="Created By" />
                            <!-- <has-error :form="form" field="created_by"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <label>Creation Date</label>
                            <datepicker v-model="form.created_date" name="created_date" placeholder="Created Date" ></datepicker>
                            <!-- <has-error :form="form" field="created_date"></has-error> -->
                        </div>
                    </div>
                </div>
                <div class="vx-col md:w-1/3">
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="project_code" label="Project Code" v-model="form.project_code" placeholder="Project Code" />
                            <!-- <has-error :form="form" field="project_code"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="revised_value"  label="Revised Value" v-model="form.revised_value" placeholder="Revised Value" />
                            <!-- <has-error :form="form" field="revised_value"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" label="Company ID" v-model="form.company_id" placeholder="Company ID" />
                            <!-- <has-error :form="form" field="company_id"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="company_group_id" label="Company Group ID" v-model="form.company_group_id" placeholder="Company Group ID" />
                            <!-- <has-error :form="form" field="company_group_id"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <label>Status</label>
                            <vs-divider></vs-divider>
                            <vs-radio color="success" name="status" v-model="form.status" vs-value="1" >Active</vs-radio>
                            <vs-radio color="danger" name="status" v-model="form.status" vs-value="0" >In-Active</vs-radio>
                            <!-- <has-error :form="form" field="status"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col w-full"  style="text-align:center;">
                            <vs-button v-show="!editMode" ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="createProject();" type="relief">Create</vs-button>
                            <vs-button v-show="editMode"  ref="loadableButton" id="button-with-loadings" class="vs-con-loading__container" @click="updateProject();" type="relief">Update</vs-button>
                           <!-- <input type="submit" value="Create" class="btn btn-primary"> -->
                            <!-- <vs-button v-show="editMode" color="" type="border" class="bg-warning-gradient" @click="clearFields">Reset</vs-button> -->
                        </div>
                    </div>
                </div>
                <div class="vx-col md:w-1/3">
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="initial_value"  label="Executive Value" v-model="form.initial_value" placeholder="Executive Value"  />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input name="Location" class="w-full" label="Location" v-model="form.location" placeholder="Location" />
                            <!-- <has-error :form="form" field="Location"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full mt-6">
                            <vs-textarea class="w-full" name="narration" label="Notes" v-model="form.narration" height="200px" />
                            <!-- <has-error :form="form" field="narration"></has-error> -->
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import validate from 'validate.js'
import moment from 'moment'
export default {
    props:{
    editModal:Function,
    editMode:Boolean,
    form:Object
   },
  data () {
    return {
        
    }
  },
  computed: {

  },
  methods: {
    clearFields () {

      Object.assign(this.form, {
        id:'',
        name: '',
        project_code: '',
        initial_value: '',
        revised_value: '',
        start_date: '',
        location: '',
        noa: '',
        narration: '',
        company_id: '',
        company_group_id: '',
        created_by: '',
        created_date:'',
        status: true
      })
    },
    showCreateSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Project has Created',
        text: 'Project has createdsuccessfully!'
      })
    },
    showUpdatedSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Project has Updated',
        text: 'Project has Updated successfully!',
        globalPosition: 'top right',
      })
    },
    createProject () {
    //   this.errors = null;
    //   const constraints = this.getConstraints();
    //   const errors = validate(this.$data.projects, constraints);
    //   if(errors) {
    //     this.errors = errors;
    //     return;
    //   }
      this.$store.dispatch('addItem', Object.assign({}, this.form))
      this.clearFields()
      this.showCreateSuccess()
    },
    updateProject(){
         this.$store.dispatch('updateItem', Object.assign({}, this.form))
         this.showUpdatedSuccess()
         this.clearFields()
         this.editMode = false
    },
    // getConstraints() {
    // return {
    //     name: {
    //         presence: true,
    //         length: {
    //             minimum: 3,
    //             message: 'Must be at least 3 characters long'
    //         }
    //     },
    //     project_code :{
    //         presence: true,
    //         numericality: true
    //     },
    //     initial_value: {
    //         presence: true,
    //         numericality: true,
    //         length: {
    //             minimum: 2,
    //             message: 'Must be at least 2 digits long'
    //         }
    //     },
    //     location: {
    //         presence: true,
    //         length: {
    //             minimum: 5,
    //             message: 'Must be at least 5 Characters long'
    //         }
    //     },
    //     noa: {
    //         presence: true,
    //         length: {
    //             minimum: 3,
    //             message: 'Must be at least 3 digits long'
    //         }
    //     },
    //     revised_value: {
    //         presence: true,
    //         length: {
    //             minimum: 3,
    //             message: 'Must be at least 3 digits long'
    //         }
    //     },
    //     narration: {
    //         presence: true,
    //         length: {
    //             minimum: 5,
    //             message: 'Must be at least 5 Characters long'
    //         }
    //     },
    //     start_date: {
    //         presence: true,
    //     },
    //     created_date: {
    //         presence: true,
    //     },
    //     company_id: {
    //         presence: true,
    //     },
    //     company_group_id: {
    //         presence: true,
    //     },
    //     created_by: {
    //         presence: true,
    //     },
    //     status: {
    //         presence: true,
    //     }
    // };
    // },
    // customFormatter(date) {
    //   return moment(date).format('MMMM Do YYYY');
    // }
  },
  components: {
    Datepicker
  }
}
</script>
<style>
</style>
