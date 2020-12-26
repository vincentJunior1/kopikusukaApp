<template>
  <div class="form-detail">
    <div class="menu">
      <span class="title-detail">Favorite & Promo></span>
      <span class="menu-request"> Add New product</span>
    </div>
    <div class="image-div">
      <img
        class="image-product"
        src="../../assets/img/photo-camera-black-tool 4.png"
        alt=""
      />
    </div>
    <b-button class="take-picture-button">Take a picture</b-button>
    <b-button class="choose-button">Choose from gallery</b-button>
    <div class="delivery">
      <p class="delivery-method">Delivery Hour :</p>
      <b-form-select
        class="delivery-from"
        v-model="deliveryStart"
        :options="deliveryTime"
        ><b-select disabled>Select Start Hour</b-select></b-form-select
      >
      <b-form-select
        class="delivery-ended"
        v-model="deliveryEnded"
        :options="endedTime"
        ><b-select disabled>Select Start Hour</b-select></b-form-select
      >
      {{ deliveryStart }}
      {{ deliveryEnded }}
    </div>
    <div class="quantity">
      <p class="delivery-method">Quantity :</p>
      <input
        class="quantity-input"
        @input="getData"
        type="text"
        placeholder="Quantity"
      />
      {{ quantity }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'formDetail',
  data() {
    return {
      deliveryStart: null,
      deliveryEnded: null,
      deliveryTime: {
        1: '1 PM',
        2: '2 PM',
        3: '3 PM',
        4: '4 PM',
        5: '5 PM',
        6: '6 PM'
      },
      endedTime: {
        2: '2 PM',
        3: '3 PM',
        4: '4 PM',
        5: '5 PM',
        6: '6 PM',
        7: '7 PM'
      },
      quantity: 0
    }
  },
  created() {
    console.log(this.quantity)
  },
  methods: {
    getData(event) {
      this.quantity = event.target.value
      this.$root.$emit('dataQuantity', this.quantity)
    }
  }
}
</script>
<style scoped>
.form-detail {
  font-family: Rubik;
  /* text-align: center; */
}
.menu {
  margin-top: 38px;
}
.menu-request {
  color: #6a4029 !important;
}
.image-div {
  margin-top: 96px;
  width: 300px;
  height: 300px;
  border-radius: 300px;
  background-color: grey;
  margin-right: auto;
  margin-left: auto;
}
.image-product {
  width: 90px;
  height: 83px;
  margin-top: 35%;
  margin-bottom: 30%;
  margin-left: 35%;
  margin-right: 30%;
}
.take-picture-button {
  width: 70%;
  margin-left: 15%;
  margin-top: 34px;
  height: 65px;
  border-radius: 10px;
  background-color: #0b132a !important;
  font-weight: 700;
  /* margin-right: auto; */
}
.choose-button {
  width: 70%;
  margin-left: 15%;
  margin-top: 34px;
  height: 65px;
  border-radius: 10px;
  background-color: #ffba33 !important;
  color: #6a4029 !important;
  border: none !important;
}
.delivery {
  margin-left: 15%;
  margin-top: 72px;
}
.delivery-method {
  font-size: 25px;
  font-weight: 700;
  color: #6a4029;
}
.delivery-from {
  width: 81% !important;
  height: 65px;
  padding-left: 20px;
  font-size: 22px;
  border-radius: 20px;
}
.delivery-ended {
  width: 81% !important;
  height: 65px;
  padding-left: 20px;
  font-size: 22px;
  margin-top: 40px;
  border-radius: 20px;
}
.quantity {
  margin-left: 15%;
}
.quantity-input {
  width: 81%;
  height: 45px;
  padding-left: 5%;
  font-size: 16px;
  border: 1px solid rgb(226, 225, 225);
  border-radius: 10px;
}
</style>
