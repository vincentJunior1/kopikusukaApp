<template>
  <div class="information-detail">
    <div class="process-payment">
      <img src="../../assets/img/proses.png" alt="" />
    </div>
    <b-alert
      class="alert-false"
      v-model="showDismissibleAlert"
      variant="danger"
      dismissible
    >
      {{ messageAlert }}
    </b-alert>
    <b-alert
      class="alert-false"
      v-model="addToCard"
      variant="success"
      dismissible
    >
      Success Added {{ detailProduct[0].product_name }} to card
    </b-alert>
    <p class="product-name">{{ detailProduct[0].product_name }}</p>
    <p class="product-prices">IDR {{ detailProduct[0].product_price }}</p>
    <p class="product-desc">{{ detailProduct[0].product_desc }}</p>
    <div class="mb-3">
      <select
        id="Size"
        class="form-control size-pick"
        v-model="product.history_size"
      >
        <option disabled selected class="size-option">Select Size</option>
        <option
          class="size-option"
          v-for="(item, index) in allSizes"
          :key="index"
          :value="item.size_type"
          v-show="
            (item.category_id == detailProduct[0].category_id &&
              item.size_id == setSize[0]) ||
              (item.category_id == detailProduct[0].category_id &&
                item.size_id == setSize[1]) ||
              (item.category_id == detailProduct[0].category_id &&
                item.size_id == setSize[2])
          "
          >{{ item.size_type }}</option
        >
      </select>
      <div class="mb-3">
        <select class="form-control delivery-method" v-model="product.delivery">
          <option disabled selected>Select Delivery Method</option>
          <option
            v-for="(item, index) in setDataDelivery"
            :key="index"
            :value="item.delivery_method_type"
            v-show="
              item.delivery_method_id == setDelivery[0] ||
                item.delivery_method_id == setDelivery[1] ||
                item.delivery_method_id == setDelivery[2]
            "
            >{{ item.delivery_method_type }}</option
          >
        </select>
      </div>
    </div>
    <div class="group" style="position:relative;">
      <b-form inline class="form-quantity">
        <b-button class="quantity" @click="increment">+</b-button>
        <h5 class="count">{{ product.history_detail_quantity }}</h5>
        <b-button
          class="quantity"
          @click="decrement"
          v-show="product.history_detail_quantity > 0"
          >-</b-button
        >
      </b-form>
      <b-button class="add-to-cart" @click="addToCart">Add To Cart</b-button>
    </div>
    <b-button class="check-out">Check Out</b-button>
    {{ product }}
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      detailProduct: 'setDetailProduct',
      setSize: 'setSizeProduct',
      setDelivery: 'setDeliveryProduct',
      setDataDelivery: 'setDataDelivery',
      allSizes: 'setAllSize',
      dataCart: 'getDataCart'
    })
  },
  created() {
    this.cart = this.dataCart
  },
  data() {
    return {
      product: {
        history_detail_quantity: 0,
        history_size: '',
        delivery: ''
      },
      cart: [],
      showDismissibleAlert: false,
      messageAlert: '',
      addToCard: false
    }
  },
  methods: {
    ...mapMutations(['setDataCart']),
    increment() {
      this.product.history_detail_quantity += 1
    },
    decrement() {
      if (this.product.history_detail_quantity > 0) {
        this.product.history_detail_quantity -= 1
      }
    },
    addToCart() {
      if (this.product.history_detail_quantity == 0) {
        this.showDismissibleAlert = true
        this.messageAlert = "Quantity Can't be empty"
      } else if (this.product.delivery == '') {
        this.showDismissibleAlert = true
        this.messageAlert = 'Please Select Delivery Method'
      } else if (this.product.history_size == '') {
        this.showDismissibleAlert = true
        this.messageAlert = 'Please Select Size First'
      } else {
        const setCart = {
          product_name: this.detailProduct[0].product_name,
          history_size: this.product.history_size,
          product_image: this.detailProduct[0].product_image,
          history_detail_quantity: this.product.history_detail_quantity,
          product_price: this.detailProduct[0].product_price
        }
        this.cart = [...this.cart, setCart]
        this.setDataCart(this.cart)
        this.addToCard = true
        setTimeout(() => {
          this.$router.push('/product')
        }, 3000)
      }
    }
  }
}
</script>

<style scoped>
.alert-false {
  position: fixed;
  top: 100px;
  right: 100px;
}
.information-detail {
  margin-top: 55px;
}
.product-name {
  text-transform: uppercase;
  margin-top: 70px;
  font-size: 52px;
  font-family: Rubik;
  font-weight: 900;
}
.product-prices {
  font-size: 34px;
  font-weight: 500;
  margin-top: 10px;
}
.product-desc {
  width: 450px;
  font-size: 18px;
  line-height: 36px;
  font-weight: 500;
  margin-top: 15px;
}
.size-pick {
  height: 65px;
  width: 81%;
  border-radius: 10px;
  padding-left: 5%;
  font-size: 22px;
}
.size-pick:focus {
  box-shadow: none !important;
}
.size-pick:focus {
  outline: none !important;
}

.size-option {
  font-size: 22px;
  font-family: Rubik;
  border-radius: 10px !important;
}
.group {
  margin-top: 20px;
  height: 65px;
}
.form-quantity {
  height: 100%;
  border: 1px solid black;
  border-radius: 20px;
  width: 30%;
  padding-left: 4px;
}
.count {
  font-size: 22px;
  margin-left: 20px;
  margin-right: 20px;
}
.quantity {
  width: 50px;
  height: 100%;
  background-color: transparent !important;
  color: black !important;
  font-size: 22px !important;
  border: none;
}
.quantity:focus {
  outline: none !important;
  box-shadow: none !important;
}
.add-to-cart {
  position: absolute;
  top: 0px;
  right: 100px;
  width: 50%;
  height: 100%;
  border-radius: 20px;
  background-color: #ffba33 !important;
  color: #6a4029 !important;
  font-weight: 700;
  font-size: 22px !important;
  border: none !important;
}

.add-to-cart:focus {
  box-shadow: none !important;
}
.delivery-method {
  margin-top: 20px;
  width: 81%;
  height: 65px;
  padding-left: 5%;
  font-size: 22px;
  font-weight: 400;
  border-radius: 10px;
}

.delivery-method:focus {
  box-shadow: none !important;
}
.check-out {
  margin-top: 20px;
  height: 65px;
  width: 81%;
  border-radius: 10px;
  background-color: #6a4029 !important;
  font-size: 22px;
  font-weight: 700;
}
.check-out:focus {
  box-shadow: none !important;
}
</style>
