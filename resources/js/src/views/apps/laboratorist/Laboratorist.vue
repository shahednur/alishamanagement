<!-- =========================================================================================
  File Name: Laboratorist.vue
  Description: Laboratorist module 
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-2/5 lg:w-2/5 xl:w-2/5 mb-base">
        <vx-card class="" title="Laboratorist Form:">
         <LaboratoristAddNew :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-3/5 lg:w-3/5 xl:w-3/5 mb-base">
        <vx-card title="Laboratorist Display:">
         <LaboratoristList :laboratorists="laboratorists" :editModal="editModal"/>
        </vx-card>
      </div>
    </div>

</template>

<script>
import LaboratoristAddNew          from './LaboratoristAddNew.vue'
import LaboratoristList            from './LaboratoristList.vue'

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
    laboratorists() { return this.$store.getters['laboratorists'] }
    
  },
  methods: {
     editModal(laboratorist){
        this.editMode = true;
        this.form.fill(laboratorist);
    }
  },
  components: {
    LaboratoristAddNew,
    LaboratoristList,
  },
  created () {
  
  },
  mounted () {
     this.$store.dispatch('fetchLaboratorist');
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
