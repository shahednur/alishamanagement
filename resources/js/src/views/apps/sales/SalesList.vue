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
                        <vs-th sort-key="narration" nowrap>Notes</vs-th>
                        <vs-th sort-key="status" nowrap>Status</vs-th>
                        <vs-th nowrap>Actions</vs-th>
                    </template>
                    <template v-if="!categories.length">
                        <vs-tr>
                        <vs-td colspan="4" class="text-center">No Projects Available</vs-td>
                       </vs-tr>
                    </template>
                    <template v-else>
                        <vs-tr v-for="(category, index) in categories" :key="index">
                            <vs-td nowrap>
                                {{index+1}}
                            </vs-td>
                            <vs-td nowrap>
                                {{category.name}}
                            </vs-td>
                            <vs-td nowrap>
                                {{category.description}}
                            </vs-td>
                            <vs-td nowrap>
                                {{category.status == 1? 'Active':'In Active'}}
                            </vs-td>
                            <vs-td nowrap>
                                <div class="flex">
                                    <div class="flex items-center">
                                        <vs-button color="primary" type="flat" icon-pack="feather" icon="icon-edit" @click="editModal(category)"></vs-button>
                                    </div>
                                    <div class="flex items-center">
                                        <vs-button color="danger" type="flat" icon-pack="feather" icon="icon-delete" @click="deleteRecord(category.id);confirmDeleteRecord(category.name);"></vs-button>
                                    </div>
                                </div>
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
     categories:{
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
      this.$store.dispatch("removeItem",id)
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
