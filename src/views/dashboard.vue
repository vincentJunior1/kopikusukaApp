<template>
  <div class="dashboard">
    <Navbar />
    <div class="dashboard-page">
      <b-container class="bv-example-row">
        <b-row>
          <b-col sm="3" mr="auto">Today Income</b-col>
          <b-col sm="3" mr="auto">Orders</b-col>
          <b-col sm="3" mr="auto">Year Income</b-col>
          <b-col sm="12">Cart</b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import { mapActions } from 'vuex'
export default {
  name: 'dashboard',
  components: {
    Navbar,
    Footer
  },
  created() {
    this.getDashboard()
  },
  methods: {
    ...mapActions(['getDashboard'])
  }
}
</script>
