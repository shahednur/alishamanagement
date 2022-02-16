<!-- =========================================================================================
  File Name: Mdepartment.vue
  Description: Mdepartment Application to keep you ahead of time
  ----------------------------------------------------------------------------------------
  Item Name: Hospital Management System
  Author: Shahednur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card class="" title="Main Department:">
         <MdepartmentAddNew :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mb-base">
        <vx-card title="Main Department:">
         <MdepartmentList :mdepartments="mdepartments" :editModal="editModal"/>
        </vx-card>
      </div>
    </div>

</template>

<script>
import MdepartmentAddNew          from './MdepartmentAddNew.vue'
import MdepartmentList            from './MdepartmentList.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
        id:'',
        name:'',
        description:'',
        status:true
       })
    }
  },
  watch: {

  },
  computed: {
    mdepartments() { return this.$store.getters['mdepartments'] }
    
  },
  methods: {
     editModal(main){
        this.editMode = true;
        this.form.fill(main);
    }
  },
  components: {
    MdepartmentAddNew,
    MdepartmentList,
  },
  created () {
  
  },
  mounted () {
     this.$store.dispatch('fetchMdepartment');
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
