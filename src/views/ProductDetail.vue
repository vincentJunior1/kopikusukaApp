<template>
  <div class="product-detail">
    <Navbar />
    <b-container>
      <b-row>
        <b-col sm="6"><ImageDetail /></b-col>
        <b-col sm="6" style=""><InformationDetail /></b-col>
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
import { mapActions } from 'vuex'
export default {
  name: 'ProductDetail',
  components: {
    ImageDetail,
    InformationDetail,
    Navbar,
    Footer
  },
  data() {
    return {}
  },
  async created() {
    this.getProductDetail(this.$route.params.id)
    this.getSize()
    this.getDataSize()
    this.getDataDelivery()
  },
  methods: {
    ...mapActions(['getDataDetail']),
    ...mapActions(['getDataSize']),
    ...mapActions(['getDataDelivery']),
    getProductDetail(id) {
      this.getDataDetail(id)
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
    }
  }
}
</script>
