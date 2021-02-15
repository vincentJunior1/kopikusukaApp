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
          <b-nav-item
            class="nav-menu"
            v-if="user.user_role === 1"
            to="/dashboard"
            >Dashboard</b-nav-item
          >
          <b-nav-item class="nav-menu" to="/history">History</b-nav-item>
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

          <b-navbar-nav class="icon-chat mt-auto mb-auto mr-2">
            <b-nav-item
              ><img class="chat-icon" src="../../assets/img/chat.png" alt=""
            /></b-nav-item>
          </b-navbar-nav>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <img
                class="avatar-nav"
                :src="
                  user.user_image == ''
                    ? require('../../assets/img/avatar.png')
                    : 'http://localhost:3000/' + user.user_image
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
      search: ''
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
