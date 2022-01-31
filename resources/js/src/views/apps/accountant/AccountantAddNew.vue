<!-- =========================================================================================
  File Name: moduleAccountantAddNew.vue
  Description: Accountant module add new
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
  <div class="vx-col md:w-1/1 w-full mb-base">
    <form  @submit.prevent="editModal ? updateAccountant() : createAccountant()">
      <div class="vx-row">
        <div class="vx-col w-full">
          <div class="vx-row">
            <div class="vx-col md:w-1/2 w-full">
              <label>Role</label>
              <select id="nurses" name="user_id" class="custom-select w-full custom-select-lg" v-model="form.user_id">
                  <option value="" disabled selected>Accountant</option>
                  <option :key="index" :value="item.id" v-for="(item,index) in users">{{item.name}}</option>
              </select>
            <!-- <has-error :form="form" field="name"></has-error> -->
            </div>
            <div class="vx-col md:w-1/2 w-full">
              <div class="vx-col w-full">
            <vs-input class="w-full" name="phone" label="Phone" v-model="form.phone" placeholder="Phone" />
            <!-- <has-error :form="form" field="name"></has-error> -->
              </div>
            </div>
          </div>
        </div>
        <div class="vx-col w-full">
            <vs-input class="w-full" name="name" label="Name" v-model="form.name" placeholder="Name" />
            <!-- <has-error :form="form" field="name"></has-error> -->
        </div>
          <div class="vx-col w-full">
            <vs-input class="w-full" name="email" label="Email" v-model="form.email" placeholder="Email" />
            <!-- <has-error :form="form" field="name"></has-error> -->
        </div>

        <div class="vx-col w-full mt-6">
            <vs-textarea class="w-full" name="address" label="Address" v-model="form.address" height="100px" />
            <!-- <has-error :form="form" field="narration"></has-error> -->
        </div>
        <div class="vx-col w-full">
            <label class="mr-6">Status:</label>
            <!-- <vs-divider></vs-divider> -->
            <vs-radio color="success" name="status" v-model="form.status" vs-value="1" >Active</vs-radio>
            <vs-radio color="danger" name="status" v-model="form.status" vs-value="0" >In-Active</vs-radio>
            <!-- <has-error :form="form" field="status"></has-error> -->
        </div>
        <div class="vx-col w-full mt-4"  style="text-align:center;">
            <vs-button v-show="!editMode" ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="createAccountant();" type="relief">Create</vs-button>
            <vs-button v-show="editMode"  ref="loadableButton" id="button-with-loadings" class="vs-con-loading__container" @click="updateAccountant();" type="relief">Update</vs-button>
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
    users() { return this.$store.getters['users'] }
  },
  methods: {
    clearFields () {
      Object.assign(this.form, {
        id:'',
        name:'',
        user_id:'',
        phone:'',
        email:'',
        address:'',
        status:true
      })
    },
    showCreateSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Accountant has Created',
        text: 'Accountant has createdsuccessfully!'
      })
    },
    showUpdatedSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Accountant has Updated',
        text: 'Accountant has Updated successfully!',
        globalPosition: 'top right',
      })
    },
    createAccountant() {
      this.$store.dispatch('addAccountant', Object.assign({}, this.form))
      this.clearFields()
      this.showCreateSuccess()
    },
    updateAccountant(){
         this.$store.dispatch('updateAccountant', Object.assign({}, this.form))
         this.showUpdatedSuccess()
         this.clearFields()
         this.editMode = false
    },
  },
  components: {

  },
  mounted () {
     this.$store.dispatch('fetchUser');
  }
}
</script>
<style>
</style>
