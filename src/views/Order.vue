<template>
  <div class="order-page">
    <Navbar />
    <div class="jumbotron">
      <b-container>
        <b-row>
          <b-col>
            <AllOrder />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import AllOrder from '../components/AllOrder/AllOrder'
export default {
  name: 'Order',
  components: {
    AllOrder,
    Navbar,
    Footer
  },
  created() {
    this.getAllOrders()
  },
  methods: {
    ...mapActions(['getAllOrders'])
  }
}
</script>

<style scoped>
.jumbotron {
  background-image: url('../assets/img/payment-background.png');
  height: 1000px;
}
.order-page {
  height: 1000px;
}
</style>
