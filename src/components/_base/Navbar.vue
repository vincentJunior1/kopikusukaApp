<template>
  <b-navbar class="nav-bar" toggleable="lg" type="light" variant="white">
    <b-container class="navigation">
      <b-navbar-brand class="nav-branding" href="#"
        ><img class="img-brand" src="../../assets/img/coffee 1.png" alt="" />
        KopiKuSuka</b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="nav-menu" to="/">Home</b-nav-item>
          <b-nav-item class="nav-menu" to="/product">Product</b-nav-item>
          <b-nav-item class="nav-menu" v-if="user.user_role === 0" to="/payment"
            >Your Card</b-nav-item
          >
          <b-nav-item class="nav-menu" v-if="user.user_role === 1" to="/order"
            >All Order</b-nav-item
          >
          <b-nav-item
            class="nav-menu"
            v-if="user.user_role === 1"
            to="/dashboard"
            >Dashboard</b-nav-item
          >
          <b-nav-item class="nav-menu" v-if="user.user_role === 0" to="/history"
            >History</b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent="searchProduct" class="search-container">
            <b-form-input
              size="sm"
              :disabled="path != 'Product'"
              v-model="search"
              class="mr-sm-2 search-product"
              placeholder="Search"
            ></b-form-input>
          </b-nav-form>
          <b-button class="login" v-if="user.user_id == null" to="/login"
            >Login
          </b-button>
          <b-nav-item-dropdown v-else right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <img
                class="avatar-nav"
                :src="
                  user.user_image == null
                    ? require('../../assets/img/avatar.png')
                    : urlPage + '/' + user.user_image
                "
                alt=""
              />
            </template>
            <b-dropdown-item to="/profile">Profile</b-dropdown-item>
            <b-dropdown-item @click="handleLogout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import dotenv from 'dotenv'
dotenv.config()
export default {
  name: 'Navbar',
  data() {
    return {
      path: '',
      search: '',
      urlPage: process.env.VUE_APP_ROOT_URL
    }
  },
  methods: {
    ...mapActions(['logout']),
    ...mapActions(['searchProducts']),
    searchProduct() {
      this.searchProducts(this.search)
    },
    handleLogout() {
      console.log('anda berhasil logout')
      this.logout()
    }
  },
  created() {
    this.path = this.$router.currentRoute.name
  },
  computed: {
    ...mapGetters({ user: 'setUser' })
  }
}
</script>
<style scoped>
.login {
  border: none;
  border-radius: 30px;
  width: 100px;
  background-color: #ffba33;
}
.login:hover {
  background-color: #fca904;
}
.login:focus {
  background-color: #fca904 !important;
  box-shadow: none !important;
  outline: none !important;
}
</style>
