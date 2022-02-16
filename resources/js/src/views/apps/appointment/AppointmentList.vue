<!-- =========================================================================================
  File Name: MedicineList.vue
  Description: Medicine module list
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
                <vs-th sort-key="doctor_id" nowrap>Doctor</vs-th>
                <vs-th sort-key="room_id" nowrap>Room Name</vs-th>
                <vs-th sort-key="bed_id" nowrap>Bed No</vs-th>
                <vs-th sort-key="phone" nowrap>phone</vs-th>
                <vs-th sort-key="email" nowrap>email</vs-th>
                <vs-th sort-key="blood_id" nowrap>Blood Group</vs-th>
                <vs-th sort-key="dob" nowrap>Date of Birth</vs-th>
                <vs-th sort-key="address" nowrap>Address</vs-th>
                <vs-th sort-key="sex" nowrap>Gender</vs-th>
                <vs-th nowrap>Actions</vs-th>
            </template>
            <template v-if="!patients.length">
                <vs-tr>
                <vs-td colspan="12" class="text-center">No Patient Available</vs-td>
                </vs-tr>
            </template>
            <template v-else>
                <vs-tr v-for="(patient, index) in patients" :key="index">
                    <vs-td nowrap>
                        {{index+1}}
                    </vs-td>
                    <vs-td nowrap>
                        {{patient.name}}
                    </vs-td>
                    <vs-td nowrap>
                        {{patient.doctor.name}}
                    </vs-td>
                    <vs-td nowrap>
                        {{patient.room.name}}
                    </vs-td>
                    <vs-td nowrap>
                        {{patient.bed.bed_number}}
                    </vs-td>
                    <vs-td nowrap>
                        {{patient.phone}}
                    </vs-td>
                    <vs-td nowrap>
                        {{patient.email }}
                    </vs-td>
                        <vs-td nowrap>
                        {{patient.blood.group }}
                    </vs-td>
                    <vs-td nowrap>
                        {{patient.dob | myDate}}
                    </vs-td>
                    <vs-td nowrap>
                        {{patient.address}}
                    </vs-td>
                    <vs-td nowrap>
                        {{patient.sex == 1? 'Male':'Female'}}
                    </vs-td>
                    <vs-td nowrap>
                        <div class="flex">
                            <div class="flex items-center">
                                <vs-button color="primary" type="flat" icon-pack="feather" icon="icon-edit" @click="editModal(patient)"></vs-button>
                            </div>
                            <div class="flex items-center">
                                <vs-button color="danger" type="flat" icon-pack="feather" icon="icon-delete" @click="deleteRecord(patient.id);confirmDeleteRecord(patient.name);"></vs-button>
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
     patients:{
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
      this.$store.dispatch("removePatient",id)
        .then((response)   => { console.log('success',response) })
        .catch(err => { console.error(err)       })
    }
  },
}

</script>
<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
</style>
