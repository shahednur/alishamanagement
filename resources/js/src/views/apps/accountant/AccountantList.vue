<!-- =========================================================================================
  File Name: moduleAccountantList.vue
  Description: Accountant module list
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
            <vs-th sort-key="user_id" nowrap>Role</vs-th>
            <vs-th sort-key="phone" nowrap>Phone</vs-th>
            <vs-th sort-key="email" nowrap>Email</vs-th>
            <vs-th sort-key="address" nowrap>Address</vs-th>
            <vs-th sort-key="status" nowrap>Status</vs-th>
            <vs-th nowrap>Actions</vs-th>
        </template>
        <template v-if="!accountants.length">
            <vs-tr>
            <vs-td colspan="8" class="text-center">No Accountant Available</vs-td>
            </vs-tr>
        </template>
        <template v-else>
            <vs-tr v-for="(accountant, index) in accountants" :key="index">
                <vs-td nowrap>
                    {{index+1}}
                </vs-td>
                <vs-td nowrap>
                    {{accountant.name}}
                </vs-td>
                <vs-td nowrap>
                    {{accountant.user.name}}
                </vs-td>
                <vs-td nowrap>
                    {{accountant.phone}}
                </vs-td>
                <vs-td nowrap>
                    {{accountant.email}}
                </vs-td>
                <vs-td nowrap>
                    {{accountant.address}}
                </vs-td>
                <vs-td nowrap>
                    {{accountant.status == 1? 'Active':'In Active'}}
                </vs-td>
                <vs-td nowrap>
                    <div class="flex">
                        <div class="flex items-center">
                            <vs-button color="primary" type="flat" icon-pack="feather" icon="icon-edit" @click="editModal(accountant)"></vs-button>
                        </div>
                        <div class="flex items-center">
                            <vs-button color="danger" type="flat" icon-pack="feather" icon="icon-delete" @click="deleteRecord(accountant.id);confirmDeleteRecord(accountant.name);"></vs-button>
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
     accountants:{
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
      this.$store.dispatch("removeAccountant",id)
        .then((response)   => { console.log('success',response) })
        .catch(err => { console.error(err)       })
    }
  },
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
</style>
