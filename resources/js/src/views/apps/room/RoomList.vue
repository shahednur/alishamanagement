<!-- =========================================================================================
  File Name: RoomList.vue
  Description: Room module list
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
                        <vs-th sort-key="name" nowrap>Name</vs-th>
                        <vs-th sort-key="limit" nowrap>Limit</vs-th>
                        <vs-th sort-key="charge" nowrap>Charge</vs-th>
                        <vs-th sort-key="description" nowrap>Description</vs-th>
                        <vs-th sort-key="status" nowrap>Status</vs-th>
                        <vs-th nowrap>Actions</vs-th>
                    </template>
                    <template v-if="!rooms.length">
                        <vs-tr>
                        <vs-td colspan="6" class="text-center">No Room Available</vs-td>
                       </vs-tr>
                    </template>
                    <template v-else>
                        <vs-tr v-for="(room, index) in rooms" :key="index">
                            <vs-td nowrap>
                                {{index+1}}
                            </vs-td>
                            <vs-td nowrap>
                                {{room.name}}
                            </vs-td>
                            <vs-td nowrap>
                                {{room.limit}}
                            </vs-td>
                            <vs-td nowrap>
                                {{room.charge}}
                            </vs-td>
                            <vs-td nowrap>
                                {{room.description}}
                            </vs-td>
                            <vs-td nowrap>
                                {{room.status == 1? 'Active':'In Active'}}
                            </vs-td>
                            <vs-td nowrap>
                                <div class="flex">
                                    <div class="flex items-center">
                                        <vs-button color="primary" type="flat" icon-pack="feather" icon="icon-edit" @click="editModal(room)"></vs-button>
                                    </div>
                                    <div class="flex items-center">
                                        <vs-button color="danger" type="flat" icon-pack="feather" icon="icon-delete" @click="deleteRecord(room.id);confirmDeleteRecord(room.name);"></vs-button>
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
     rooms:{
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
      this.$store.dispatch("removeRoom",id)
        .then((response)   => { console.log('success',response) })
        .catch(err => { console.error(err)       })
    }
  },
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
</style>
