<template>
  <div class="product-edit">
    <Navbar />
    <b-container class="bv-example-row">
      <b-row sm="12">
        <b-col sm="6"><ImageEdit /></b-col>
        <b-col sm="6"><EditDetail /></b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import EditDetail from '../components/edit-product/editDetail'
import ImageEdit from '../components/edit-product/imageEdit'
import { mapActions } from 'vuex'
export default {
  name: 'productEdit',
  components: {
    Navbar,
    Footer,
    EditDetail,
    ImageEdit
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  created() {
    this.getDataDetail(this.id)
  },
  methods: {
    ...mapActions(['getDataDetail'])
  }
}
</script>
