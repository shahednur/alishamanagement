<!-- =========================================================================================
  File Name: moduleAccountant.vue
  Description: Accountant module
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-2/5 lg:w-2/5 xl:w-2/5 mb-base">
        <vx-card class="" title="Accountant Form:">
         <AccountantAddNew :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-3/5 lg:w-3/5 xl:w-3/5 mb-base">
        <vx-card title="Accountant Display:">
         <AccountantList :accountants="accountants" :editModal="editModal"/>
        </vx-card>
      </div>
    </div>

</template>

<script>
import AccountantAddNew          from './AccountantAddNew.vue'
import AccountantList            from './AccountantList.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
        id:'',
        name:'',
        user_id:'',
        phone:'',
        email:'',
        address:'',
        status:true
       })
    }
  },
  watch: {

  },
  computed: {
    accountants() { return this.$store.getters['accountants'] }
    
  },
  methods: {
     editModal(accountant){
        this.editMode = true;
        this.form.fill(accountant);
    }
  },
  components: {
    AccountantAddNew,
    AccountantList,
  },
  created () {
  
  },
  mounted () {
     this.$store.dispatch('fetchAccountant');
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
