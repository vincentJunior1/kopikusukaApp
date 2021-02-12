<template>
  <div class="form-add">
    <form>
      <div class="form-group">
        <p class="label-input">Name :</p>
        <input
          class="input-add"
          type="text"
          v-model="form.product_name"
          placeholder="Type product name min. 50 characters"
        />
      </div>
      <div class="form-group">
        <p class="label-input">Normal Price :</p>
        <input
          class="input-add"
          v-model="form.product_price"
          type="text"
          placeholder="Type the price"
        />
      </div>
      <div class="form-group">
        <p class="label-input">Description :</p>
        <input
          class="input-add"
          type="text"
          v-model="form.product_desc"
          placeholder="Describe your product min. 150 characters"
        />
        <p class="size-label">Input product size :</p>
        <p class="size-inf">Click size you want to use for this product</p>
        <div inline class="size">
          <label class="container"
            >Reguler
            <input
              class="radio-size"
              type="radio"
              checked="checked"
              @click="drinkButton"
              :value="1"
              v-model="form.size_id[0]"
              :disabled="activeDrink == 0"
            />
            <span class="checkmark"></span>
          </label>
          <label class="container"
            >Medium
            <input
              class="radio-size"
              type="radio"
              checked="checked"
              @click="drinkButton"
              :value="2"
              v-model="form.size_id[1]"
              :disabled="activeDrink == 0"
            />
            <span class="checkmark"></span>
          </label>
          <label class="container"
            >Large
            <input
              type="radio"
              class="radio-size"
              @click="drinkButton"
              checked="checked"
              :value="3"
              v-model="form.size_id[2]"
              :disabled="activeDrink == 0"
            />
            <span class="checkmark"></span>
          </label>
          <label class="container"
            >250 Gram
            <input
              class="radio-size"
              type="radio"
              @click="foodButton"
              checked="checked"
              :value="4"
              v-model="form.size_id[3]"
              :disabled="activeFood == 0"
            />
            <span class="checkmark"></span>
          </label>
          <label class="container"
            >500 Gram
            <input
              class="radio-size"
              type="radio"
              @click="foodButton"
              checked="checked"
              :value="5"
              v-model="form.size_id[4]"
              :disabled="activeFood == 0"
            />
            <span class="checkmark"></span>
          </label>
          <label class="container"
            >750 Gram
            <input
              type="radio"
              class="radio-size"
              @click="foodButton"
              checked="checked"
              :value="6"
              v-model="form.size_id[5]"
              :disabled="activeFood == 0"
            />
            <span class="checkmark"></span>
          </label>
          <b-button class="food-button" @click="resetButton">Reset</b-button>
        </div>
        <p class="size-label">Input delivery method :</p>
        <p class="size-inf">Click method you want to use for this product</p>
      </div>
      <div inline class="size">
        <label class="container"
          >Home Delivery
          <input
            type="radio"
            class="radio-size"
            checked="checked"
            :value="1"
            v-model="form.delivery_method_id[0]"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Dine In
          <input
            type="radio"
            class="radio-size"
            checked="checked"
            :value="2"
            v-model="form.delivery_method_id[1]"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Take Away
          <input
            type="radio"
            class="radio-size"
            checked="checked"
            :value="3"
            v-model="form.delivery_method_id[2]"
          />
          <span class="checkmark"></span>
        </label>
        <b-button class="food-button" @click="resetDelivery">Reset</b-button>
      </div>
      <b-button class="save-product" @click="getAllData">Save Product</b-button>
      <b-button class="cancel-product">Cancel</b-button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'formProduct',
  props: ['getData'],
  data() {
    return {
      message: '',
      activeDrink: 1,
      activeFood: 1,
      form: {
        size_id: [],
        product_name: '',
        product_price: '',
        category_id: 0,
        product_desc: '',
        quantityProduct: 0,
        delivery_method_id: [],
        product_image: '',
        product_status: 1
      }
    }
  },
  computed: {
    ...mapGetters(['getImageProduct'])
  },
  created() {
    console.log(this.quantityProduct)
  },
  mounted() {
    this.$root.$on('dataQuantity', event => {
      this.form.quantityProduct = event
    })
  },
  methods: {
    ...mapActions(['postProduct']),
    drinkButton() {
      this.activeDrink = 1
      this.activeFood = 0
      this.form.category_id = 1
    },
    foodButton() {
      this.activeDrink = 0
      this.activeFood = 1
      this.form.category_id = 2
    },
    resetButton() {
      this.form.size_id = []
      this.activeFood = 1
      this.activeDrink = 1
    },
    resetDelivery() {
      this.form.delivery_method = []
    },
    getAllData() {
      this.form.product_image = this.getImageProduct
      const {
        product_name,
        product_price,
        product_status,
        product_desc,
        category_id,
        size_id,
        delivery_method_id,
        product_image
      } = this.form
      const data = new FormData()
      data.append('product_name', product_name)
      data.append('product_price', product_price)
      data.append('product_desc', product_desc)
      data.append('size_id', size_id)
      data.append('category_id', category_id)
      data.append('delivery_method_id', delivery_method_id)
      data.append('product_image', product_image)
      data.append('product_status', product_status)
      this.postProduct(data)
        .then(result => {
          this.message = result.data.data.message
          this.$router.push('/product')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>
.form-add {
  margin-top: 154px;
}
.form-group {
  display: block;
}
.input-add {
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: 1px solid rgb(202, 202, 202) !important;
  padding-left: 5%;
}
.input-add:focus {
  box-shadow: none !important ;
  outline: none !important ;
}
.label-input {
  font-size: 22px;
  font-weight: 700;
  color: #6a4029;
}
.size {
  margin-top: 30px;
  /* text-align: center; */
}

.current {
  background-color: #ffba33 !important;
}
.size-label {
  margin-top: 30px;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0px;
  color: #6a4029;
}
.size-inf {
  font-size: 16px;
  color: #9f9f9f;
}
.delivery-button {
  width: 130px;
  height: 52px;
  border-radius: 10px;
  margin-right: 27px;
}
.save-product {
  width: 96%;
  margin-top: 70px;
  height: 65px;
  border-radius: 10px;
  background-color: #6a4029 !important;
  font-weight: 700;
  font-size: 22px;
  border: none !important;
}

.cancel-product {
  width: 96%;
  margin-top: 20px;
  height: 65px;
  border-radius: 10px;
  background-color: rgba(194, 194, 194, 0.35) !important;
  color: black !important;
  font-weight: 700;
  font-size: 22px;
  border: none !important;
}
.save-product:focus {
  box-shadow: none !important;
}
.cancel-product:focus {
  box-shadow: none !important;
}
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
.container .radio-size {
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
.container:hover .radio-size ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container .radio-size:checked ~ .checkmark {
  background-color: #ffba33;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container .radio-size:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
</style>
