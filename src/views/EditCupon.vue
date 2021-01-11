<template>
  <div class="edit-cupon">
    <Navbar />
    <div class="page-e">
      <b-container class="bv-example-row">
        <b-row>
          <b-col><EditImageCupon /></b-col>
          <b-col><EditDetailCupon /> </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import EditDetailCupon from '../components/edit-cupon/editDetailCupon'
import EditImageCupon from '../components/edit-cupon/editImageCupon'
import { mapActions } from 'vuex'
export default {
  name: 'EditCupon',
  components: {
    Navbar,
    Footer,
    EditDetailCupon,
    EditImageCupon
  },
  data() {
    return {
      id: ''
    }
  },
  created() {
    this.id = this.$route.params.id
    console.log(this.id)
    this.getCuponById(this.id)
  },
  methods: {
    ...mapActions(['getCuponById'])
  }
}
</script>
<style scoped>
.page-e {
  font-family: Rubik;
}
</style>
