<template>
  <div class="product-detail">
    <b-container>
      <b-row>
        <b-col sm="6"><ImageDetail :imageDetail="allProduct"/></b-col>
        <b-col sm="6" style=""
          ><InformationDetail :informationDetail="[allProduct, allSize]"
        /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
import ImageDetail from '../components/product-detail/ImageDetail'
import InformationDetail from '../components/product-detail/InformationDetail'
export default {
  name: 'ProductDetail',
  components: {
    ImageDetail,
    InformationDetail
  },
  data() {
    return {
      allProduct: [],
      allSize: []
    }
  },
  created() {
    this.getProductDetail(this.$route.params.id)
    this.getSize()
  },
  methods: {
    getProductDetail(id) {
      console.log(id)
      axios
        .get(`http://localhost:3000/product/${id}`)
        .then(res => {
          this.allProduct = res.data.data[0]
          // console.log(this.allProduct.product_name)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getSize() {
      axios
        .get('http://localhost:3000/size')
        .then(res => {
          this.allSize = res.data.data
          console.log(this.allSize)
        })
        .catch(error => {
          console.log(error)
        })
    }
    //   getCupon() {
    //     axios
    //     .get()
    //   }
  }
}
</script>
