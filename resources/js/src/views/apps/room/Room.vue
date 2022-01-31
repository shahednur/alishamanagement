<!-- =========================================================================================
  File Name: Room.vue
  Description: Room module
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
    <div class="vx-row" id="profile-page">
      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3 mb-base">
        <vx-card class="" title="Room Form:">
         <RoomAddNew :editModal="editModal" :editMode="editMode" :form="form" />
        </vx-card>
      </div>
      <div class="vx-col w-full md:w-2/3 lg:w-2/3 xl:w-2/3 mb-base">
        <vx-card title="Room List:">
         <RoomList :rooms="rooms" :editModal="editModal"/>
        </vx-card>
      </div>
    </div>

</template>

<script>
import RoomAddNew          from './RoomAddNew.vue'
import RoomList            from './RoomList.vue'

export default {
  data () {
    return {
      editMode: false,
      form:new Form({
        id:'',
        name:'',
        description:'',
        limit:'',
        charge:'',
        status:true
       })
    }
  },
  computed: {
    rooms() { return this.$store.getters['rooms'] }
    
  },
  methods: {
     editModal(room){
        this.editMode = true;
        this.form.fill(room);
    }
  },
  components: {
    RoomAddNew,
    RoomList,
  },
  mounted () {
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
