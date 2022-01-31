<!-- =========================================================================================
  File Name: MedicineAddNew.vue
  Description: Medicine module add new
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
 <div class="vx-col md:w-1/1 w-full mb-base">
            <form  @submit.prevent="editModal ? updateMedicine() : createMedicine()">
              <div class="vx-row">
                <div class="vx-col md:w-1/3">
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="name" label="Medicine Name" v-model="form.name" placeholder="Medicine Name" />
                            <!-- <has-error :form="form" field="name"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="sales_price"  label="Sales Price" v-model="form.sales_price" placeholder="Sales Price"  />
                        </div>
                    </div>
                     <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="manufacturer"  label="Company" v-model="form.manufacturer" placeholder="Company"  />
                        </div>
                    </div>
                </div>
                <div class="vx-col md:w-1/3">
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                           <label>Medicine Category</label>
                            <select id="categories" name="category_id" class="custom-select w-full custom-select-lg" v-model="form.category_id">
                                <option :key="index" :value="item.id" v-for="(item,index) in categories">{{item.name}}</option>
                            </select>
                            <!-- <has-error :form="form" field="project_code"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="quantity"  label="Quantity" v-model="form.quantity" placeholder="Quantity" />
                            <!-- <has-error :form="form" field="revised_value"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <label>Expire Date</label>
                            <datepicker v-model="form.expire_date" name="expire_date" placeholder="Expire Date" ></datepicker>
                            <!-- <has-error :form="form" field="start_date"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <label>Status</label>
                            <vs-divider></vs-divider>
                            <vs-radio color="success" name="status" v-model="form.status" vs-value="1" >Active</vs-radio>
                            <vs-radio color="danger" name="status" v-model="form.status" vs-value="0" >In-Active</vs-radio>
                            <!-- <has-error :form="form" field="status"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row">
                        <div class="vx-col w-full"  style="text-align:center;">
                            <vs-button v-show="!editMode" ref="loadableButton" id="button-with-loading" class="vs-con-loading__container" @click="createMedicine();" type="relief">Create</vs-button>
                            <vs-button v-show="editMode"  ref="loadableButton" id="button-with-loadings" class="vs-con-loading__container" @click="updateMedicine();" type="relief">Update</vs-button>
                           <!-- <input type="submit" value="Create" class="btn btn-primary"> -->
                            <!-- <vs-button v-show="editMode" color="" type="border" class="bg-warning-gradient" @click="clearFields">Reset</vs-button> -->
                        </div>
                    </div>
                </div>
                <div class="vx-col md:w-1/3">
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input class="w-full" name="price"  label="Purchase Price" v-model="form.price" placeholder="Purchase Price"  />
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full">
                            <vs-input name="generic_name" class="w-full" label="Generic Name" v-model="form.generic_name" placeholder="Generic Name" />
                            <!-- <has-error :form="form" field="Location"></has-error> -->
                        </div>
                    </div>
                    <div class="vx-row mb-6">
                        <div class="vx-col w-full mt-6">
                            <vs-textarea class="w-full" name="description" label="Notes" v-model="form.description" height="100px" />
                            <!-- <has-error :form="form" field="narration"></has-error> -->
                        </div>
                    </div>
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
        categories:{
            type:Array,
            required:true
        },
    editModal:Function,
    editMode:Boolean,
    form:Object,
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
        quantity:'',
        price:'',
        sales_price:'',
        manufacturer:'',
        generic_name:'',
        expire_date:'',
        category_id:'',
        status:true
      })
    },
    showCreateSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Medicine has Created',
        text: 'Medicine has created successfully!',
        globalPosition: 'top right',
      })
    },
    showUpdatedSuccess () {
      this.$vs.notify({
        color: 'success',
        title: 'Medicine has Updated',
        text: 'Medicine has Updated successfully!',
        globalPosition: 'top right',
      })
    },
    createMedicine () {
      this.$store.dispatch('addMedicine', Object.assign({}, this.form))
      .then((response)   => { console.log('success',response) })
      .catch(err => { console.error(err)       })
      this.clearFields()
      this.showCreateSuccess()
    },
    updateMedicine(){
         this.$store.dispatch('updateMedicine', Object.assign({}, this.form))
         this.showUpdatedSuccess()
         this.clearFields()
         this.editMode = false
    },
  },
  mounted () {
     this.$store.dispatch('fetchCategory');
  },
  components: {
    Datepicker
  }
}
</script>
<style>
</style>
