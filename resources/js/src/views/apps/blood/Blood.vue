<!-- =========================================================================================
  File Name: Blood.vue
  Description: Blood module
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card class="" title="Blood Status:">
         <BloodAddNew :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mb-base">
        <vx-card title="Blood Group:">
         <BloodList :bloods="bloods" :editModal="editModal"/>
        </vx-card>
      </div>
    </div>

</template>

<script>
import BloodAddNew          from './BloodAddNew.vue'
import BloodList            from './BloodList.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
        id:'',
        group:'',
        status:'',
       })
    }
  },
  watch: {

  },
  computed: {
    bloods() { return this.$store.getters['bloods'] }
    
  },
  methods: {
     editModal(blood){
        this.editMode = true;
        this.form.fill(blood);
    }
  },
  components: {
    BloodAddNew,
    BloodList,
  },
  mounted () {
     this.$store.dispatch('fetchBlood');
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
