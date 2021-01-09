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
                  <p class="product-price">IDR.{{ item.product_price }}</p>
                  <p class="delete-cart" @click="deleteData(index)">Delete</p>
                </div>
              </div>
              <div class="subtotal-div">
                <span class="subtotal-title">SubTotal </span>
                <span class="subtotal">IDR.{{ subtotal }} </span>
              </div>
              <div class="tax-div">
                <span class="tax-title">Tax</span>
                <span class="tax">IDR.{{ tax }}</span>
              </div>
              <div class="shipping-div">
                <span class="shipping-title">Shipping</span>
                <span class="shipping">IDR.{{ shipping }}</span>
              </div>
              <div class="total-div">
                <span class="total-title">Total</span>
                <span class="total">IDR.{{ total }}</span>
              </div>
            </div>
          </b-col>
          <b-col>
            <div class="detail">
              <span class="address-detail">Address Details</span>
              <span class="edit-detail">Edit</span>
              <div class="card-address">
                <p class="user-name">
                  <strong>Delivery</strong> to {{ user.user_name }}
                </p>
                <p class="user-address">{{ user.user_address }}</p>
                <p class="user-phone">{{ user.user_phone }}</p>
              </div>
              <span class="payment-detail">Payment Method</span>
              <div class="payment-method">
                <div class="choice">
                  <label class="container"
                    >Card
                    <input type="radio" checked="checked" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="choice">
                  <label class="container"
                    >Bank Account
                    <input type="radio" checked="checked" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                </div>
                <div class="choice-last">
                  <label class="container"
                    >Cash On Delivery
                    <input type="radio" checked="checked" name="radio" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
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
    ...mapGetters({ cart: 'getDataCart', user: 'setUser' })
  },
  data() {
    return {
      subtotal: 0,
      tax: 0,
      shipping: 10000,
      total: 0,
      modalShow: false
    }
  },
  created() {
    this.cart.forEach(x => {
      this.subtotal += x.product_price * x.history_detail_quantity
    })
    this.tax = this.subtotal * 0.1
    this.total = this.subtotal + this.tax + this.shipping
  },
  methods: {
    ...mapMutations(['setDataCart']),
    paymentButton() {
      let carts = []
      this.setDataCart(carts)
    },
    openModal() {
      this.modalShow = true
    },
    hideModal() {
      this.modalShow = false
    },
    paymentMath() {
      this.cart.forEach(x => {
        this.subtotal += x.product_price * x.history_detail_quantity
      })
      this.tax = this.subtotal * 0.1
      this.total = this.subtotal + this.tax + this.shipping
    },
    deleteData(id) {
      let recentCart = this.cart.splice(id, 1)
      this.subtotal =
        this.subtotal -
        recentCart[0].product_price * recentCart[0].history_detail_quantity
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
  height: 230px;
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
  padding-top: 40px;
  padding-left: 30px;
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
  font-size: 18px !important;
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
.subtotal-div {
  margin-top: 20px;
  position: relative;
  font-size: 26px;
}
.subtotal {
  position: absolute;
  right: 0px;
}
.subtotal-title {
  font-weight: 700;
}
.tax-div {
  margin-top: 10px;
  font-size: 26px;
  position: relative;
}
.tax-title {
  font-weight: 700;
}
.tax {
  position: absolute;
  right: 0px;
}
.shipping-div {
  margin-top: 10px;
  font-size: 26px;
  position: relative;
  border-bottom: 1px solid grey;
}
.shipping-title {
  font-weight: 700;
}
.shipping {
  position: absolute;
  right: 0px;
}
.total-div {
  margin-top: 10px;
  font-size: 32px;
  position: relative;
}
.total-title {
  font-weight: 700;
}
.total {
  position: absolute;
  right: 0px;
}
.card-address {
  padding-top: 15px;
  padding-left: 30px;
  padding-right: 20px;
}
.user-name {
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(196, 196, 196);
}
.user-address {
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(196, 196, 196);
}
.choice {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(196, 196, 196);
}
.choice-last {
  margin-bottom: 30px;
}
.delete-cart {
  position: absolute;
  bottom: 0px;
  right: 40px;
  font-size: 16px;
  color: red;
}

/* Custom Checkbox */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
/* costum checkbox */
</style>
