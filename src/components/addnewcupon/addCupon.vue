<template>
  <div class="add-cupon">
    <div class="menu">
      <span class="title-detail" @click="goBack">Favorite & Promo></span>
      <span class="menu-request"> Add New Promo</span>
    </div>
    <div class="image-div">
      <img
        class="image-product"
        src="../../assets/img/photo-camera-black-tool 4.png"
        alt=""
      />
    </div>
    <input type="file" @change="cuponPhoto" hidden id="fileUpload" />
    <button @click="chooseFile" class="input-photo">
      {{ photo }}
    </button>
    <button @click="chooseFile" class="from-gallery">
      Choose From Gallery
    </button>
    <div class="discount">
      <p class="enter-discount">Enter the discount :</p>
      <input
        type="text"
        @change="cuponDiscount"
        class="input-discount"
        placeholder="Input Discount"
      />
    </div>
    <div class="discount-date">
      <p class="enter-discount">Expired Date</p>
      <input
        type="text"
        onfocus="(this.type = 'date')"
        onblur="(this.type = 'text')"
        @change="cuponStart"
        placeholder="Select Date Start"
        class="start-date"
      />
      <input
        type="text"
        onfocus="(this.type = 'date')"
        onblur="(this.type = 'text')"
        @change="cuponEnd"
        placeholder="Select End Date"
        class="end-date"
      />
    </div>
    <div class="discount-code">
      <p class="enter-discount">Input Cupon Code</p>
      <input
        type="text"
        class="cupon-code"
        @changeCupon="cuponCode"
        placeholder="Input Cupon Code"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'addCupon',
  data() {
    return {
      photo: 'Upload Photo'
    }
  },
  methods: {
    ...mapMutations(['setCuponImage']),
    ...mapMutations(['setCuponDiscount']),
    ...mapMutations(['setCuponStart']),
    ...mapMutations(['setCuponEnd']),
    ...mapMutations(['setCuponCode']),
    goBack() {
      this.$router.push('/product')
    },
    chooseFile() {
      document.getElementById('fileUpload').click()
    },
    cuponPhoto(event) {
      this.photo = event.target.files[0].name
      this.setCuponImage(event.target.files[0])
    },
    cuponDiscount(event) {
      this.setCuponDiscount(event.target.value)
    },
    cuponStart(event) {
      this.setCuponStart(event.target.value)
    },
    cuponEnd(event) {
      this.setCuponEnd(event.target.value)
    },
    cuponCode(event) {
      this.setCuponCode(event.target.value)
    }
  }
}
</script>
<style scoped>
.add-cupon {
  padding-top: 30px;
}
.title-detail {
  cursor: pointer;
}
.menu-request {
  font-weight: 700;
}
.image-div {
  max-width: 300px;
  height: 300px;
  padding-top: 19%;
  padding-left: 19%;
  background-color: grey;
  margin-top: 70px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 150px;
}
.input-photo {
  width: 70%;
  height: 60px;
  outline: none;
  border: none;
  border-radius: 10px;
  margin-top: 30px;
  margin-left: 15%;
  background-color: #0b132a !important;
  font-weight: 700;
  color: white;
  box-shadow: 2px 2px 4px rgb(0, 0, 0);
}
.from-gallery {
  margin-top: 30px;
  width: 70%;
  height: 60px;
  outline: none;
  border: none;
  border-radius: 10px;
  margin-left: 15%;
  background-color: #ffba33 !important;
  font-weight: 700;
  box-shadow: 2px 2px 4px rgb(0, 0, 0);
}
.discount {
  margin-top: 50px;
  margin-left: 15%;
}
.enter-discount {
  font-size: 16px;
  font-weight: 700;
  color: #6a4029;
}
.input-discount {
  width: 65%;
  height: 50px;
  padding-left: 5%;
  border-radius: 10px;
  border: 1px solid grey;
}
.discount-date {
  margin-top: 30px;
  margin-left: 15%;
}
.start-date {
  width: 65%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid grey;
  padding-left: 5%;
}
.end-date {
  width: 65%;
  height: 50px;
  border-radius: 10px;
  border: 1px solid grey;
  padding-left: 5%;
  margin-top: 15px;
}
.discount-code {
  margin-left: 15%;
  margin-top: 30px;
}
.cupon-code {
  width: 65%;
  height: 50px;
  border: 1px solid grey;
  border-radius: 10px;
  padding-left: 5%;
}
</style>
