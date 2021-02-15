<template>
  <div class="information-detail">
    <div class="process-payment">
      <img src="../../assets/img/proses.png" alt="" />
    </div>
    <input type="text" class="product-name" v-model="product.product_name" />
    <input
      type="number"
      class="product-prices"
      v-model="product.product_price"
    />

    <textarea type="text" class="product-desc" v-model="product.product_desc">
    </textarea>
    <select id="Size" class="form-control size-pick" v-model="product.size_id">
      <option disabled selected class="size-option">Select Size</option>
      <option
        class="size-option"
        v-for="(item, index) in size"
        :key="index"
        v-show="
          item.size_id == dataSizeProduct[0] ||
            item.size_id == dataSizeProduct[1] ||
            item.size_id == dataSizeProduct[2]
        "
        >{{ item.size_type }}</option
      >
    </select>
    <select
      id="Size"
      class="form-control delivery-method"
      placeholder="Selet Size"
    >
      <option disabled selected class="size-option">Delivery Method</option>
      <option
        class="size-option"
        v-for="(item, index) in delivery"
        :key="index"
        v-show="
          item.delivery_method_id == dataDeliveryProduct[0] ||
            item.delivery_method_id == dataDeliveryProduct[1] ||
            item.delivery_method_id == dataDeliveryProduct[2]
        "
        >{{ item.delivery_method_type }}</option
      >
    </select>
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
      <b-button class="add-to-cart">Add To Cart</b-button>
    </div>
    <b-button class="check-out" @click="saveEdit(product)"
      >Save Product</b-button
    >
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { alert } from '../../mixins/alert'
export default {
  name: 'editDetail',
  data() {
    return {
      product: {},
      delivery: {},
      deliveryValidation: [],
      size: {}
    }
  },
  mixins: [alert],
  created() {
    this.product = this.setDetailProduct[0]
    console.log(this.setDetailProduct)
    this.getDataDelivery()
    this.delivery = this.dataDelivery
    this.getSize()
  },
  computed: {
    ...mapGetters(['setDetailProduct', 'getImageProduct']),
    ...mapState(['dataDeliveryProduct']),
    ...mapState(['dataDetail']),
    ...mapState(['dataDelivery']),
    ...mapState(['dataSizeProduct'])
  },
  methods: {
    ...mapActions(['getDataDelivery']),
    ...mapActions(['getDataSize']),
    ...mapActions(['saveEditProduct']),
    increment() {
      this.product.history_detail_quantity += 1
    },
    decrement() {
      if (this.product.history_detail_quantity > 0) {
        this.product.history_detail_quantity -= 1
      }
    },
    getSize() {
      this.getDataSize()
    },
    saveEdit() {
      const {
        category_id,
        product_name,
        product_price,
        product_desc,
        size_id,
        product_status
      } = this.product
      const data = new FormData()
      data.append('category_id', category_id)
      data.append('product_name', product_name)
      data.append('product_price', product_price)
      data.append('product_desc', product_desc)
      data.append('product_image', this.getImageProduct)
      data.append('size_id', size_id)
      data.append('product_status', product_status)
      this.saveEditProduct(data)
        .then(result => {
          this.successAlert(result.data.message)
          this.$router.push('/product')
        })
        .catch(error => {
          this.errorAlert(error.data.message)
        })
    }
  }
}
</script>

<style scoped>
input {
  border: none;
}
input:focus {
  box-shadow: none !important;
  outline: none;
}
textarea {
  border: none;
}
textarea:focus {
  outline: none;
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
  border-bottom: 1px solid black;
  border-width: 75% !important;
  width: 100%;
}
.product-prices {
  font-size: 34px;
  font-weight: 500;
  margin-top: 20px;
  border-bottom: 1px solid black;
}
.product-desc {
  width: 450px;
  font-size: 18px;
  line-height: 36px;
  font-weight: 500;
  margin-top: 25px;
  height: 150px;
  border-bottom: 1px solid black;
}
.size-pick {
  height: 65px;
  width: 81%;
  border-radius: 10px;
  padding-left: 5%;
  font-size: 22px;
  margin-top: 40px;
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
