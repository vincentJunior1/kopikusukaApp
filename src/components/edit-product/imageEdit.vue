<template>
  <div class="image-detail">
    <div class="menu-detail">
      <span class="span-menu" style="cursor:pointer;" @click="goBack"
        >Favorite & Promo >
      </span>
      <span class="span-product">{{ dataDetail[0].product_name }}</span>
    </div>
    <img
      class="product-detail-image"
      id="product-image"
      :src="
        dataDetail[0].product_image == ''
          ? require('../../assets/img/coldbrew.png')
          : path + '/' + dataDetail[0].product_image
      "
      alt=""
    />
    <b-button class="edit-image" @click="editImage">✏️</b-button>
    <input type="file" id="fileUpload" @change="changeImage" hidden />
    <p class="about-delivery">
      Delivery only on <strong>Monday to friday </strong> at
      <strong>1 - 7 pm</strong>
    </p>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import dotenv from 'dotenv'
dotenv.config()
export default {
  name: 'imageEdit',
  data() {
    return {
      path: process.env.VUE_APP_ROOT_URL
    }
  },
  computed: {
    ...mapState(['dataDetail'])
  },
  created() {},
  methods: {
    ...mapMutations(['imageSave']),
    goBack() {
      this.$router.push('/product')
    },
    editImage() {
      document.getElementById('fileUpload').click()
    },
    changeImage(event) {
      document.getElementById('product-image').src = window.URL.createObjectURL(
        event.target.files[0]
      )
      this.imageSave(event.target.files[0])
    }
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
.edit-image {
  position: absolute;
  right: 50px;
  top: 170px;
  background-color: #6a4029 !important;
  border: none !important;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  padding-right: 10px;
}
</style>
