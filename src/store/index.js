import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import axios from 'axios'
import Product from './modules/product'
import Cupon from './modules/cupon'
import Payment from './modules/payment'
import Dashboard from './modules/dashboard'
import dotenv from 'dotenv'
import createPersistedState from 'vuex-persistedstate'

dotenv.config()

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Product, Cupon, Payment, Dashboard },
  state: {
    dataDetail: {},
    dataDelivery: {},
    dataDeliveryProduct: [],
    dataSizeProduct: [],
    allSize: []
  },
  mutations: {
    setDetailData(state, payload) {
      state.dataDetail = payload
    },
    setDeliveryData(state, payload) {
      state.dataDelivery = payload
    },
    setValidationDelivery(state, payload) {
      let data
      data = payload.delivery_method_id
      state.dataDeliveryProduct = data.split(',')
    },
    setValidationSize(state, payload) {
      let data
      data = payload.size_id
      state.dataSizeProduct = data.split(',')
    },
    setAllSize(state, payload) {
      state.allSize = payload
    }
  },
  actions: {
    postProduct(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://${process.env.VUE_APP_ROOT_URL}/product/`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    getDataDetail(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_ROOT_URL}/product/${payload}`)
          .then(result => {
            context.commit('setDetailData', result.data.data)
            context.commit('setValidationDelivery', result.data.data[0])
            context.commit('setValidationSize', result.data.data[0])
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    getDataDelivery(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_ROOT_URL}/size/delivery/`)
          .then(result => {
            context.commit('setDeliveryData', result.data.data)
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    getDataSize(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_ROOT_URL}/size/size/`)
          .then(result => {
            context.commit('setAllSize', result.data.data)
            resolve(result.data.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    saveEditProduct(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://${process.env.VUE_APP_ROOT_URL}/product/${payload.product_id}`,
            payload
          )
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    }
  },
  getters: {
    setDetailProduct(state) {
      return state.dataDetail
    },
    setSizeProduct(state) {
      return state.dataSizeProduct
    },
    setDeliveryProduct(state) {
      return state.dataDeliveryProduct
    },
    setDataDelivery(state) {
      return state.dataDelivery
    },
    setAllSize(state) {
      return state.allSize
    }
  },
  plugins: [
    createPersistedState({
      paths: ['Auth.user', 'Product.dataCart']
    })
  ]
})
