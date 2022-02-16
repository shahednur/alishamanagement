<!-- =========================================================================================
  File Name: BedList.vue
  Description: Bed module list
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
                        <vs-th sort-key="room_id" nowrap>Room Name</vs-th>
                        <vs-th sort-key="bed_number" nowrap>Bed Number</vs-th>
                        <vs-th sort-key="description" nowrap>Description</vs-th>
                        <vs-th sort-key="status" nowrap>Status</vs-th>
                        <vs-th nowrap>Actions</vs-th>
                    </template>
                    <template v-if="!beds.length">
                        <vs-tr>
                        <vs-td colspan="6" class="text-center">No Bed Available</vs-td>
                       </vs-tr>
                    </template>
                    <template v-else>
                        <vs-tr v-for="(bed, index) in beds" :key="index">
                            <vs-td nowrap>
                                {{index+1}}
                            </vs-td>
                            <vs-td nowrap>
                                {{bed.room.name}}
                            </vs-td>
                            <vs-td nowrap>
                                {{bed.bed_number}}
                            </vs-td>
                            <vs-td nowrap>
                                {{bed.description}}
                            </vs-td>
                            <vs-td nowrap>
                                {{bed.status == 1? 'Active':'In Active'}}
                            </vs-td>
                            <vs-td nowrap>
                                <div class="flex">
                                    <div class="flex items-center">
                                        <vs-button color="primary" type="flat" icon-pack="feather" icon="icon-edit" @click="editModal(bed)"></vs-button>
                                    </div>
                                    <div class="flex items-center">
                                        <vs-button color="danger" type="flat" icon-pack="feather" icon="icon-delete" @click="deleteRecord(bed.id);confirmDeleteRecord(bed.name);"></vs-button>
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
     beds:{
         type:Array,
         required:true
     },
     editModal:{
         type:Function
     }
 },
  data (){
    return {
    }
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
      this.$store.dispatch("removeBed",id)
        .then((response)   => { console.log('success',response) })
        .catch(err => { console.error(err)       })
    }
  },
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
</style>
