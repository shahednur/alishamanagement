<!-- =========================================================================================
  File Name: Category.vue
  Description: Category module
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card class="" title="Category Form:">
         <CategoryAddNew :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mb-base">
        <vx-card title="Category Display:">
         <CategoryList :categories="categories" :editModal="editModal"/>
        </vx-card>
      </div>
    </div>

</template>

<script>
import Datepicker             from 'vuejs-datepicker'
import CategoryAddNew          from './CategoryAddNew.vue'
import CategoryList            from './CategoryList.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
        id:'',
        name:'',
        description:'',
        status:true
       })
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
    CategoryAddNew,
    CategoryList,
    Datepicker
  },
  created () {
  
  },
  mounted () {
     this.$store.dispatch('fetchCategory');
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
