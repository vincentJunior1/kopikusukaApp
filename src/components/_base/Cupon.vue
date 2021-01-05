<template>
  <div class="cupon-container">
    <p class="promo-title">Promo Today</p>
    <p class="promo-desc">
      Coupons will be updated every weeks. Check them out!
    </p>
    <div class="scroll">
      <div class="cupon" v-for="(item, index) in dataCupon" :key="index">
        <img class="cupon-image" src="../../assets/img/Promo2.png" alt="" />
        <span class="about-cupon"
          ><p class="cupon-title">{{ item.cupon_name }}</p>
          <p class="cupon-desc">{{ item.cupon_description }}</p>
        </span>
      </div>
    </div>
    <b-button xl="12" class="apply-cupon">Apply Coupon</b-button>
  </div>
</template>

<script>
export default {
  props: ['dataCupon']
}
</script>
<style scoped>
.scroll {
  position: relative;
  overflow-y: scroll;
  height: 500px;
}
.scroll::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.scroll::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.scroll::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
.scroll::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
