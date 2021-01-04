<template>
  <div class="payment-card">
    <div class="jumbotron">
      <b-container>
        <b-row>
          <b-col>
            <p class="title-checkout">Checkout Your Item Now!</p>
            <div class="data-cart">
              <p class="order-summary">Order Summary</p>
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
            <b-button class="pay-method">Confirm And Pay</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PaymentCard'
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
  height: 700px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 1px 2px 4px black;
  padding-top: 50px;
  padding-left: 40px;
  padding-right: 40px;
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
</style>
