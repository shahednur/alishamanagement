<!-- =========================================================================================
  File Name: BloodAddNew.vue
  Description: Blood module add new
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
 <div class="vx-col md:w-1/1 w-full mb-base">
  <form  @submit.prevent="editModal ? updateBlood() : createBlood()">
    <div class="vx-row">
      <div class="vx-col w-full">
          <vs-input class="w-full" name="group" label="Blood Group" v-model="form.group" placeholder="Blood group" disabled/>
          <!-- <has-error :form="form" field="name"></has-error> -->
      </div>
      <div class="vx-col w-full mt-6">
          <vs-input class="w-full" name="status" label="Group Status" v-model="form.status" placeholder="Group Status" />
          <!-- <has-error :form="form" field="narration"></has-error> -->
      </div>
      <div class="vx-col w-full mt-6"  style="text-align:center;">
          <!-- <vs-button v-show="!editMode" ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="createBlood();" type="relief">Create</vs-button> -->
          <vs-button ref="loadableButton" id="button-with-loadings" class="vs-con-loading__container" @click="updateBlood();" type="relief">Update</vs-button>
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
  methods: {
    clearFields () {
      Object.assign(this.form, {
        id:'',
        group: '',
        status: '',
      })
    },
    showCreateSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Blood group has Created',
        text: 'Blood group has createdsuccessfully!'
      })
    },
    showUpdatedSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Blood group has Updated',
        text: 'Blood group has Updated successfully!',
        globalPosition: 'top right',
      })
    },
    createBlood() {
      this.$store.dispatch('addBlood', Object.assign({}, this.form))
      this.clearFields()
      this.showCreateSuccess()
    },
    updateBlood(){
         this.$store.dispatch('updateBlood', Object.assign({}, this.form))
         this.showUpdatedSuccess()
         this.clearFields()
         this.editMode = false
    },
  },
}
</script>
<style>
</style>
