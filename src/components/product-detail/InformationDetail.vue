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
          :key="index + 1"
          v-show="
            (item.category_id == informationDetail[0].category_id &&
              item.size_id == productSize[0]) ||
              item.size_id == productSize[1]
          "
          >{{ item.size_type }}</option
        >
      </select>
    </div>
    <div class="group" style="position:relative;">
      <b-form inline class="form-quantity">
        <b-button class="quantity" @click="increment">+</b-button>
        <h5 class="count">{{ count }}</h5>
        <b-button class="quantity" @click="decrement">-</b-button>
      </b-form>
      <b-button class="add-to-cart">Add To Cart</b-button>
    </div>
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
    console.log(this.productSize)
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
  margin-top: 30px;
}
.product-desc {
  width: 450px;
  font-size: 18px;
  line-height: 36px;
  font-weight: 500;
  margin-top: 45px;
}
.size-pick {
  height: 65px;
  width: 81%;
  border-radius: 10px;
  padding-left: 5%;
  font-size: 22px;
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
}
</style>
