import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
export default {
  state: {
    order: {},
    detailOrder: {}
  },
  mutations: {
    setOrder(state, payload) {
      state.order = payload
    },
    setDetailOrder(state, payload) {
      state.detailOrder = payload
    }
  },
  actions: {
    postPayment(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_ROOT_URL}/payment/`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    getAllOrders(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_ROOT_URL}/payment/order/`)
          .then(result => {
            context.commit('setOrder', result.data.data)
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getDetailOrder(context, payload) {
      return new Promise(() => {
        axios
          .get(`${process.env.VUE_APP_ROOT_URL}/payment/detail/${payload}`)
          .then(result => {
            context.commit('setDetailOrder', result.data.data)
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    markAsDone(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(
            `${process.env.VUE_APP_ROOT_URL}/payment/orderdone/${payload}`
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
    getOrders(state) {
      return state.order
    },
    getDetailOrder(state) {
      return state.detailOrder
    }
  }
}
