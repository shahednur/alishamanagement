<!-- =========================================================================================
  File Name: Project.vue
  Description: Project Application to keep you ahead of time
  ----------------------------------------------------------------------------------------
  Item Name: Accounting & Inventory
  Author: Theworld
  Author URL: http://www.theworld.com
========================================================================================== -->


<template>
<div class="vx-col md:w-1/1  w-full mb-base">
            <vs-table>
                    <template slot="thead">
                        <vs-th sort-key="id" nowrap>SL</vs-th>
                        <vs-th sort-key="name" nowrap>Project Name</vs-th>
                        <vs-th sort-key="project_code" nowrap>Project Code</vs-th>
                        <vs-th sort-key="initial_value" nowrap>Executive Value</vs-th>
                        <vs-th sort-key="revised_value" nowrap>Revised Value</vs-th>
                        <vs-th sort-key="start_date" nowrap>Started Date</vs-th>
                        <vs-th sort-key="location" nowrap>Location</vs-th>
                        <vs-th sort-key="noa" nowrap>NOA</vs-th>
                        <vs-th sort-key="narration" nowrap>Notes</vs-th>
                        <vs-th sort-key="company_id" nowrap>Company Name</vs-th>
                        <vs-th sort-key="company_group_id" nowrap>Company Group Name</vs-th>
                        <vs-th sort-key="created_by" nowrap>Created By</vs-th>
                        <vs-th sort-key="created_date" nowrap>Creation Date</vs-th>
                        <vs-th sort-key="status" nowrap>Status</vs-th>
                        <vs-th nowrap>Actions</vs-th>
                    </template>
                    <template v-if="!projects.length">
                        <vs-tr>
                        <vs-td colspan="4" class="text-center">No Projects Available</vs-td>
                       </vs-tr>
                    </template>
                    <template v-else>
                        <vs-tr v-for="(project, index) in projects" :key="index">
                            <vs-td nowrap>
                                {{index+1}}
                            </vs-td>
                            <vs-td nowrap>
                                {{project.name}}
                            </vs-td>
                            <vs-td nowrap>
                                {{project.project_code}}
                            </vs-td>
                            <vs-td nowrap>
                                {{project.initial_value}}
                            </vs-td>
                            <vs-td nowrap>
                                {{project.revised_value}}
                            </vs-td>
                            <vs-td nowrap>
                                {{project.start_date | myDate}}
                            </vs-td>
                            <vs-td nowrap>
                                {{project.location}}
                            </vs-td>
                            <vs-td nowrap>
                                {{project.noa}}
                            </vs-td>
                            <vs-td nowrap>
                                {{project.narration}}
                            </vs-td>
                            <vs-td nowrap>
                                {{project.company_id}}
                            </vs-td>
                            <vs-td nowrap>
                                {{project.company_group_id}}
                            </vs-td>
                            <vs-td nowrap>
                                {{project.created_by}}
                            </vs-td>
                            <vs-td nowrap>
                                {{project.created_date | myDate}}
                            </vs-td>
                            <vs-td nowrap>
                                {{project.status == 1? 'Active':'In Active'}}
                            </vs-td>
                            <vs-td nowrap>
                                <vs-button color="primary" type="flat" icon-pack="feather" icon="icon-edit" @click="editModal(project)"></vs-button>
                                <vs-button color="danger" type="flat" icon-pack="feather" icon="icon-delete" @click="deleteRecord(project.id);confirmDeleteRecord(project.name);"></vs-button>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
        </div>
</template>

<script>
import Datepicker             from 'vuejs-datepicker'

export default {
 props:{
     projects:{
         type:Array,
         required:true
     },
     editModal:{
         type:Function
     }
 },
  data (){
    return {
        project_not_found: false
    }
  },
  watch: {

  },
  computed: {
    
  },
  methods: {
     confirmDeleteRecord (name) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Confirm Delete',
        text: `You are about to delete "${name}"`,
        accept: this.deleteRecord,
        acceptText: 'Delete'
      })
    },
    deleteRecord (id){
      this.$store.dispatch("removeProject",id)
        .then((response)   => { console.log('success',response) })
        .catch(err => { console.error(err)       })
    }
  },
  components: {
    Datepicker
  },
  created () {
  },
  mounted () {
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
</style>
