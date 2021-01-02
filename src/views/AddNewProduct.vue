<template>
  <div class="add-new-product">
    <Navbar />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6"><FormDetail @getData="dataQuantity"/></b-col>
        <b-col sm="6"><FormProduct v-on:getData="quantity"/></b-col>
        {{ quantity }}
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>
<style scoped>
.add-new-product {
  height: 1500px !important;
}
</style>
<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import FormProduct from '../components/add-new-product/formProduct'
import FormDetail from '../components/add-new-product/formDetail'
export default {
  name: 'AddNewProduct',
  components: {
    FormProduct,
    FormDetail,
    Navbar,
    Footer
  },
  data() {
    return {
      quantity: ''
    }
  },
  methods: {
    dataQuantity(event) {
      this.quantity = event
    }
  }
}
</script>
