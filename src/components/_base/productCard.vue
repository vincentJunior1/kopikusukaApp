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
      <div class="card" v-for="(item, index) in product" :key="index">
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
        <b-button
          class="btn-update"
          @click="productEdit(item.product_id)"
          variant="info"
          v-if="user.user_role === 1"
          >U</b-button
        >
      </div>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="limit"
        @change="handlePageChange"
      ></b-pagination>
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
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  props: ['dataProduct'],
  data() {
    return {
      sorting: '',
      user: '',
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters({
      product: 'getDataProducts',
      page: 'getPageProduct',
      limit: 'getLimitProduct',
      rows: 'getTotalRowsProduct'
    })
    // rows() {
    //   return this.totalRows
    // }
  },
  created() {
    this.getProduct()
    console.log(this.product)
    this.getSortingDrink()
    this.user = JSON.parse(localStorage.getItem('user'))
  },
  methods: {
    ...mapActions(['getProduct']),
    ...mapState(['token']),
    productDetail(product_id) {
      this.$router.push({ name: 'productDetail', params: { id: product_id } })
    },
    getSortingDrink() {
      this.sorting = '1'
      this.$emit('sortingId', this.sorting)
    },
    productEdit(product_id) {
      this.$router.push({ name: 'productEdit', params: { id: product_id } })
    },
    handlePageChange(numberPage) {
      this.page = numberPage
      this.getProduct()
    }
  }
}
</script>
