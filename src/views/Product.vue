<template>
  <div class="product">
    <b-container class="bv-example-row">
      <b-row class="product-page">
        <b-col class="cupon-info" sm="4">
          <Cupon v-bind:dataCupon="cupon"></Cupon>
        </b-col>
        <b-col sm="8">
          <b-row sm="12" style="display:inline" class="text-center">
            <ProductCard v-bind:dataProduct="product" />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Cupon from '../components/_base/Cupon'
import ProductCard from '../components/_base/productCard'
import axios from 'axios'
export default {
  name: 'Product',
  components: {
    Cupon,
    ProductCard
  },
  data() {
    return {
      cupon: [],
      product: []
    }
  },
  created() {
    this.getProduct()
    this.getCupon()
  },
  methods: {
    getProduct() {
      axios
        .get('http://localhost:3000/product/?page=1&limit=10')
        .then(res => {
          this.product = res.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    getCupon() {
      axios
        .get('http://localhost:3000/cupon')
        .then(res => {
          this.cupon = res.data.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
