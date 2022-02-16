<!-- =========================================================================================
  File Name: Nurse.vue
  Description: Nurse module 
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-2/5 lg:w-2/5 xl:w-2/5 mb-base">
        <vx-card class="" title="Nurse Form:">
         <NurseAddNew :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-3/5 lg:w-3/5 xl:w-3/5 mb-base">
        <vx-card title="Nurse Display:">
         <NurseList :nurses="nurses" :editModal="editModal"/>
        </vx-card>
      </div>
    </div>

</template>

<script>
import NurseAddNew          from './NurseAddNew.vue'
import NurseList            from './NurseList.vue'

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
    nurses() { return this.$store.getters['nurses'] }
    
  },
  methods: {
     editModal(nurse){
        this.editMode = true;
        this.form.fill(nurse);
    }
  },
  components: {
    NurseAddNew,
    NurseList,
  },
  created () {
  
  },
  mounted () {
     this.$store.dispatch('fetchNurse');
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
