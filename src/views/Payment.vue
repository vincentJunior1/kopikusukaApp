<template>
  <div class="payment-card">
    <Navbar />
    <div class="payment">
      <div class="jumbotron">
        Hello
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
export default {
  name: 'Payment',
  components: {
    Navbar,
    Footer
  }
}
</script>
<style scoped>
.jumbotron {
  background-image: url('../assets/img/payment-background.png');
}
</style>
