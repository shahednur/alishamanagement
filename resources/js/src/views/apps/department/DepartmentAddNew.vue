<!-- =========================================================================================
  File Name: DepartmentAddNew.vue
  Description: Department module add new
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
 <div class="vx-col md:w-1/1 w-full mb-base">
            <form  @submit.prevent="editModal ? updateDepartment() : createDepartment()">
              <div class="vx-row">
                <div class="vx-col w-full">
                    <label>Main Department</label>
                      <select id="departments" name="department_id" class="custom-select w-full custom-select-lg" v-model="form.department_id">
                          <option :key="index" :value="item.id" v-for="(item,index) in mdepartments">{{item.name}}</option>
                      </select>
                    <!-- <has-error :form="form" field="name"></has-error> -->
                </div>
                <div class="vx-col w-full">
                    <vs-input class="w-full" name="name" label="Department Name" v-model="form.name" placeholder="Department Name" />
                    <!-- <has-error :form="form" field="name"></has-error> -->
                </div>
                <div class="vx-col w-full mt-6">
                    <vs-textarea class="w-full" name="description" label="Description" v-model="form.description" height="100px" />
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
                    <vs-button v-show="!editMode" ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="createDepartment();" type="relief">Create</vs-button>
                    <vs-button v-show="editMode"  ref="loadableButton" id="button-with-loadings" class="vs-con-loading__container" @click="updateDepartment();" type="relief">Update</vs-button>
                </div>
              </div>
            </form>
        </div>
</template>

<script>

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
    mdepartments() { return this.$store.getters['mdepartments'] }
  },
  methods: {
    clearFields () {
      Object.assign(this.form, {
        id:'',
        name: '',
        description: '',
        department_id:'',
        status: true
      })
    },
    showCreateSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Department has Created',
        text: 'Department has createdsuccessfully!'
      })
    },
    showUpdatedSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Department has Updated',
        text: 'Department has Updated successfully!',
        globalPosition: 'top right',
      })
    },
    createDepartment () {
      this.$store.dispatch('addDepartment', Object.assign({}, this.form))
      this.clearFields()
      this.showCreateSuccess()
    },
    updateDepartment(){
         this.$store.dispatch('updateDepartment', Object.assign({}, this.form))
         this.showUpdatedSuccess()
         this.clearFields()
         this.editMode = false
    },
  },
  components: {
    
  },
  mounted () {
     this.$store.dispatch('fetchMdepartment');
  }
}
</script>
<style>
</style>
