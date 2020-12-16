<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<style>
@import './assets/styles.css';
</style>

<script>
import Navbar from './components/_base/Navbar'
import Footer from './components/_base/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
