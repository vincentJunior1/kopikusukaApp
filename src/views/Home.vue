<template>
  <div class="div">
    <Navbar />
    <div class="home">
      <Landingpage />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import Landingpage from '../components/LandingPage/LandingPage'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Landingpage
  }
}
</script>
