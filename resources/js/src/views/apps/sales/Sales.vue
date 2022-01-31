<!-- =========================================================================================
  File Name: Project.vue
  Description: Project Application to keep you ahead of time
  ----------------------------------------------------------------------------------------
  Item Name: Accounting & Inventory
  Author: Theworld
  Author URL: http://www.theworld.com
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card class="" title="Point of Sales:">
         <SalesAddNew :value="value" :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
        <vx-card title="Sales Quantity:">
         <SalesList :categories="categories" :editModal="editModal"/>
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-1/4 lg:w-1/4 xl:w-1/4 mb-base">
        <vx-card class="" title="Sales Count:">
         <SalesCount :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
    </div>

</template>

<script>
import Datepicker             from 'vuejs-datepicker'
import SalesAddNew          from './SalesAddNew.vue'
import SalesList            from './SalesList.vue'
import SalesCount            from './SalesCount.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
        id:'',
        name:'',
       }),
       value:['Paricel','Napa']
    }
  },
  watch: {

  },
  computed: {
    categories() { return this.$store.getters['categories'] }
    
  },
  methods: {
     editModal(category){
        this.editMode = true;
        this.form.fill(category);
    }
  },
  components: {
    SalesAddNew,
    SalesList,
    SalesCount,
    Datepicker
  },
  created () {
  
  },
  mounted () {
     this.$store.dispatch('fetchItems');
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
