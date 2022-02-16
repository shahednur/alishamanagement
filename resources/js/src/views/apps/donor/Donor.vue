<!-- =========================================================================================
  File Name: Donor.vue
  Description: Donor module 
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-1/1 lg:w-1/1 xl:w-1/1 mb-base">
        <vx-card class="" title="Donor:">
         <DonorAddNew :bloods="bloods" :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-1/1 lg:w-1/1 xl:w-1/1">
         <vs-divider/>
        <vx-card title="Donor List:">
         <DonorList :donors="donors" :editModal="editModal"/>
        </vx-card>
      </div>
    </div>
</template>
<script>
import DonorAddNew          from './DonorAddNew.vue'
import DonorList            from './DonorList.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
        id:'',
        name:'',
        phone:'',
        email:'',
        sex:true,
        date:'',
        age:'',
        blood_id:'',
        status:true
       })
    }
  },
  computed: {
    donors() { return this.$store.getters['donors'] },
    bloods() { return this.$store.getters['bloods'] }
  },
  methods: {
     editModal(donor){
        this.editMode = true;
        this.form.fill(donor);
    }
  },
  components: {
    DonorAddNew,
    DonorList,
  },
  mounted () {
     this.$store.dispatch('fetchDonor');
     
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
