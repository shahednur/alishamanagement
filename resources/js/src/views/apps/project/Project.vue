<!-- =========================================================================================
  File Name: Project.vue
  Description: Project Application to keep you ahead of time
  ----------------------------------------------------------------------------------------
  Item Name: Accounting & Inventory
  Author: Theworld
  Author URL: http://www.theworld.com
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
        <vx-card class="" title="Project Information Form:">
         <ProjectAddNew :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
        <vs-divider/>
        <vx-card title="Project Information Display:">
         <ProjectList :projects="projects" :editModal="editModal"/>
        </vx-card>
    </div>

</template>

<script>
import Datepicker             from 'vuejs-datepicker'
import ProjectAddNew          from './ProjectAddNew.vue'
import ProjectList            from './ProjectList.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
        id:'',
        name:'',
        project_code:'',
        initial_value:'',
        revised_value:'',
        start_date:'',
        location:'',
        noa:'',
        narration:'',
        company_id:'',
        company_group_id:'',
        created_by:'',
        created_date:'',
        status:true
       })
    }
  },
  watch: {

  },
  computed: {
    projects() { return this.$store.getters['projects'] }
    
  },
  methods: {
     editModal(project){
        this.editMode = true;
        this.form.fill(project);
    }
  },
  components: {
    ProjectAddNew,
    ProjectList,
    Datepicker
  },
  created () {
  
  },
  mounted () {
     this.$store.dispatch('fetchProjectItems');
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
