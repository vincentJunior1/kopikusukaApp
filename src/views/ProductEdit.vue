<template>
  <div class="product-edit">
    <Navbar />
    <b-container class="bv-example-row">
      <b-row>
        <b-col>1 of 3</b-col>
        <b-col><EditDetail /></b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import EditDetail from '../components/edit-product/editDetail'
import { mapActions } from 'vuex'
export default {
  name: 'productEdit',
  components: {
    Navbar,
    Footer,
    EditDetail
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
