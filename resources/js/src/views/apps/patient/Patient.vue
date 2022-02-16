<!-- =========================================================================================
  File Name: Patient.vue
  Description: Patient module 
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-1/1 lg:w-1/1 xl:w-1/1 mb-base">
        <vx-card class="" title="Patient:">
         <PatientAddNew :beds="beds" :rooms="rooms" :doctors="doctors" :bloods="bloods" :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
         <vs-divider/>
        <vx-card title="Patient List:">
         <PatientList :patients="patients" :editModal="editModal"/>
        </vx-card>
      </div>
    </div>
</template>
<script>
import PatientAddNew          from './PatientAddNew.vue'
import PatientList            from './PatientList.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
        id:'',
        name:'',
        phone:'',
        email:'',
        address:'',
        dob:'',
        doctor_id:'',
        blood_id:'',
        bed_id:'',
        room_id:'',
        sex:true
       })
    }
  },
  computed: {
    doctors() { return this.$store.getters['doctors'] },
    bloods() { return this.$store.getters['bloods'] },
    patients() { return this.$store.getters['patients'] },
    rooms() { return this.$store.getters['rooms'] },
    beds() { return this.$store.getters['beds'] },
  },
  methods: {
     editModal(doctor){
        this.editMode = true;
        this.form.fill(doctor);
    }
  },
  components: {
    PatientAddNew,
    PatientList,
  },
  mounted () {
     this.$store.dispatch('fetchDoctor');
     this.$store.dispatch('fetchBlood');
     this.$store.dispatch('fetchRoom');
     this.$store.dispatch('fetchBed');
     this.$store.dispatch('fetchPatient');
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
