<!-- =========================================================================================
  File Name: ExpenseCategoryAddNew.vue
  Description: ExpenseCategory module add new
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
 <div class="vx-col md:w-1/1 w-full mb-base">
            <form  @submit.prevent="editModal ? updateExpenseCategory() : createExpenseCategory()">
              <div class="vx-row">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="category" label="Category Name" v-model="form.category" placeholder="Category Name" />
                            <!-- <has-error :form="form" field="name"></has-error> -->
                        </div>
                        <div class="vx-col w-full mt-6">
                            <vs-textarea class="w-full" name="description" label="Category Description" v-model="form.description" height="100px" />
                            <!-- <has-error :form="form" field="narration"></has-error> -->
                        </div>
                        <div class="vx-col w-full">
                            <label>Status</label>
                            <vs-divider></vs-divider>
                            <vs-radio color="success" name="status" v-model="form.status" vs-value="1" >Active</vs-radio>
                            <vs-radio color="danger" name="status" v-model="form.status" vs-value="0" >In-Active</vs-radio>
                            <!-- <has-error :form="form" field="status"></has-error> -->
                        </div>
                        <div class="vx-col w-full mt-6"  style="text-align:center;">
                            <vs-button v-show="!editMode" ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="createExpenseCategory();" type="relief">Create</vs-button>
                            <vs-button v-show="editMode"  ref="loadableButton" id="button-with-loadings" class="vs-con-loading__container" @click="updateExpenseCategory();" type="relief">Update</vs-button>
                           <!-- <input type="submit" value="Create" class="btn btn-primary"> -->
                            <!-- <vs-button v-show="editMode" color="" type="border" class="bg-warning-gradient" @click="clearFields">Reset</vs-button> -->
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

  },
  methods: {
    clearFields () {
      Object.assign(this.form, {
        id:'',
        category: '',
        description: '',
        status: true
      })
    },
    showCreateSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Project has Created',
        text: 'Project has createdsuccessfully!'
      })
    },
    showUpdatedSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Project has Updated',
        text: 'Project has Updated successfully!',
        globalPosition: 'top right',
      })
    },
    createExpenseCategory () {
      this.$store.dispatch('addExpenseCategory', Object.assign({}, this.form))
      this.clearFields()
      this.showCreateSuccess()
    },
    updateExpenseCategory(){
         this.$store.dispatch('updateExpenseCategory', Object.assign({}, this.form))
         this.showUpdatedSuccess()
         this.clearFields()
         this.editMode = false
    },
  },
  components: {
    Datepicker
  }
}
</script>
<style>
</style>
