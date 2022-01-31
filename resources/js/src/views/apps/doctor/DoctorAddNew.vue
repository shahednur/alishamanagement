<!-- =========================================================================================
  File Name: DoctorAddNew.vue
  Description: Doctor module add new
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
 <div class="vx-col md:w-1/1 w-full mb-base">
            <form  @submit.prevent="editModal ? updateDoctor() : createDoctor()">
              <div class="vx-row">
                <div class="vx-col md:w-1/3">
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                           <label>Role</label>
                            <select id="users" name="user_id" class="custom-select w-full custom-select-lg" v-model="form.user_id">
                                <option value="" disabled selected>Doctor</option>
                                <option :key="index" :value="item.id" v-for="(item,index) in users">{{item.name}}</option>
                            </select>
                            <!-- <has-error :form="form" field="project_code"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="designation"  label="Designation" v-model="form.designation" placeholder="Designation"  />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <label>Address</label>
                            <vs-textarea class="w-full" name="Address" label="Address" v-model="form.address" height="80px" />
                            <!-- <has-error :form="form" field="narration"></has-error> -->
                        </div>
                    </div>
                </div>
                <div class="vx-col md:w-1/3">
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                           <label>Department</label>
                            <select id="departments" name="department_id" class="custom-select w-full custom-select-lg" v-model="form.department_id">
                                <option value="" disabled selected>Department</option>
                                <option :key="index" :value="item.id" v-for="(item,index) in departments">{{item.name}}</option>
                            </select>
                            <!-- <has-error :form="form" field="project_code"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="email"  label="Email" v-model="form.email" placeholder="Email" />
                            <!-- <has-error :form="form" field="revised_value"></has-error> -->
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
                            <vs-button v-show="!editMode" ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="createDoctor();" type="relief">Create</vs-button>
                            <vs-button v-show="editMode"  ref="loadableButton" id="button-with-loadings" class="vs-con-loading__container" @click="updateDoctor();" type="relief">Update</vs-button>
                        </div>
                    </div>
                </div>
                <div class="vx-col md:w-1/3">
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="name"  label="Name" v-model="form.name" placeholder="Name"  />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input name="phone" class="w-full" label="Phone" v-model="form.phone" placeholder="Phone" />
                            <!-- <has-error :form="form" field="Location"></has-error> -->
                        </div>
                    </div>
                </div>
            </div>
            </form>
        </div>
</template>

<script>
export default {
    props:{
        departments:{
            type:Array,
            required:true
        },
        users:{
            type:Array,
            required:true
        },
    editModal:Function,
    editMode:Boolean,
    form:Object,
   },
  data () {
    return {
       
    }
  },
  methods: {
    clearFields () {
      Object.assign(this.form, {
        id:'',
        name:'',
        email:'',
        phone:'',
        address:'',
        designation:'',
        user_id:'',
        department_id:'',
        status:true
      })
    },
    showCreateSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Doctor has Created',
        text: 'Doctor has created successfully!',
        globalPosition: 'top right',
      })
    },
    showUpdatedSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Doctor has Updated',
        text: 'Doctor has Updated successfully!',
        globalPosition: 'top right',
      })
    },
    createDoctor() {
      this.$store.dispatch('addDoctor', Object.assign({}, this.form))
      .then((response)   => { console.log('success',response) })
      .catch(err => { console.error(err)       })
      this.clearFields()
      this.showCreateSuccess()
    },
    updateDoctor(){
         this.$store.dispatch('updateDoctor', Object.assign({}, this.form))
         this.showUpdatedSuccess()
         this.clearFields()
         this.editMode = false
    },
  },
  mounted () {
     this.$store.dispatch('fetchCategory');
  }
}
</script>
<style>
</style>
