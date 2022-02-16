<!-- =========================================================================================
  File Name: Receptionist.vue
  Description: Receptionist module 
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-2/5 lg:w-2/5 xl:w-2/5 mb-base">
        <vx-card class="" title="Receptionist Form:">
         <ReceptionistAddNew :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-3/5 lg:w-3/5 xl:w-3/5 mb-base">
        <vx-card title="Receptionist Display:">
         <ReceptionistList :receptionists="receptionists" :editModal="editModal"/>
        </vx-card>
      </div>
    </div>

</template>

<script>
import ReceptionistAddNew          from './ReceptionistAddNew.vue'
import ReceptionistList            from './ReceptionistList.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
        id:'',
        name:'',
        user_id:'',
        phone:'',
        email:'',
        address:'',
        status:true
       })
    }
  },
  watch: {

  },
  computed: {
    receptionists() { return this.$store.getters['receptionists'] }
    
  },
  methods: {
     editModal(receptionist){
        this.editMode = true;
        this.form.fill(receptionist);
    }
  },
  components: {
    ReceptionistAddNew,
    ReceptionistList,
  },
  created () {
  
  },
  mounted () {
     this.$store.dispatch('fetchReceptionists');
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
