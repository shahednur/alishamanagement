<!-- =========================================================================================
  File Name: RoomAddNew.vue
  Description: Room module add new
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
 <div class="vx-col md:w-1/1 w-full mb-base">
      <form  @submit.prevent="editModal ? updateRoom() : createRoom()">
        <div class="vx-row">
          <div class="vx-col w-full">
              <vs-input class="w-full" name="name" label="Room Name" v-model="form.name" placeholder="Room Name" />
              <!-- <has-error :form="form" field="name"></has-error> -->
          </div>
          <div class="vx-col w-full">
              <vs-input class="w-full" name="limit" label="Room Limit" v-model="form.limit" placeholder="Room Limit" />
              <!-- <has-error :form="form" field="name"></has-error> -->
          </div>
          <div class="vx-col w-full">
              <vs-input class="w-full" name="charge" label="Room Charge" v-model="form.charge" placeholder="Room Charge" />
              <!-- <has-error :form="form" field="name"></has-error> -->
          </div>
          <div class="vx-col w-full mt-6">
              <vs-textarea class="w-full" name="description" label="Room Description" v-model="form.description" height="100px" />
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
              <vs-button v-show="!editMode" ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="createRoom();" type="relief">Create</vs-button>
              <vs-button v-show="editMode"  ref="loadableButton" id="button-with-loadings" class="vs-con-loading__container" @click="updateRoom();" type="relief">Update</vs-button>
              <!-- <input type="submit" value="Create" class="btn btn-primary"> -->
              <!-- <vs-button v-show="editMode" color="" type="border" class="bg-warning-gradient" @click="clearFields">Reset</vs-button> -->
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
        name:'',
        description:'',
        limit:'',
        charge:'',
        status:true
      })
    },
    showCreateSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Room has Created',
        text: 'Room has created successfully!'
      })
    },
    showUpdatedSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Room has Updated',
        text: 'Room has Updated successfully!',
        globalPosition: 'top right',
      })
    },
    createRoom () {
      this.$store.dispatch('addRoom', Object.assign({}, this.form))
      this.clearFields()
      this.showCreateSuccess()
    },
    updateRoom(){
         this.$store.dispatch('updateRoom', Object.assign({}, this.form))
         this.showUpdatedSuccess()
         this.clearFields()
         this.editMode = false
    },
  },
}
</script>
<style>
</style>
