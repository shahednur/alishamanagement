<!-- =========================================================================================
  File Name: Bed.vue
  Description: Bed module
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card class="" title="Bed Form:">
         <BedAddNew :rooms="rooms" :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mb-base">
        <vx-card title="Bed List:">
         <BedList :beds="beds" :editModal="editModal"/>
        </vx-card>
      </div>
    </div>
</template>

<script>
import BedAddNew          from './BedAddNew.vue'
import BedList            from './BedList.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
        id:'',
        room_id:'',
        bed_number:'',
        description:'',
        status:true
       })
    }
  },
  computed: {
    rooms() { return this.$store.getters['rooms'] },
    beds() { return this.$store.getters['beds'] }
    
  },
  methods: {
     editModal(room){
        this.editMode = true;
        this.form.fill(room);
    }
  },
  components: {
    BedAddNew,
    BedList,
  },
  mounted () {
     this.$store.dispatch('fetchBed');
     this.$store.dispatch('fetchRoom');
  }
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
  .not-data-table, .vs-table--not-data{
      display:none !important;
  }
</style>
