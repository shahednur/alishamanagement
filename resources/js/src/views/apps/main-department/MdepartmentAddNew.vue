<!-- =========================================================================================
  File Name: MdepartmentAddNew.vue
  Description: Mdepartment module add new
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
 <div class="vx-col md:w-1/1 w-full mb-base">
            <form  @submit.prevent="editModal ? updateMdepartment() : createMdepartment()">
              <div class="vx-row">
                <div class="vx-col w-full">
                    <vs-input class="w-full" name="name" label="Department Name" v-model="form.name" placeholder="Department Name" />
                    <!-- <has-error :form="form" field="name"></has-error> -->
                </div>
                <div class="vx-col w-full mt-6">
                    <vs-textarea class="w-full" name="description" label=" Description" v-model="form.description" height="100px" />
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
                    <vs-button v-show="!editMode" ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="createMdepartment();" type="relief">Create</vs-button>
                    <vs-button v-show="editMode"  ref="loadableButton" id="button-with-loadings" class="vs-con-loading__container" @click="updateMdepartment();" type="relief">Update</vs-button>
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

  },
  methods: {
    clearFields () {

      Object.assign(this.form, {
        id:'',
        name: '',
        description: '',
        status: true
      })
    },
    showCreateSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Main Department has Created',
        text: 'Main Department has createdsuccessfully!'
      })
    },
    showUpdatedSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Main Department has Updated',
        text: 'Main Department has Updated successfully!',
        globalPosition: 'top right',
      })
    },
    createMdepartment () {
      this.$store.dispatch('addMdepartment', Object.assign({}, this.form))
      this.clearFields()
      this.showCreateSuccess()
    },
    updateMdepartment(){
         this.$store.dispatch('updateMdepartment', Object.assign({}, this.form))
         this.showUpdatedSuccess()
         this.clearFields()
         this.editMode = false
    },
  },
  components: {

  }
}
</script>
<style>
</style>
