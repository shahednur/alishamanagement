<!-- =========================================================================================
  File Name: DepartmentList.vue
  Description: Department module list
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
<div class="vx-col md:w-1/1  w-full mb-base">
            <vs-table>
                    <template slot="thead">
                        <vs-th sort-key="id" nowrap>SL</vs-th>
                        <vs-th sort-key="name" nowrap>Department</vs-th>
                        <vs-th sort-key="name" nowrap>Main Department</vs-th>
                        <vs-th sort-key="narration" nowrap>Notes</vs-th>
                        <vs-th sort-key="status" nowrap>Status</vs-th>
                        <vs-th nowrap>Actions</vs-th>
                    </template>
                    <template v-if="!departments.length">
                        <vs-tr>
                        <vs-td colspan="6" class="text-center">No Department Available</vs-td>
                       </vs-tr>
                    </template>
                    <template v-else>
                        <vs-tr v-for="(department, index) in departments" :key="index">
                            <vs-td nowrap>
                                {{index+1}}
                            </vs-td>
                            <vs-td nowrap>
                                {{department.name}}
                            </vs-td>
                            <vs-td nowrap>
                                {{department.department.name}}
                            </vs-td>
                            <vs-td nowrap>
                                {{department.description}}
                            </vs-td>
                            <vs-td nowrap>
                                {{department.status == 1? 'Active':'In Active'}}
                            </vs-td>
                            <vs-td nowrap>
                                <div class="flex">
                                    <div class="flex items-center">
                                        <vs-button color="primary" type="flat" icon-pack="feather" icon="icon-edit" @click="editModal(department)"></vs-button>
                                    </div>
                                    <div class="flex items-center">
                                        <vs-button color="danger" type="flat" icon-pack="feather" icon="icon-delete" @click="deleteRecord(department.id);confirmDeleteRecord(department.name);"></vs-button>
                                    </div>
                                </div>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
        </div>
</template>

<script>
export default {
 props:{
     departments:{
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
      this.$store.dispatch("removeDepartment",id)
        .then((response)   => { console.log('success',response) })
        .catch(err => { console.error(err)       })
    }
  },
  components: {
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
