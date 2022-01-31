<!-- =========================================================================================
  File Name: Appointment.vue
  Description: Appointment module 
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-1/1 lg:w-1/1 xl:w-1/1 mb-base">
        <vx-card class="" title="Patient:">
         <AppointmentAddNew :patients="patients" :beds="beds" :rooms="rooms" :doctors="doctors" :bloods="bloods" :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
         <vs-divider/>
        <vx-card title="Patient List:">
         <AppointmentList  :editModal="editModal"/>
        </vx-card>
      </div>
    </div>
</template>
<script>
import AppointmentAddNew          from './AppointmentAddNew.vue'
import AppointmentList            from './AppointmentList.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
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
    AppointmentAddNew,
    AppointmentList,
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
