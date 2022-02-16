<!-- =========================================================================================
  File Name: Doctor.vue
  Description: Doctor module 
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-1/1 lg:w-1/1 xl:w-1/1 mb-base">
        <vx-card class="" title="Doctor:">
         <DoctorAddNew :users="users" :departments="departments" :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
      <vs-divider/>
        <vx-card title="Doctor List:">
         <DoctorList :doctors="doctors" :editModal="editModal"/>
        </vx-card>
      </div>
    </div>
</template>

<script>
import DoctorAddNew          from './DoctorAddNew.vue'
import DoctorList            from './DoctorList.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
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
    }
  },
  computed: {
    doctors() { return this.$store.getters['doctors'] },
    departments() { return this.$store.getters['departments'] },
    users() { return this.$store.getters['users'] }
  },
  methods: {
     editModal(doctor){
        this.editMode = true;
        this.form.fill(doctor);
    }
  },
  components: {
    DoctorAddNew,
    DoctorList,
  },
  mounted () {
     this.$store.dispatch('fetchDoctor');
     this.$store.dispatch('fetchDepartment');
     this.$store.dispatch('fetchUser');
     
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
