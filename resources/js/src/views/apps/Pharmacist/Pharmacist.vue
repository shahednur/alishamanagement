<!-- =========================================================================================
  File Name: Pharmacist.vue
  Description: Pharmacist module 
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-2/5 lg:w-2/5 xl:w-2/5 mb-base">
        <vx-card class="" title="Pharmacist Form:">
         <PharmacistAddNew :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-3/5 lg:w-3/5 xl:w-3/5 mb-base">
        <vx-card title="Pharmacist Display:">
         <PharmacistList :pharmacists="pharmacists" :editModal="editModal"/>
        </vx-card>
      </div>
    </div>

</template>

<script>
import PharmacistAddNew          from './PharmacistAddNew.vue'
import PharmacistList            from './PharmacistList.vue'

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
    pharmacists() { return this.$store.getters['pharmacists'] }
    
  },
  methods: {
     editModal(pharmacist){
        this.editMode = true;
        this.form.fill(pharmacist);
    }
  },
  components: {
    PharmacistAddNew,
    PharmacistList,
  },
  created () {
  
  },
  mounted () {
     this.$store.dispatch('fetchPharmacist');
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
