<!-- =========================================================================================
    File Name: TodoAddNew.vue
    Description: Add new todo component
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
 <div class="vx-col md:w-1/1 w-full">
            <form  @submit.prevent="editModal ? updateCategory() : createCategory()">
              <div class="vx-row">
                <div class="vx-col w-full">
                   <b-form-tags
                      v-model="value"
                      input-id="tags-basic"
                      class="mb-2"
                    />
                    <!-- <has-error :form="form" field="name"></has-error> -->
                </div>
                <!-- <div class="vx-col w-full mt-6"  style="text-align:center;">
                    <vs-button v-show="!editMode" ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="createCategory();" type="relief">Create</vs-button>
                    <vs-button v-show="editMode"  ref="loadableButton" id="button-with-loadings" class="vs-con-loading__container" @click="updateCategory();" type="relief">Update</vs-button>
                </div> -->
            </div>
            </form>
        </div>
</template>

<script>
import { BFormTags } from 'bootstrap-vue'


export default {
    props:{
    editModal:Function,
    editMode:Boolean,
    form:Object,
    value:Object
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
    createCategory () {
      this.$store.dispatch('addItem', Object.assign({}, this.form))
      this.clearFields()
      this.showCreateSuccess()
    },
    updateCategory(){
         this.$store.dispatch('updateItem', Object.assign({}, this.form))
         this.showUpdatedSuccess()
         this.clearFields()
         this.editMode = false
    },
  },
  components: {
    BFormTags,
  }
}
</script>
<style>
</style>
