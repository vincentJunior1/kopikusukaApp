<template>
  <div class="payment-card">
    <div class="jumbotron">
      <b-container>
        <b-row>
          <b-col>
            <p class="title-checkout">Checkout Your Item Now!</p>
            <div class="data-cart">
              <p class="order-summary">Order Summary</p>
              <div class="all-data">
                <div class="cart" v-for="(item, index) in cart" :key="index">
                  <img
                    class="product-image"
                    :src="'http://localhost:3000/' + item.product_image"
                    alt=""
                  />
                  <div class="inf-product">
                    <p class="product-name">{{ item.product_name }}</p>
                    <p class="product-quantity">
                      x {{ item.history_detail_quantity }}
                    </p>
                    <p class="product-size">{{ item.history_size }}</p>
                  </div>
                  <p class="product-price">{{ item.product_price }}</p>
                </div>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="detail">
              <span class="address-detail">Address Details</span>
              <span class="edit-detail">Edit</span>
              <div class="card-address"></div>
              <span class="payment-detail">Payment Method</span>
              <div class="payment-method"></div>
            </div>
            <b-button class="pay-method" @click="paymentButton"
              >Confirm And Pay</b-button
            >
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'PaymentCard',
  computed: {
    ...mapGetters({ cart: 'getDataCart' })
  },
  created() {
    console.log(this.cart)
  },
  methods: {
    ...mapMutations(['setDataCart']),
    paymentButton() {
      let carts = []
      this.setDataCart(carts)
    }
  }
}
</script>
<style scoped>
* {
  font-family: Rubik;
}
.jumbotron {
  background-image: url('../../assets/img/payment-background.png');
}
.title-checkout {
  font-size: 35px;
  max-width: 300px;
  color: white;
  font-family: Rubik;
  font-weight: 700;
  text-shadow: 0px 4px 5px black;
}
.data-cart {
  width: 90%;
  height: 900px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 1px 2px 4px black;
  padding-top: 50px;
  padding-left: 40px;
  padding-right: 40px;
  position: relative;
}
.order-summary {
  font-size: 35px;
  color: #362115;
  font-weight: 700;
  text-align: center;
  border-bottom: 1px solid rgb(194, 194, 194);
  padding-bottom: 30px;
}
.detail {
  margin-top: 100px;
}
.address-detail {
  font-size: 20px;
  color: white;
  font-weight: 700;
  text-shadow: 0px 3px 5px black;
}
.edit-detail {
  float: right;
  margin-top: 5px;
  margin-right: 190px;
  color: white;
  font-weight: 700;
  text-shadow: 0px 3px 5px black;
  cursor: pointer;
}
.card-address {
  max-width: 70%;
  background-color: white;
  height: 200px;
  border-radius: 20px;
  margin-bottom: 40px;
}
.payment-detail {
  font-size: 20px;
  color: white;
  font-weight: 700;
  text-shadow: 0px 3px 5px black;
  margin-top: 30px;
}
.payment-method {
  max-width: 70%;
  height: 300px;
  border-radius: 20px;
  margin-top: 10px;
  background-color: white;
}
.pay-method {
  margin-top: 30px;
  height: 50px;
  border-radius: 10px;
  background-color: #6a4029;
  width: 70% !important;
  font-weight: 500;
}
.product-image {
  width: 82px;
  height: 90px;
  border-radius: 30px;
}
.cart {
  position: relative;
  margin-top: 20px;
}
.inf-product {
  position: absolute;
  top: 5px;
  left: 100px;
  line-height: 15px;
}
.product-price {
  position: absolute;
  top: 35px;
  right: 40px;
}
.all-data {
  margin-top: 50px;
  margin-left: 10px;
  height: 400px;
  overflow-y: scroll;
  padding-bottom: 40px;
  border-bottom: 1px solid grey;
}
</style>
