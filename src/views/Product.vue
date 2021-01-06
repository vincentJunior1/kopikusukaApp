<template>
  <div class="product">
    <Navbar />
    <b-container class="bv-example-row">
      <b-row class="product-page">
        <b-col class="cupon-info" sm="4">
          <Cupon v-bind:dataCupon="cupon"></Cupon>
        </b-col>
        <b-col sm="8">
          <b-row sm="12" style="display:inline" class="text-center">
            <ProductCard />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import Cupon from '../components/_base/Cupon'
import ProductCard from '../components/_base/productCard'
import axios from 'axios'
export default {
  name: 'Product',
  components: {
    Cupon,
    ProductCard,
    Navbar,
    Footer
  },

  data() {
    return {
      cupon: []
      // totalRows: null,
      // limit: 4,
      // page: 1
    }
  },
  created() {
    this.getCupon()
  },
  methods: {
    // getProduct() {
    //   axios
    //     .get(
    //       `http://localhost:3000/product/?page=${this.page}&limit=${this.limit}`
    //     )
    //     .then(res => {
    //       this.totalRows = res.data.pagination.totalData
    //       this.product = res.data.data
    //     })
    //     .catch(error => {
    //       console.log(error.response)
    //     })
    // },

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
    // getProductSort(event) {
    //   axios
    //     .get(
    //       `http://localhost:3000/sorting/${event}?page=${this.page}&limit=${this.limit}`
    //     )
    //     .then(res => {
    //       this.product = []
    //       this.product = res.data.data
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // }
  }
}
</script>
