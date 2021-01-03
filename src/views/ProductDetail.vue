<template>
  <div class="product-detail">
    <Navbar />
    <b-container>
      <b-row>
        <b-col sm="6"><ImageDetail :imageDetail="allProduct"/></b-col>
        <b-col sm="6" style=""
          ><InformationDetail
            :informationDetail="[
              allProduct,
              allSize,
              productSize,
              productDelivery,
              allDelivery
            ]"
        /></b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import axios from 'axios'
import ImageDetail from '../components/product-detail/ImageDetail'
import InformationDetail from '../components/product-detail/InformationDetail'
export default {
  name: 'ProductDetail',
  components: {
    ImageDetail,
    InformationDetail,
    Navbar,
    Footer
  },
  data() {
    return {
      allProduct: [],
      allSize: [],
      productSize: [],
      productDelivery: [],
      allDelivery: []
    }
  },
  async created() {
    this.getProductDetail(this.$route.params.id)
    this.getSize()
    this.getDelivery()
  },
  methods: {
    getProductDetail(id) {
      axios
        .get(`http://localhost:3000/product/${id}`)
        .then(res => {
          this.allProduct = res.data.data[0]
          this.productSize = this.allProduct.size_id.split(',')
          this.productDelivery = this.allProduct.delivery_method_id.split(',')
        })
        .catch(error => {
          console.log(error)
        })
    },
    getSize() {
      axios
        .get('http://localhost:3000/size/size/')
        .then(res => {
          this.allSize = res.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    getDelivery() {
      axios
        .get('http://localhost:3000/size/delivery/')
        .then(res => {
          this.allDelivery = res.data.data
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
