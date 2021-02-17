<template>
  <div class="detail-cupon">
    <div class="form-cupon">
      <div class="form-detail">
        <p class="label-input">Name :</p>
        <input
          type="text"
          class="input-text"
          v-model="form.cupon_name"
          placeholder="Type Cupon Name min 50 characters"
        />
        <p class="label-input">Price :</p>
        <input
          type="number"
          class="input-text"
          v-model="form.cupon_price"
          placeholder="Type the normal price"
        />
        <p class="label-input">Description :</p>
        <input
          type="text"
          class="input-text"
          v-model="form.cupon_description"
          placeholder="Describe your cupon "
        />
        <p class="label-input">Select Size :</p>
        <p class="label-desc">
          Click Product Size What you Want to use for this promo
        </p>
        <label class="container"
          >Reguler
          <input
            type="radio"
            class="size-id"
            checked="checked"
            v-model="form.size_id[0]"
            @click="drinkButton"
            :disabled="activeDrink === 0"
            :value="1"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Medium
          <input
            type="radio"
            class="size-id"
            checked="checked"
            v-model="form.size_id[1]"
            @click="drinkButton"
            :disabled="activeDrink === 0"
            :value="2"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Large
          <input
            type="radio"
            class="size-id"
            checked="checked"
            v-model="form.size_id[2]"
            @click="drinkButton"
            :disabled="activeDrink === 0"
            :value="3"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >250 Gram
          <input
            type="radio"
            class="size-id"
            checked="checked"
            v-model="form.size_id[3]"
            @click="foodBUtton"
            :disabled="activeFood === 0"
            :value="4"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >500 Gram
          <input
            type="radio"
            class="size-id"
            checked="checked"
            v-model="form.size_id[4]"
            @click="foodBUtton"
            :disabled="activeFood === 0"
            :value="5"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >750 Gram
          <input
            type="radio"
            class="size-id"
            checked="checked"
            v-model="form.size_id[5]"
            @click="foodBUtton"
            :disabled="activeFood === 0"
            :value="6"
          />
          <span class="checkmark"></span>
        </label>
        <p class="label-input" style="margin-top:20px;">
          Select Delivery Method :
        </p>
        <p class="label-desc">
          Click method what you want to use for this promo
        </p>
        <label class="container"
          >Home Delivery
          <input
            type="radio"
            class="size-id"
            checked="checked"
            v-model="form.delivery_method_id[0]"
            :value="1"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Dine In
          <input
            type="radio"
            class="size-id"
            checked="checked"
            v-model="form.delivery_method_id[1]"
            :value="2"
          />
          <span class="checkmark"></span>
        </label>
        <label class="container"
          >Take Away
          <input
            type="radio"
            class="size-id"
            checked="checked"
            v-model="form.delivery_method_id[2]"
            :value="3"
          />
          <span class="checkmark"></span>
        </label>
        <button class="save-cupon" @click="saveCupon">Save Promo</button>
        <button class="cancel-cupon">Cancel Promo</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { alert } from '../../mixins/alert'
export default {
  name: 'addDetailCupon',
  mixins: [alert],
  data() {
    return {
      activeFood: 1,
      activeDrink: 1,
      form: {
        cupon_name: '',
        cupon_price: 0,
        cupon_description: '',
        size_id: [],
        delivery_method_id: [],
        cupon_image: '',
        cupon_discount: 0,
        cupon_started_at: '',
        cupon_ended_at: '',
        cupon_code: '',
        cupon_status: 1,
        category_id: 0
      }
    }
  },
  computed: {
    ...mapGetters({
      photo: 'getCuponImage',
      discount: 'getCuponDiscount',
      start: 'getCuponStart',
      end: 'getCuponEnd',
      code: 'getCuponCode'
    })
  },
  methods: {
    ...mapActions(['postCupon']),
    foodBUtton() {
      this.activeDrink = 0
      this.form.category_id = 1
    },
    drinkButton() {
      this.activeFood = 0
      this.form.category_id = 2
    },
    saveCupon() {
      this.form.cupon_image = this.photo
      this.form.cupon_discount = this.discount
      this.form.cupon_started_at = this.start
      this.form.cupon_ended_at = this.end
      this.form.cupon_code = this.code
      let newSize = this.form.size_id.filter(item => item != null)
      let newDelivery = this.form.delivery_method_id.filter(
        item => item != null
      )
      const {
        cupon_name,
        cupon_price,
        cupon_description,
        cupon_discount,
        cupon_image,
        cupon_started_at,
        cupon_ended_at,
        cupon_code,
        cupon_status,
        category_id
      } = this.form
      const data = new FormData()
      data.append('cupon_name', cupon_name)
      data.append('cupon_price', cupon_price)
      data.append('cupon_description', cupon_description)
      data.append('cupon_discount', cupon_discount)
      data.append('cupon_image', cupon_image)
      data.append('size_id', newSize)
      data.append('delivery_method_id', newDelivery)
      data.append('cupon_started_at', cupon_started_at)
      data.append('cupon_ended_at', cupon_ended_at)
      data.append('cupon_status', cupon_status)
      data.append('cupon_code', cupon_code)
      data.append('category_id', category_id)
      this.postCupon(data)
        .then(result => {
          this.successAlert(result.data.message)
          this.$router.push('/product')
        })
        .catch(error => {
          this.errorAlert(
            'Please fill every field, make sure your image is JPG or PNG AND file size must below 4mb '
          )
        })
    }
  }
}
</script>
<style scoped>
.detail-cupon {
  margin-top: 120px;
}
.label-input {
  font-size: 18px;
  font-weight: 700;
  color: #6a4029;
}
.input-text {
  width: 100%;
  height: 55px;
  padding-left: 5%;
  border-radius: 10px;
  border: 1px solid grey;
  margin-bottom: 30px;
}
.label-desc {
  font-size: 12px;
  margin-top: -15px;
}
.save-cupon {
  width: 100%;
  margin-top: 30px;
  height: 65px;
  border-radius: 10px;
  background-color: #6a4029 !important;
  font-weight: 700;
  font-size: 22px;
  color: white;
  border: none !important;
}
.cancel-cupon {
  width: 100%;
  margin-top: 30px;
  height: 65px;
  border-radius: 10px;
  background-color: rgb(192, 192, 192) !important;
  font-weight: 700;
  font-size: 22px;
  color: #6a4029;
  border: none !important;
}
/* custom checkbox */
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
.container .size-id {
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
.container:hover .size-id ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container .size-id:checked ~ .checkmark {
  background-color: #ffba33;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container .size-id:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ffba33;
}
/* end custom checkbox */
</style>
