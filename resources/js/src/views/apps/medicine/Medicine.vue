<!-- =========================================================================================
  File Name: Medicine.vue
  Description: Medicine module 
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-1/1 lg:w-1/1 xl:w-1/1 mb-base">
        <vx-card class="" title="Medicine Information Form:">
         <MedicineAddNew :categories="categories" :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
         <vs-divider/>
        <vx-card title="Medicine Information Display:">
         <MedicineList :medicines="medicines" :editModal="editModal"/>
        </vx-card>
      </div>
    </div>

</template>

<script>
import Datepicker             from 'vuejs-datepicker'
import MedicineAddNew          from './MedicineAddNew.vue'
import MedicineList            from './MedicineList.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
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
    }
  },
  computed: {
    medicines() { return this.$store.getters['medicines'] },
    categories() { return this.$store.getters['categories'] }
  },
  methods: {
     editModal(medicine){
        this.editMode = true;
        this.form.fill(medicine);
    }
  },
  components: {
    MedicineAddNew,
    MedicineList,
    Datepicker
  },
  mounted () {
     this.$store.dispatch('fetchMedicine');
     
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
