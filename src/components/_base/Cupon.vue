<template>
  <div class="cupon-container">
    <p class="promo-title" style="position:relative;">Promo Today</p>
    <b-button
      v-if="user.user_role === 1"
      class="add-new btn-danger"
      to="/addnewcupon"
      >Add New Cupon</b-button
    >
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
        <button
          @click="deleteCupons(item.cupon_id)"
          v-if="user.user_role === 1"
          class="delete-cupon btn-danger"
        >
          X
        </button>
        <button v-if="user.user_role === 1" class="update-cupon btn-info">
          U
        </button>
      </div>
    </div>
    <b-button xl="12" class="apply-cupon">Apply Coupon</b-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ user: 'setUser', dataCupon: 'getCupons' })
  },
  created() {
    this.getCupon()
  },
  methods: {
    ...mapActions(['getCupon']),
    ...mapActions(['deleteCupon']),
    deleteCupons(id) {
      this.deleteCupon(id)
        .then(result => {
          console.log(result)
          this.getCupon()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style scoped>
.add-new {
  position: absolute;
  bottom: 190px;
  width: 92%;
  height: 50px;
  left: 15px;
  padding-top: 10px;
  border-radius: 10px;
  outline: none !important;
}
.delete-cupon {
  position: absolute;
  right: 10px;
  border-radius: 30px;
  border: none;
  width: 30px;
  height: 30px;
  color: white;
}
.update-cupon {
  position: relative;
  right: 10px;
  border-radius: 30px;
  border: none;
  width: 30px;
  height: 30px;
}
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
