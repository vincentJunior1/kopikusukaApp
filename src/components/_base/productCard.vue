<template>
  <div class="product-card">
    <b-button
      class="btn-add-new"
      variant="danger"
      to="/addNewProduct"
      v-if="user.user_role === 1"
      >Add Product</b-button
    >
    <b-row class="text-center menu-short">
      <b-col sm="12">
        <span class="sort-product" sm="1">
          <button class="btn-sorting" @click="getProduct">
            Favorite & Promo
          </button>
        </span>
        <span class="sort-product" sm="1">
          <button class="btn-sorting" @click="sorting('2')">
            Coffee
          </button>
        </span>
        <span class="sort-product" sm="1">
          <button class="btn-sorting" @click="sorting('2')">
            Non Coffee
          </button>
        </span>
        <span class="sort-product" sm="1">
          <button class="btn-sorting" @click="sorting('1')">
            Foods
          </button>
        </span>
        <span class="sort-product" sm="1">
          <button class="btn-sorting">
            Add On
          </button>
        </span>
      </b-col>
    </b-row>
    <b-row class="all-product">
      <div class="card" v-for="(item, index) in product" :key="index">
        <img
          class="img-product"
          :src="
            item.product_image != ''
              ? 'http://localhost:3000/' + item.product_image
              : 'https://picsum.photos/600/300/?image=25'
          "
          alt=""
          @click="productDetail(item.product_id)"
        />
        <p class="product-title">{{ item.product_name }}</p>
        <p class="product-price">Rp.{{ item.product_price }}</p>
        <b-button
          v-if="user.user_role === 1"
          class="btn-delete"
          variant="danger"
          >X</b-button
        >
        <b-button
          class="btn-update"
          v-if="user.user_role === 1"
          @click="productEdit(item.product_id)"
          variant="info"
          >U</b-button
        >
      </div>
    </b-row>
    <b-pagination
      class="pagination"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="limit"
      @change="handlePageChange"
    ></b-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  props: ['dataProduct'],
  data() {
    return {
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters({
      product: 'getDataProducts',
      page: 'getPageProduct',
      limit: 'getLimitProduct',
      rows: 'getTotalRowsProduct'
    }),
    ...mapGetters({ user: 'setUser' })
  },
  created() {
    this.getProduct()
    this.getSortingDrink()
  },
  methods: {
    ...mapActions(['getProduct']),
    ...mapActions(['getSorting']),
    ...mapMutations(['changePage']),
    productDetail(product_id) {
      this.$router.push({ name: 'productDetail', params: { id: product_id } })
    },
    productEdit(product_id) {
      this.$router.push({ name: 'productEdit', params: { id: product_id } })
    },
    handlePageChange(numberPage) {
      this.changePage(numberPage)
      this.getProduct()
    },
    sorting(category) {
      this.getSorting(category)
    }
  }
}
</script>

<style scoped>
.btn-sorting {
  background-color: transparent;
  border: none;
}
.current {
  border-bottom: 2px solid black;
  font-weight: 700;
}
.btn-sorting:focus {
  outline: none !important;
}
.pagination {
  position: absolute;
  bottom: 0px;
  left: 40px;
}
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
