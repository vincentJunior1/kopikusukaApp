<template>
  <div class="image-detail">
    <div class="menu-detail">
      <span class="span-menu">Favorite & Promo > </span>
      <span class="span-product">{{ setDetailProduct[0].product_name }}</span>
    </div>
    <img
      class="product-detail-image"
      sm="12"
      :src="
        setDetailProduct[0].product_image == ''
          ? require('../../assets/img/coldbrew.png')
          : 'http://localhost:3000/' + setDetailProduct[0].product_image
      "
      alt=""
    />
    <p class="about-delivery">
      Delivery only on <strong>Monday to friday </strong> at
      <strong>1 - 7 pm</strong>
    </p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      showData() {
        console.log(this.imageDetail)
      }
    }
  },
  computed: {
    ...mapGetters(['setDetailProduct'])
  }
}
</script>

<style scoped>
.product-detail-image {
  width: 513px;
  height: 670px;
}
.image-detail {
  margin-top: 70px;
  font-family: Rubik;
}
.menu-detail {
  margin-bottom: 70px;
}
.span-product {
  color: #6a4029;
  font-weight: 900;
}
.about-delivery {
  margin-top: 60px;
  width: 260px;
  font-size: 20px;
  margin-bottom: 140px;
}
</style>
