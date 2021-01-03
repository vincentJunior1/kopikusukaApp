import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth },
  state: {
    dataDetail: {},
    dataDelivery: {}
  },
  mutations: {
    setDetailData(state, payload) {
      state.dataDetail = payload
    },
    setDeliveryData(state, payload) {
      state.dataDelivery = payload
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
    }
  },
  getters: {}
})
