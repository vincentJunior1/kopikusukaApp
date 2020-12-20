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
        {{ form.product_price }}
        {{ form.product_name }}
        {{ form.product_description }}
      </div>
      <div class="form-group">
        <p class="label-input">Description :</p>
        <input
          class="input-add"
          type="text"
          v-model="form.product_description"
          placeholder="Describe your product min. 150 characters"
        />
        <p class="size-label">Input product size :</p>
        <p class="size-inf">Click size you want to use for this product</p>
        <div inline class="size">
          <b-button
            class="drink-button current"
            @Click="
              drinkButton
              rButton
            "
            :disabled="activeDrink === 0"
            >R</b-button
          >
          <b-button
            class="drink-button"
            @Click="
              drinkButton
              size += '1'
            "
            :disabled="activeDrink === 0"
            >L</b-button
          >
          <b-button
            class="drink-button"
            @click="drinkButton"
            :disabled="activeDrink === 0"
            >XL</b-button
          >
          <b-button
            class="food-button"
            @click="foodButton"
            :disabled="activeFood === 0"
            >250 Gram</b-button
          >
          <b-button
            class="food-button"
            @click="foodButton"
            :disabled="activeFood === 0"
            >500 Gram</b-button
          >
          <b-button
            class="food-button"
            @click="foodButton"
            :disabled="activeFood === 0"
            >750 Gram</b-button
          >
          <b-button class="food-button" @click="resetButton">Reset</b-button>
        </div>
        <p class="size-label">Input delivery method :</p>
        <p class="size-inf">Click method you want to use for this product</p>
      </div>
      <div inline class="size">
        <b-button class="delivery-button">Home Delivery</b-button>
        <b-button class="delivery-button">Dine In</b-button>
        <b-button class="delivery-button">Take away</b-button>
      </div>
      <b-button class="save-product" @click="getAllData">Save Product</b-button>
      <b-button class="cancel-product">Cancel</b-button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'formProduct',
  data() {
    return {
      activeDrink: 1,
      activeFood: 1,
      sizeProduct: '',
      form: {
        product_name: '',
        product_price: '',
        product_description: ''
      }
    }
  },
  created() {
    console.log(this.size)
    // console.log(this.form.product_name)
  },
  methods: {
    drinkButton() {
      this.activeDrink = 1
      this.activeFood = 0
    },
    foodButton() {
      this.activeDrink = 0
      this.activeFood = 1
    },
    resetButton() {
      this.activeDrink = 1
      this.activeFood = 1
    },
    rButton() {
      if (this.sizeProduct === '') {
        this.sizeProduct = '1'
      } else {
        this.sizeProduct = this.sizeProduct.join('1')
      }
      console.log('ok')
    },
    lButton() {
      if (this.sizeProduct === '') {
        this.sizeProduct = '2'
      } else {
        this.sizeProduct = this.sizeProduct.join('2')
      }
    },
    getAllData() {
      // console.log(this.form)
      this.$emit('formData', this.form)
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
.drink-button {
  width: 60px;
  height: 60px;
  border-radius: 60px;
  margin-right: 15px;
  border: none !important;
}
.food-button {
  width: 60px;
  height: 60px;
  text-align: center;
  font-size: 13px;
  border-radius: 60px;
  margin-right: 15px;
  border: none !important;
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
</style>
