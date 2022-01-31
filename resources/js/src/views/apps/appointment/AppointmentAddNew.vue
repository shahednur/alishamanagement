<!-- =========================================================================================
  File Name: DonorAddNew.vue
  Description: Donor module add new
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
 <div class="vx-col md:w-1/1 w-full mb-base">
            <form  @submit.prevent="editModal ? updateAppointment() : createAppointment()">
              <div class="vx-row">
                <div class="vx-col md:w-1/3">
                    <div class="vx-col w-full">
                        <label>Patient Name</label>
                      <select id="box" name="patient_id" class="custom-select w-full custom-select-lg" v-model="form.patient_id">
                          <option value="" disabled selected>Patient Name</option>
                          <option :key="index" :value="item.id" v-for="(item,index) in patients">{{item.name}}</option>
                      </select>
                        <!-- <has-error :form="form" field="name"></has-error> -->
                    </div>
                     <div class="vx-col w-full mt-4">
                      <vs-input class="w-full" name="phone"  label="Doctor Visit Time" v-model="form.s_time" placeholder="Doctor Visit Time"  />
                            <!-- <has-error :form="form" field="revised_value"></has-error> -->
                    </div>
                    <div class="vx-col w-full mt-4">
                          <label>Doctor Visit Date</label>
                           <datepicker v-model="form.date" name="date" placeholder="Doctor Visit Date" ></datepicker>
                            <!-- <has-error :form="form" field="status"></has-error> -->
                      </div>
                </div>
                <div class="vx-col md:w-1/3">
                    <div class="vx-row ">
                        <div class="vx-col w-full">
                           <label>Doctor</label>
                            <select id="box" name="sex" class="custom-select w-full custom-select-lg" v-model="form.doctor_id">
                                <option value="" disabled selected>Doctors</option>
                                <option :key="index" :value="item.id" v-for="(item,index) in doctors">{{item.name}}</option>
                            </select>
                            <!-- <has-error :form="form" field="project_code"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col w-full mt-4">
                            <vs-input class="w-full" name="phone"  label="Doctor Visit Time Ended" v-model="form.s_time" placeholder="Doctor Visit Time Ended"  />
                            <!-- <has-error :form="form" field="revised_value"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row">
                      <div class="vx-col w-full mt-4">
                            <label>Gender</label>
                            <vs-divider></vs-divider>
                            <vs-radio color="success" name="status" v-model="form.status" vs-value="1" >In Treatment</vs-radio>
                            <vs-radio color="danger" name="status" v-model="form.status" vs-value="0" >Released</vs-radio>
                            <!-- <has-error :form="form" field="status"></has-error> -->
                      </div>
                    </div>
                </div>
                <div class="vx-col md:w-1/3">
                    <div class="vx-col w-full">
                           <label>Room Name</label>
                            <select id="box" name="blood_id" class="custom-select w-full custom-select-lg" v-model="form.room_id">
                                <option value="" disabled selected>Room Name</option>
                                <option :key="index" :value="item.id" v-for="(item,index) in rooms">{{item.name}}</option>
                            </select>
                            <!-- <has-error :form="form" field="revised_value"></has-error> -->
                    </div>
                    <div class="vx-col w-full mt-4">
                          <label>Remarks</label>
                          <vs-textarea class="w-full" name="Address" label="Address" v-model="form.address" height="80px" />
                            <!-- <has-error :form="form" field="start_date"></has-error> -->
                    </div>
                </div>
            </div>
             <div class="vx-row">
                <div class="vx-col w-full mt-6"  style="text-align:center;">
                    <vs-button v-show="!editMode" ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="createPatient();" type="relief">Create</vs-button>
                    <vs-button v-show="editMode"  ref="loadableButton" id="button-with-loadings" class="vs-con-loading__container" @click="updatePatient();" type="relief">Update</vs-button>
                </div>
            </div>
            </form>
        </div>
</template>

<script>
import Datepicker             from 'vuejs-datepicker'
export default {
    props:{
        bloods:{
            type:Array,
            required:true
        },
        doctors:{
            type:Array,
            required:true
        },
        rooms:{
            type:Array,
            required:true
        },
        beds:{
            type:Array,
            required:true
        },
         patients:{
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
        patient_id:'',
        doctor_id:'',
        room_id:'',
        s_time:'',
        e_time:'',
        remarks:'',
        date:'',
        status:true
      })
    },
    showCreateSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Patient has Created',
        text: 'Patient has created successfully!',
        globalPosition: 'top right',
      })
    },
    showUpdatedSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Patient has Updated',
        text: 'Patient has Updated successfully!',
        globalPosition: 'top right',
      })
    },
    createPatient() {
      this.$store.dispatch('addPatient', Object.assign({}, this.form))
      .then((response)   => { console.log('success',response) })
      .catch(err => { console.error(err)       })
      this.clearFields()
      this.showCreateSuccess()
    },
    updatePatient(){
         this.$store.dispatch('updatePatient', Object.assign({}, this.form))
         this.showUpdatedSuccess()
         this.clearFields()
         this.editMode = false
    },
  },
  components:{
      Datepicker
  }
}
</script>
<style>
#box{
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #B5B5B5;
}
</style>
