<!-- =========================================================================================
  File Name: ExpenseList.vue
  Description: Expense module list
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
                        <vs-th sort-key="name" nowrap>Category</vs-th>
                        <vs-th sort-key="narration" nowrap>Amount</vs-th>
                        <vs-th sort-key="status" nowrap>Date</vs-th>
                        <vs-th nowrap>Actions</vs-th>
                    </template>
                    <template v-if="!expenses.length">
                        <vs-tr>
                        <vs-td colspan="6" class="text-center">No Expense Available</vs-td>
                       </vs-tr>
                    </template>
                    <template v-else>
                        <vs-tr v-for="(expense, index) in expenses" :key="index">
                            <vs-td nowrap>
                                {{index+1}}
                            </vs-td>
                            <vs-td nowrap>
                                {{expense.category.category}}
                            </vs-td>
                            <vs-td nowrap>
                                {{expense.amount}}
                            </vs-td>
                            <vs-td nowrap>
                                {{expense.create_date | myDate }}
                            </vs-td>
                            <vs-td nowrap>
                                <div class="flex">
                                    <div class="flex items-center">
                                        <vs-button color="primary" type="flat" icon-pack="feather" icon="icon-edit" @click="editModal(expense)"></vs-button>
                                    </div>
                                    <div class="flex items-center">
                                        <vs-button color="danger" type="flat" icon-pack="feather" icon="icon-delete" @click="deleteRecord(expense.id);confirmDeleteRecord(expense.category.category);"></vs-button>
                                    </div>
                                </div>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
        </div>
</template>

<script>
import Datepicker  from 'vuejs-datepicker'

export default {
 props:{
    //  expenses:{
    //      type:Array,
    //      required:true
    //  },
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
    expenses() { return this.$store.getters['expenses'] }
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
      this.$store.dispatch("removeExpense",id)
        .then((response)   => { console.log('success',response) })
        .catch(err => { console.error(err)       })
    }
  },
  components: {
    Datepicker
  },
  mounted () {
      this.$store.dispatch('fetchExpense');
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
</style>
