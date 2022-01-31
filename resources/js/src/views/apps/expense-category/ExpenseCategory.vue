<!-- =========================================================================================
  File Name: ExpenseCategory.vue
  Description: ExpenseCategory module 
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card class="" title="Category Form:">
         <ExpenseCategoryAddNew :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mb-base">
        <vx-card title="Category Display:">
         <ExpenseCategoryList :excategories="excategories" :editModal="editModal"/>
        </vx-card>
      </div>
    </div>

</template>

<script>
import Datepicker             from 'vuejs-datepicker'
import ExpenseCategoryAddNew          from './ExpenseCategoryAddNew.vue'
import ExpenseCategoryList            from './ExpenseCategoryList.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
        id:'',
        category:'',
        description:'',
        status:true
       })
    }
  },
  watch: {

  },
  computed: {
    excategories() { return this.$store.getters['excategories'] }
    
  },
  methods: {
     editModal(category){
        this.editMode = true;
        this.form.fill(category);
    }
  },
  components: {
    ExpenseCategoryAddNew,
    ExpenseCategoryList,
    Datepicker
  },
  created () {
  
  },
  mounted () {
     this.$store.dispatch('fetchExpenseCategory');
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
