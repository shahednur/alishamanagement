<!-- =========================================================================================
  File Name: ExpenseAddNew.vue
  Description: Expense module add new
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
 <div class="vx-col md:w-1/1 w-full mb-base">
            <form  @submit.prevent="editModal ? updateExpense() : createExpense()">
              <div class="vx-row">
                        <div class="vx-col w-full">
                           <label>Expense Category</label>
                            <select id="categories" name="category_id" class="custom-select w-full custom-select-lg" v-model="form.category_id">
                                <option :key="index" :value="item.id" v-for="(item,index) in excategories">{{item.category}}</option>
                            </select> 
                            <!-- <has-error :form="form" field="name"></has-error> -->
                        </div>
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="amount" label="Amount" v-model="form.amount" />
                            <!-- <has-error :form="form" field="narration"></has-error> -->
                        </div>
                        <div class="vx-col w-full">
                           <label>Date</label>
                            <datepicker v-model="form.create_date" name="create_date" placeholder="Date" ></datepicker>
                          <!-- <has-error :form="form" field="status"></has-error> -->
                        </div>
                        <div class="vx-col w-full mt-6"  style="text-align:center;">
                            <vs-button v-show="!editMode" ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="createExpense();" type="relief">Create</vs-button>
                            <vs-button v-show="editMode"  ref="loadableButton" id="button-with-loadings" class="vs-con-loading__container" @click="updateExpense();" type="relief">Update</vs-button>
                        </div>
            </div>
            </form>
        </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import validate from 'validate.js'
import moment from 'moment'
export default {
    props:{
    editModal:Function,
    editMode:Boolean,
    form:Object
   },
  data () {
    return {
        
    }
  },
  computed: {
    excategories() { return this.$store.getters['excategories'] }
  },
  methods: {
    clearFields () {
      Object.assign(this.form, {
        id:'',
        amount: '',
        category_id: '',
        create_date:''
      })
    },
    showCreateSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Expense has Created',
        text: 'Expense has createdsuccessfully!'
      })
    },
    showUpdatedSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Expense has Updated',
        text: 'Expense has Updated successfully!',
        globalPosition: 'top right',
      })
    },
    createExpense() {
      this.$store.dispatch('addExpense', Object.assign({}, this.form))
      this.clearFields()
      this.showCreateSuccess()
    },
    updateExpense(){
         this.$store.dispatch('updateExpense', Object.assign({}, this.form))
         this.showUpdatedSuccess()
         this.clearFields()
         this.editMode = false
    },
  },
  mounted () {
     this.$store.dispatch('fetchExpenseCategory');
  },
  components: {
    Datepicker
  }
}
</script>
<style>
</style>
