]<!-- =========================================================================================
    File Name: Faq.vue
    Description: FAQ Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="faq-page">
        <!-- JUMBOTRON -->
        <div class="vx-row">
            <div class="vx-col w-full md:w-5/5 lg:w-4/4 rounded-lg">
                <vx-card class="w-full">
                  <vs-table>
                        <template>
                          <vs-th>ID</vs-th>
                          <vs-th>Product Name</vs-th>
                          <vs-th>Description</vs-th>
                          <vs-th>Price</vs-th>
                          <vs-th>Stocks</vs-th>
                        </template>

                        <template>
                          <vs-tr v-for="item in products" :key="item.id">
                            <vs-td >
                             {{item.id}}
                            </vs-td>
                            <vs-td>
                               {{item.product_name}}
                            </vs-td>
                            <vs-td >
                               {{item.description}}
                            </vs-td>
                            <vs-td >
                               {{item.price}}
                            </vs-td>
                            <vs-td >
                               {{item.quantity}}
                            </vs-td>
                          </vs-tr>
                        </template>
                      </vs-table>
                      <br>
                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default{
  data () {
    return {

    }
  },
  computed: {
     ...mapGetters(['products'])
  },
  created() {
    this.$store.dispatch('getProducts');
  },
  methods: {
  },
  components: {
  }
}
</script>

<style lang="scss">
#faq-page {
    .faq-jumbotron-content {
        background-image: url('../../../../assets/images/pages/faq.jpg');
        background-size: cover;
    }

    .faq-bg {
        background-color: #fff;
    }
}
</style>
