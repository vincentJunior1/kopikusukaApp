<template>
  <div class="edit-detail">
    <div class="form-cupon">
      <div class="form-detail">
        <p class="label-input">Name :</p>
        <input
          type="text"
          class="input-text"
          v-model="cupon.cupon_name"
          placeholder="Type Cupon Name min 50 characters"
        />
        <p class="label-input">Price :</p>
        <input
          type="number"
          class="input-text"
          v-model="cupon.cupon_price"
          placeholder="Type the normal price"
        />
        <p class="label-input">Description :</p>
        <input
          type="text"
          class="input-text"
          v-model="cupon.cupon_description"
          placeholder="Describe your cupon "
        />
        <button class="save-cupon" @click="saveCupon">Save Promo</button>
        <button class="cancel-cupon">Cancel Promo</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { alert } from '../../mixins/alert'
export default {
  name: 'editDetailCupon',
  data() {
    return {
      form: {},
      sizeId: [],
      deliveryId: [],
      activeFood: 1,
      activeDrink: 1
    }
  },
  mixins: [alert],
  created() {
    this.form = this.cupon
  },
  computed: {
    ...mapGetters({ cupon: 'getCuponDetail', imageCupon: 'getCuponImage' })
  },
  methods: {
    ...mapActions(['patchCupon']),
    saveCupon() {
      let newDelivery = this.deliveryId.filter(x => {
        return x != ''
      })
      let newSize = this.sizeId.filter(x => {
        return x != ''
      })
      const {
        cupon_id,
        cupon_name,
        cupon_price,
        cupon_description,
        cupon_discount,
        cupon_started_at,
        cupon_ended_at,
        cupon_code,
        cupon_status,
        category_id
      } = this.form
      const data = new FormData()
      data.append('cupon_id', cupon_id)
      data.append('cupon_name', cupon_name)
      data.append('cupon_price', cupon_price)
      data.append('cupon_description', cupon_description)
      data.append('cupon_discount', cupon_discount)
      data.append('cupon_image', this.imageCupon)
      data.append('size_id', newSize)
      data.append('delivery_method_id', newDelivery)
      data.append('cupon_started_at', cupon_started_at)
      data.append('cupon_ended_at', cupon_ended_at)
      data.append('cupon_status', cupon_status)
      data.append('cupon_code', cupon_code)
      data.append('category_id', category_id)
      console.log('jalan')
      this.patchCupon(data)
        .then(result => {
          this.successAlert(result.data.message)
          this.$router.push('/product')
        })
        .catch(error => {
          this.errorAlert(error.data.mesasge)
        })
    },
    drinkButton() {
      this.activeFood = 0
      this.form.category_id = 2
    },
    foodButton() {
      this.activeFood = 0
      this.form.category_id = 1
    }
  }
}
</script>

<style scoped>
.edit-detail {
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
