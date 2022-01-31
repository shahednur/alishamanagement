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
            <form  @submit.prevent="editModal ? updateDonor() : createDonor()">
              <div class="vx-row">
                <div class="vx-col md:w-1/3">
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="name" label="Donor Name" v-model="form.name" placeholder="Donor Name" />
                            <!-- <has-error :form="form" field="name"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="phone"  label="Phone" v-model="form.phone" placeholder="Phone"  />
                        </div>
                    </div>
                     <div class="vx-col w-full">
                            <label>Gender</label>
                            <select id="box" name="sex" class="custom-select w-full custom-select-lg" v-model="form.sex">
                                <option value="" disabled selected>Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            <!-- <has-error :form="form" field="status"></has-error> -->
                        </div>
                </div>
                <div class="vx-col md:w-1/3">
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                           <label>Blood Group</label>
                            <select id="box" name="blood_id" class="custom-select w-full custom-select-lg" v-model="form.blood_id">
                                <option value="" disabled selected>Blood Group</option>
                                <option :key="index" :value="item.id" v-for="(item,index) in bloods">{{item.group}}</option>
                            </select>
                            <!-- <has-error :form="form" field="project_code"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="age"  label="Age" v-model="form.age" placeholder="Age" />
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
                            <vs-button v-show="!editMode" ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="createDonor();" type="relief">Create</vs-button>
                            <vs-button v-show="editMode"  ref="loadableButton" id="button-with-loadings" class="vs-con-loading__container" @click="updateDonor();" type="relief">Update</vs-button>
                        </div>
                    </div>
                </div>
                <div class="vx-col md:w-1/3">
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="email"  label="Email" v-model="form.email" placeholder="Email"  />
                        </div>
                    </div>
                    <div class="vx-col w-full">
                            <label>Donation Date</label>
                            <datepicker v-model="form.date" name="date" placeholder="Donation Date" ></datepicker>
                            <!-- <has-error :form="form" field="start_date"></has-error> -->
                        </div>
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
    editModal:Function,
    editMode:Boolean,
    form:Object,
   },
  data () {
    return {
        checkBox1:true,
      checkBox2:false,
    }
  },
  methods: {
    clearFields () {
      Object.assign(this.form, {
        id:'',
        name:'',
        phone:'',
        email:'',
        sex:true,
        date:'',
        age:'',
        blood_id:'',
        status:true
      })
    },
    showCreateSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Donor has Created',
        text: 'Donor has created successfully!',
        globalPosition: 'top right',
      })
    },
    showUpdatedSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Donor has Updated',
        text: 'Donor has Updated successfully!',
        globalPosition: 'top right',
      })
    },
    createDonor() {
      this.$store.dispatch('addDonor', Object.assign({}, this.form))
      .then((response)   => { console.log('success',response) })
      .catch(err => { console.error(err)       })
      this.clearFields()
      this.showCreateSuccess()
    },
    updateDonor(){
         this.$store.dispatch('updateDonor', Object.assign({}, this.form))
         this.showUpdatedSuccess()
         this.clearFields()
         this.editMode = false
    },
  },
  mounted () {
     this.$store.dispatch('fetchBlood');
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
