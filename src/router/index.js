import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import ProductDetail from '../views/ProductDetail.vue'
import AddNewProduct from '../views/AddNewProduct.vue'
import History from '../views/History.vue'
import Login from '../views/auth/login.vue'
import EditProduct from '../views/ProductEdit.vue'
import Register from '../views/auth/register.vue'
import Payment from '../views/Payment.vue'
import Store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/productdetail/:id',
    name: 'productDetail',
    component: ProductDetail
  },
  {
    path: '/addnewproduct',
    name: 'addNewProduct',
    component: AddNewProduct,
    meta: { requiresAuth: true }
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/productedit/:id',
    name: 'productEdit',
    component: EditProduct,
    meta: { requiresAuth: true }
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!Store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (Store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
