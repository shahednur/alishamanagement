<!-- =========================================================================================
  File Name: BedAddNew.vue
  Description: Bed module add new
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
 <div class="vx-col md:w-1/1 w-full mb-base">
      <form  @submit.prevent="editModal ? updateBed() : createBed()">
        <div class="vx-row">
          <div class="vx-col w-full">
              <label>Room No</label>
                <select id="rooms" name="room_id" class="custom-select w-full custom-select-lg" v-model="form.room_id">
                    <option :key="index" :value="item.id" v-for="(item,index) in rooms">{{item.name}}</option>
                </select>
          </div>
          <div class="vx-col w-full">
                    <vs-input class="w-full" name="bed_number" label="Bed Number" v-model="form.bed_number" placeholder="Bed Number" />
                    <!-- <has-error :form="form" field="name"></has-error> -->
                </div>
          <div class="vx-col w-full mt-6">
              <vs-textarea class="w-full" name="description" label="Bed Description" v-model="form.description" height="80px" />
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
              <vs-button v-show="!editMode" ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="createBed();" type="relief">Create</vs-button>
              <vs-button v-show="editMode"  ref="loadableButton" id="button-with-loadings" class="vs-con-loading__container" @click="updateBed();" type="relief">Update</vs-button>
          </div>
      </div>
      </form>
        </div>
</template>

<script>
export default {
    props:{
      rooms:{
        type:Array,
        required:true
      },
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
        room_id:'',
        bed_number:'',
        description:'',
        status:true
      })
    },
    showCreateSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Bed has Created',
        text: 'Bed has created successfully!'
      })
    },
    showUpdatedSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Bed has Updated',
        text: 'Bed has Updated successfully!',
        globalPosition: 'top right',
      })
    },
    createBed() {
      this.$store.dispatch('addBed', Object.assign({}, this.form))
      this.clearFields()
      this.showCreateSuccess()
    },
    updateBed(){
         this.$store.dispatch('updateBed', Object.assign({}, this.form))
         this.showUpdatedSuccess()
         this.clearFields()
         this.editMode = false
    },
  },
}
</script>
<style>
#rooms{
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #B5B5B5;
}
</style>
