import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
export default {
  state: {
    product: [],
    totalRows: null,
    limit: 12,
    page: 1,
    product_image: '',
    dataCart: []
  },
  mutations: {
    setProduct(state, payload) {
      state.product = payload.data
      state.totalRows = payload.pagination.totalData
    },
    changePage(state, payload) {
      state.page = payload
    },
    imageSave(state, payload) {
      state.product_image = payload
    },
    setDataCart(state, payload) {
      state.dataCart = payload
    }
  },
  actions: {
    getProduct(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_ROOT_URL}/product/?page=${context.state.page}&limit=${context.state.limit}`
          )
          .then(res => {
            context.commit('setProduct', res.data)
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteProduct(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_ROOT_URL}/product/` + payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    getSorting(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_ROOT_URL}/sorting/${payload}?page=${context.state.page}&limit=${context.state.limit}`
          )
          .then(result => {
            context.commit('setProduct', result.data)
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    searchProducts(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_ROOT_URL}/product/?search=${payload}&?page=${context.state.page}&limit=${context.state.limit}`
          )
          .then(result => {
            context.commit('setProduct', result.data)
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    }
  },
  getters: {
    getPageProduct(state) {
      return state.page
    },
    getDataProducts(state) {
      return state.product
    },
    getLimitProduct(state) {
      return state.limit
    },
    getTotalRowsProduct(state) {
      return state.totalRows
    },
    getImageProduct(state) {
      return state.product_image
    },
    getDataCart(state) {
      return state.dataCart
    }
  }
}
