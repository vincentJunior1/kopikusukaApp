<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import './assets/styles.css';
</style>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  created() {
    this.interceptorRequest()
    this.interceptorResponse()
  },
  methods: {
    ...mapActions(['interceptorRequest', 'interceptorResponse'])
  }
}
</script>
