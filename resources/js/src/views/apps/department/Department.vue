<!-- =========================================================================================
  File Name: Department.vue
  Description: Department module
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card class="" title="Department Form:">
         <DepartmentAddNew :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mb-base">
        <vx-card title="Department Display:">
         <DepartmentList :departments="departments" :editModal="editModal"/>
        </vx-card>
      </div>
    </div>

</template>

<script>
import DepartmentAddNew          from './DepartmentAddNew.vue'
import DepartmentList            from './DepartmentList.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
        id:'',
        name:'',
        description:'',
        department_id:'',
        status:true
       })
    }
  },
  watch: {

  },
  computed: {
    departments() { return this.$store.getters['departments'] }
    
  },
  methods: {
     editModal(category){
        this.editMode = true;
        this.form.fill(category);
    }
  },
  components: {
    DepartmentAddNew,
    DepartmentList,
  },
  created () {
  
  },
  mounted () {
     this.$store.dispatch('fetchDepartment');
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
