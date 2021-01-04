<template>
  <div class="history">
    <Navbar />
    <div class="jumbotron">
      <HistoryCard />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import HistoryCard from '../components/history/historyCard'
export default {
  name: 'History',
  components: {
    Navbar,
    Footer,
    HistoryCard
  }
}
</script>

<style scoped>
.history {
  height: 1000px;
}
.jumbotron {
  background-image: url('../assets/img/history.png') !important;
  height: 100%;
}
</style>
