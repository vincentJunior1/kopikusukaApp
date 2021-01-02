<template>
  <div class="product-card">
    <b-button
      class="btn-add-new"
      variant="danger"
      v-if="user.user_role == 1"
      to="/addNewProduct"
      >Add Product</b-button
    >
    <b-row class="text-center menu-short">
      <b-col sm="12">
        <span class="sort-product" sm="1">
          Favorite & Promo
        </span>
        <span class="sort-product" sm="1">
          Coffee
        </span>
        <span class="sort-product" sm="1">
          Non Coffee
        </span>
        <span class="sort-product" sm="1">
          Foods
        </span>
        <span class="sort-product" sm="1">
          Add On
        </span>
      </b-col>
    </b-row>
    <b-row class="all-product">
      <div class="card" v-for="(item, index) in dataProduct" :key="index">
        <img
          class="img-product"
          src="https://picsum.photos/600/300/?image=25"
          alt=""
          @click="productDetail(item.product_id)"
        />
        <p class="product-title">{{ item.product_name }}</p>
        <p class="product-price">Rp.{{ item.product_price }}</p>
        <b-button
          class="btn-delete"
          variant="danger"
          v-if="user.user_role === 1"
          >X</b-button
        >
        <b-button class="btn-update" variant="info" v-if="user.user_role === 1"
          >U</b-button
        >
      </div>
    </b-row>
  </div>
</template>

<style scoped>
.btn-add-new {
  position: absolute;
  right: 0px;
  top: -20px;
  font-weight: 700;
}
.btn-delete {
  position: absolute;
  bottom: 0px;
  left: -15px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
}
.btn-update {
  position: absolute;
  top: 0px;
  left: -15px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
}
.sort-product {
  cursor: pointer !important;
}
</style>

<script>
import { mapState } from 'vuex'
export default {
  props: ['dataProduct'],
  data() {
    return {
      sorting: '',
      user: ''
    }
  },
  created() {
    this.getSortingDrink()
    this.user = JSON.parse(localStorage.getItem('user'))
    console.log(this.user)
  },
  methods: {
    ...mapState(['token']),
    productDetail(product_id) {
      // console.log(product_id)
      this.$router.push({ name: 'productDetail', params: { id: product_id } })
    },
    getSortingDrink() {
      this.sorting = '1'
      this.$emit('sortingId', this.sorting)
    }
  }
}
</script>
