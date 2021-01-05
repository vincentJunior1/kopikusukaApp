import axios from 'axios'
export default {
  state: {
    product: [],
    totalRows: null,
    limit: 4,
    page: 1
  },
  mutations: {
    setProduct(state, payload) {
      state.product = payload.data
      state.totalRows = payload.pagination.totalData
      console.log(state.product)
    }
  },
  actions: {
    getProduct(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:3000/product/?page=${context.state.page}&limit=${context.state.limit}`
          )
          .then(res => {
            // this.totalRows = res.data.pagination.totalData
            // this.product = res.data.data
            console.log(res)
            context.commit('setProduct', res.data)
            resolve(res)
          })
          .catch(error => {
            reject(error)
            console.log(error.response)
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
    }
  }
}
