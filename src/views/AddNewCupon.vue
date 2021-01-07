<template>
  <div class="cupon-page">
    <Navbar />
    <div class="cupons">
      <b-container class="bv-example-row">
        <b-row>
          <b-col><AddCupon /></b-col>
          <b-col><AddDetailCupon /></b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/_base/Footer'
import Navbar from '../components/_base/Navbar'
import AddCupon from '../components/addnewcupon/addCupon'
import AddDetailCupon from '../components/addnewcupon/addDetailCupon'
export default {
  name: 'AddNewCupon',
  components: {
    Footer,
    Navbar,
    AddCupon,
    AddDetailCupon
  }
}
</script>

<style scoped>
.cupons {
  font-family: Rubik;
  height: 1300px;
}
</style>
