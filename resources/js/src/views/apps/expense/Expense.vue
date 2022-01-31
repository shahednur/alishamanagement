<!-- =========================================================================================
  File Name: Expense.vue
  Description: Expense module 
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card class="" title="Expense:">
         <ExpenseAddNew :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mb-base">
        <vx-card title="Expenses:">
         <ExpenseList  :editModal="editModal"/>
        </vx-card>
      </div>
    </div>

</template>

<script>
import Datepicker             from 'vuejs-datepicker'
import ExpenseAddNew          from './ExpenseAddNew.vue'
import ExpenseList            from './ExpenseList.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
        id:'',
        amount:'',
        category_id:'',
        create_date:''
       })
    }
  },
  watch: {

  },
  computed: {
    // expenses() { return this.$store.getters['expenses'] }
    
  },
  methods: {
     editModal(expense){
        this.editMode = true;
        this.form.fill(expense);
    }
  },
  components: {
    ExpenseAddNew,
    ExpenseList,
    Datepicker
  },
  created () {
  
  },
  mounted () {
    //  this.$store.dispatch('fetchExpense');
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
