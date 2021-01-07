import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import axios from 'axios'
import Product from './modules/product'
import Cupon from './modules/cupon'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Product, Cupon },
  state: {
    dataDetail: {},
    dataDelivery: {},
    dataDeliveryProduct: [],
    dataSizeProduct: []
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
    }
  },
  actions: {
    postProduct(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/product/', payload)
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
          .get(`http://localhost:3000/product/${payload}`)
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
          .get('http://localhost:3000/size/delivery/')
          .then(result => {
            context.commit('setDeliveryData', result.data.data)
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    getDataSize() {
      return new Promise((resolve, reject) => {
        axios
          .get('http://localhost:3000/size/size/')
          .then(result => {
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
          .patch(`http://localhost:3000/product/${payload.product_id}`, payload)
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
    }
  },
  plugins: [
    createPersistedState({
      paths: ['Auth.user']
    })
  ]
})
