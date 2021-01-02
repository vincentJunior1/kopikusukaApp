<template>
  <div class="div">
    <Navbar />
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
* {
  height: 1000px;
}
</style>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
  },
  created() {
    console.log(this.user.user_name)
  },
  methods: {
    ...mapState(['user'])
  }
}
</script>
