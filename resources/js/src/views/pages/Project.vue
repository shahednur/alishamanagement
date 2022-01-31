<template>
    <div class="vx-row" id="profile-page">
        <vx-card class="" title="Project Information Form:">
          <!-- data input -->
        </vx-card>
        <vs-divider/>
         <!--data display -->
    </div>

</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import moduleProject from '@/store/project/moduleProject.js';

    export default{
        name:'Project',
        data () {
            return {
              editMode: false,
            //   form: new Form({
            //       name:'',
            //       project_code:'',
            //       initial_value:'',
            //       revised_value:'',
            //       start_date:'',
            //       location:'',
            //       noa:'',
            //       narration:'',
            //       company_id:'',
            //       company_group_id:'',
            //       created_by:'',
            //       created_date:'',
            //       status:false
            //   }),
            backgroundLoading:'primary',
            colorLoading:'#fff',
            }
        },
        mounted() {
           // this.$store.dispatch('fetchProjectItems');
           this.$store.dispatch('fetchProjectItems');
        },
        computed: {
            projects() {
                return this.$store.getters['projects'];
            }
        },
        methods:{
             confirmDeleteRecord () {
                this.$vs.dialog({
                    type: 'confirm',
                    color: 'danger',
                    title: 'Confirm Delete',
                    text: 'You are about to delete',
                    accept:'',
                    acceptText: 'Delete'
                })
            }
        },
        created () {
            // if (!moduleProject.isRegistered) {
            //     this.$store.registerModule('projecting', moduleProject)
            //     moduleProject.isRegistered = true
            // }
            
            //this.$store.registerModule('projecting', moduleProject)
        },
        components: {
            Datepicker
        }
}
</script>
<style scoped>
    .vs-divider{
        margin:6px 0px !important;
    }
    label{
        margin-top:10px;
    }
</style>

