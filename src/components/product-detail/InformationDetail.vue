<template>
  <div class="information-detail">
    <div class="process-payment">
      <img src="../../assets/img/proses.png" alt="" />
    </div>
    <p class="product-name">{{ informationDetail[0].product_name }}</p>
    <p class="product-prices">IDR {{ informationDetail[0].product_price }}</p>
    <p class="product-desc">{{ informationDetail[0].product_desc }}</p>
    <div class="mb-3">
      <select
        id="Size"
        class="form-control size-pick"
        placeholder="Select Size"
      >
        <option disabled selected class="size-option">Select Size</option>
        <option
          class="size-option"
          v-for="(item, index) in informationDetail[1]"
          :key="index"
          v-show="
            (item.category_id == informationDetail[0].category_id &&
              item.size_id == productSize[0]) ||
              item.size_id == productSize[1]
          "
          >{{ item.size_type }}</option
        >
      </select>
      <div class="mb-3">
        <select class="form-control delivery-method">
          <option disabled selected>Select Delivery Method</option>
        </select>
      </div>
    </div>
    <div class="group" style="position:relative;">
      <b-form inline class="form-quantity">
        <b-button class="quantity" @click="increment">+</b-button>
        <h5 class="count">{{ count }}</h5>
        <b-button class="quantity" @click="decrement">-</b-button>
      </b-form>
      <b-button class="add-to-cart">Add To Cart</b-button>
    </div>
    <b-button class="check-out">Check Out</b-button>
  </div>
</template>
<script>
export default {
  props: ['informationDetail'],
  computed: {
    splitSize() {
      let newSize = this.informationDetail[0].size_id.split(',')
      return newSize
    }
  },
  created() {
    this.productSize = this.splitSize
    // console.log(this.splitSize)
  },
  data() {
    return {
      size: [],
      productSize: [],
      count: 0
    }
  },
  methods: {
    increment() {
      this.count += 1
    },
    decrement() {
      if (this.count > 0) {
        this.count -= 1
      }
    }
  }
}
</script>

<style scoped>
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
