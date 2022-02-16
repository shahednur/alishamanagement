<!-- =========================================================================================
  File Name: DonorList.vue
  Description: Donor module list
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
<div class="vx-col md:w-1/1  w-full mb-base">
            <vs-table v-if="donors && donors.length">
                    <template slot="thead">
                        <vs-th sort-key="id" nowrap>SL</vs-th>
                        <vs-th sort-key="name" nowrap>Name</vs-th>
                        <vs-th sort-key="blood_id" nowrap>Group</vs-th>
                        <vs-th sort-key="phone" nowrap>phone</vs-th>
                        <vs-th sort-key="email" nowrap>email</vs-th>
                        <vs-th sort-key="sex" nowrap>Gender</vs-th>
                        <vs-th sort-key="age" nowrap>Age</vs-th>
                        <vs-th sort-key="date" nowrap>Last Donation Date</vs-th>
                        <vs-th sort-key="status" nowrap>Status</vs-th>
                        <vs-th nowrap>Actions</vs-th>
                    </template>
                    <template v-if="!donors.length">
                        <vs-tr>
                        <vs-td colspan="4" class="text-center">No Donar Available</vs-td>
                       </vs-tr>
                    </template>
                    <template v-else>
                        <vs-tr v-for="(donor, index) in donors" :key="index">
                            <vs-td nowrap>
                                {{index+1}}
                            </vs-td>
                            <vs-td nowrap>
                                {{donor.name}}
                            </vs-td>
                            <vs-td nowrap>
                                {{donor.blood.group}}
                            </vs-td>
                            <vs-td nowrap>
                                {{donor.phone}}
                            </vs-td>
                            <vs-td nowrap>
                                {{donor.email }}
                            </vs-td>
                             <vs-td nowrap>
                                {{donor.sex }}
                            </vs-td>
                            <vs-td nowrap>
                                {{donor.age}}
                            </vs-td>
                            <vs-td nowrap>
                                {{donor.date | myDate}}
                            </vs-td>
                            <vs-td nowrap>
                                {{donor.status == 1? 'Active':'In Active'}}
                            </vs-td>
                            <vs-td nowrap>
                                <div class="flex">
                                    <div class="flex items-center">
                                        <vs-button color="primary" type="flat" icon-pack="feather" icon="icon-edit" @click="editModal(donor)"></vs-button>
                                    </div>
                                    <div class="flex items-center">
                                        <vs-button color="danger" type="flat" icon-pack="feather" icon="icon-delete" @click="deleteRecord(donor.id);confirmDeleteRecord(donor.name);"></vs-button>
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
     donors:{
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
      this.$store.dispatch("removeMedicine",id)
        .then((response)   => { console.log('success',response) })
        .catch(err => { console.error(err)       })
    }
  },
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
</style>
