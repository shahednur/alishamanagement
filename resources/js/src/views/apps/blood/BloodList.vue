<!-- =========================================================================================
  File Name: BloodList.vue
  Description: Blood module list
  ----------------------------------------------------------------------------------------
  Software: Hospital Management System
  Author: Shahed Nur
  Author URL: https://www.github.com/shahednur
========================================================================================== -->


<template>
<div class="vx-col md:w-1/1  w-full mb-base">
            <vs-table>
                    <template slot="thead">
                        <vs-th sort-key="id" nowrap>SL</vs-th>
                        <vs-th sort-key="name" nowrap>Group Name</vs-th>
                        <vs-th sort-key="status" nowrap>Status</vs-th>
                        <vs-th nowrap>Actions</vs-th>
                    </template>
                    <template v-if="!bloods.length">
                        <vs-tr>
                        <vs-td colspan="4" class="text-center">No Group Available</vs-td>
                       </vs-tr>
                    </template>
                    <template v-else>
                        <vs-tr v-for="(blood, index) in bloods" :key="index">
                            <vs-td nowrap>
                                {{index+1}}
                            </vs-td>
                            <vs-td nowrap>
                                {{blood.group}}
                            </vs-td>
                            <vs-td nowrap>
                                {{blood.status}}
                            </vs-td>
                            <vs-td nowrap>
                                <div class="flex">
                                    <div class="flex items-center">
                                        <vs-button color="primary" type="flat" icon-pack="feather" icon="icon-edit" @click="editModal(blood)"></vs-button>
                                    </div>
                                </div>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
        </div>
</template>

<script>
export default {
 props:{
     bloods:{
         type:Array,
         required:true
     },
     editModal:{
         type:Function
     }
 },
  data (){
    return {

    }
  },
  methods: {

  },
}

</script>


<style lang="scss">
@import "@sass/vuexy/apps/todo.scss";
</style>
