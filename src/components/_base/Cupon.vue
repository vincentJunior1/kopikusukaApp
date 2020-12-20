<template>
  <div class="cupon-container">
    <p class="promo-title">Promo Today</p>
    <p class="promo-desc">
      Coupons will be updated every weeks. Check them out!
    </p>
    <div class="cupon" v-for="(item, index) in dataCupon" :key="index">
      <img class="cupon-image" src="../../assets/img/Promo2.png" alt="" />
      <span class="about-cupon"
        ><p class="cupon-title">{{ item.cupon_name }}</p>
        <p class="cupon-desc">{{ item.cupon_description }}</p>
      </span>
    </div>
    <b-button xl="12" class="apply-cupon">Apply Coupon</b-button>
  </div>
</template>

<script>
export default {
  props: ['dataCupon']
}
</script>
