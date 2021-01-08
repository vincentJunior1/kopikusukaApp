<template>
  <div class="product">
    <Navbar />
    <div class="product-page">
      <b-container class="bv-example-row">
        <b-row class="product-page">
          <b-col class="cupon-info" sm="4">
            <Cupon />
          </b-col>
          <b-col sm="8">
            <b-row sm="12" style="display:inline" class="text-center">
              <ProductCard />
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import Cupon from '../components/_base/Cupon'
import ProductCard from '../components/_base/productCard'
export default {
  name: 'Product',
  components: {
    Cupon,
    ProductCard,
    Navbar,
    Footer
  }
}
</script>
<style scoped>
.product-page {
  height: 1000px;
}
</style>
