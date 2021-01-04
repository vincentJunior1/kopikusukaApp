<template>
  <div class="payment-card">
    <Navbar />
    <div class="payment">
      <PaymentCard />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import PaymentCard from '../components/payment/PaymentCard'
export default {
  name: 'Payment',
  components: {
    Navbar,
    Footer,
    PaymentCard
  }
}
</script>
