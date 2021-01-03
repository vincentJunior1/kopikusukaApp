<template>
  <div class="div">
    <Navbar />
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  }
}
</script>
