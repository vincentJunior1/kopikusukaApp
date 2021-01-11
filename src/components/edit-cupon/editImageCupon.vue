<template>
  <div class="edit-image">
    <span class="menu">Favorite & promo</span>
    <span class="page-name"> > Edit Promo</span>
    <div class="discount-card">
      <div class="promo-card">
        <button class="edit-images">✏️</button>
        <img
          class="promo-image"
          :src="
            cupon.cupon_image === ''
              ? require('../../assets/img/favorite1.png')
              : 'http://localhost:3000/cupon/' + cupon.cupon_image
          "
          alt=""
        />
        <p class="promo-titles">{{ cupon.cupon_name }}</p>
        <p class="promo-discounts">{{ cupon.cupon_discount }} %</p>
        <p class="promo-inf">
          {{ cupon.cupon_description }}
        </p>
      </div>
      <div class="promo-code">
        <p class="title-codes">Coupon Code</p>
        <p class="promo-codes">{{ cupon.cupon_code }}</p>
        <p class="expired-promo">Valid Until {{ endedAt }}</p>
      </div>
    </div>
    <div class="date-promo">
      <p class="date-expired">Expired Date</p>
      <input class="date" type="date" :value="dateStarted" />
      <input class="date" type="date" :value="dateEnded" />
    </div>
    <div class="input-promo">
      <p class="codes-promo">Code Promo</p>
      <input class="code-promo" v-model="cupon.cupon_code" type="text" />
    </div>
    <div class="input-promo">
      <p class="codes-promo">Discount</p>
      <input class="code-promo" v-model="cupon.cupon_discount" type="text" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
  name: 'editImageCupon',
  created() {
    console.log(this.cupon)
    this.dateEnded = this.cupon.cupon_ended_at
    this.dateEnded = moment(this.dateEnded).format('YYYY-MM-DD')
    this.dateStarted = this.cupon.cupon_started_at
    this.dateStarted = moment(this.dateStarted).format('YYYY-MM-DD')
    this.endedAt = this.cupon.cupon_ended_at
    this.endedAt = moment(this.endedAt).format('DD-MM-YYYY')
  },
  data() {
    return {
      dateEnded: '',
      dateStarted: '',
      endedAt: ''
    }
  },
  computed: {
    ...mapGetters({ cupon: 'getCuponDetail' })
  }
}
</script>

<style scoped>
.edit-images {
  position: absolute;
  right: 100px;
  top: 40px;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  border: none;
  box-shadow: 2px 2px 2px 1px black;
}
.edit-image {
  padding-top: 50px;
}
.page-name {
  color: #6a4029;
  font-weight: 700;
}
.discount-card {
  position: relative;
  margin-top: 60px;
  border-radius: 20px;
  width: 60%;
  height: 550px;
  background-color: #ffba33;
  box-shadow: 2px 2px 4px 2px black;
  margin-bottom: 40px;
}
.promo-image {
  width: 130px;
  height: 130px;
  border-radius: 100px;
  margin-left: 30%;
  margin-top: 30px;
}
.promo-titles {
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  margin-top: 20px;
}
.promo-discounts {
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  margin-top: -20px;
}
.promo-inf {
  font-size: 16px;
  text-align: center;
  margin-right: 30px;
  margin-left: 30px;
}
.promo-card {
  border-bottom: 3px dotted black;
}
.title-codes {
  text-align: center;
  font-size: 22px;
  margin-top: 10px;
}
.promo-codes {
  font-size: 28px;
  font-weight: 700;
  text-align: center;
}

.expired-promo {
  font-weight: 500;
  text-align: center;
}
.date {
  width: 55%;
  height: 40px;
  margin-top: 20px;
  padding-left: 5%;
  border-radius: 10px;
  border: 1px solid rgb(179, 179, 179);
}
.date-expired {
  margin-bottom: -10px;
  font-size: 16px;
  font-weight: 500;
  color: #6a4029;
}
.input-promo {
  margin-top: 30px;
}
.codes-promo {
  font-size: 16px;
  font-weight: 500;
  color: #6a4029;
}
.code-promo {
  width: 55%;
  height: 40px;
  border: 1px solid rgb(179, 179, 179);
  padding-left: 5%;
  border-radius: 10px;
}
</style>
