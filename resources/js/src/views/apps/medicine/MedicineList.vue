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
            <vs-table v-if="medicines && medicines.length">
                    <template slot="thead">
                        <vs-th sort-key="id" nowrap>SL</vs-th>
                        <vs-th sort-key="name" nowrap>Name</vs-th>
                        <vs-th sort-key="category_id" nowrap>Category</vs-th>
                        <vs-th sort-key="price" nowrap>Purchase Price</vs-th>
                        <vs-th sort-key="sales_price" nowrap>Sales Price</vs-th>
                        <vs-th sort-key="quantity" nowrap>Quantity</vs-th>
                        <vs-th sort-key="generic_name" nowrap>Generic Name</vs-th>
                        <vs-th sort-key="manufacturer" nowrap>Company</vs-th>
                        <vs-th sort-key="expire_date" nowrap>Expire Date</vs-th>
                        <vs-th sort-key="description" nowrap>Notes</vs-th>
                        <vs-th sort-key="status" nowrap>Status</vs-th>
                        <vs-th nowrap>Actions</vs-th>
                    </template>
                    <template v-if="!medicines.length">
                        <vs-tr>
                        <vs-td colspan="4" class="text-center">No Medicine Available</vs-td>
                       </vs-tr>
                    </template>
                    <template v-else>
                        <vs-tr v-for="(medicine, index) in medicines" :key="index">
                            <vs-td nowrap>
                                {{index+1}}
                            </vs-td>
                            <vs-td nowrap>
                                {{medicine.name}}
                            </vs-td>
                            <vs-td nowrap>
                                {{medicine.category.name}}
                            </vs-td>
                            <vs-td nowrap>
                                {{medicine.price}}
                            </vs-td>
                            <vs-td nowrap>
                                {{medicine.sales_price }}
                            </vs-td>
                             <vs-td nowrap>
                                {{medicine.quantity }}
                            </vs-td>
                            <vs-td nowrap>
                                {{medicine.generic_name}}
                            </vs-td>
                            <vs-td nowrap>
                                {{medicine.manufacturer}}
                            </vs-td>
                            <vs-td nowrap>
                                {{medicine.expire_date | myDate}}
                            </vs-td>
                            <vs-td nowrap>
                                {{medicine.description}}
                            </vs-td>
                            <vs-td nowrap>
                                {{medicine.status == 1? 'Active':'In Active'}}
                            </vs-td>
                            <vs-td nowrap>
                                <div class="flex">
                                    <div class="flex items-center">
                                        <vs-button color="primary" type="flat" icon-pack="feather" icon="icon-edit" @click="editModal(medicine)"></vs-button>
                                    </div>
                                    <div class="flex items-center">
                                        <vs-button color="danger" type="flat" icon-pack="feather" icon="icon-delete" @click="deleteRecord(medicine.id);confirmDeleteRecord(medicine.name);"></vs-button>
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
     medicines:{
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
      this.$store.dispatch("removeMedicine",id)
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
