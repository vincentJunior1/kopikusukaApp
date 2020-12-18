<template>
  <div class=""></div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ProductDetail',
  data() {
    return {
      allProduct: []
    }
  },
  created() {
    this.getProductDetail(this.$route.params.id)
  },
  methods: {
    getProductDetail(id) {
      console.log(id)
      axios
        .get(`http://localhost:3000/product/${id}`)
        .then(res => {
          this.allProduct = res.data.data[0]
          console.log(this.allProduct.product_price)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
