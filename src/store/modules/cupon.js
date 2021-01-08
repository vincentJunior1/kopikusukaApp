import axios from 'axios'
export default {
  state: {
    cupon_image: '',
    cupon_discount: 0,
    cupon_started_at: '',
    cupon_ended_at: '',
    cupon_code: '',
    cupon: []
  },
  mutations: {
    setDataCupon(state, payload) {
      state.cupon = payload
    },
    setCuponImage(state, payload) {
      state.cupon_image = payload
    },
    setCuponDiscount(state, payload) {
      state.cupon_discount = payload
    },
    setCuponStart(state, payload) {
      state.cupon_started_at = payload
    },
    setCuponEnd(state, payload) {
      state.cupon_ended_at = payload
    },
    setCuponCode(state, payload) {
      state.cupon_code = payload
    }
  },
  actions: {
    postCupon(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/cupon/', payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    getCupon(context) {
      return new Promise((resolve, reject) => {
        axios
          .get('http://localhost:3000/cupon')
          .then(res => {
            context.commit('setDataCupon', res.data.data)
            resolve(res)
          })
          .catch(error => {
            reject(new Error(error))
          })
      })
    },
    deleteCupon(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete('http://localhost:3000/cupon/' + payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            console.log(err)
            reject(new Error(err))
          })
      })
    }
  },
  getters: {
    getCupons(state) {
      return state.cupon
    },
    getCuponImage(state) {
      return state.cupon_image
    },
    getCuponDiscount(state) {
      return state.cupon_discount
    },
    getCuponStart(state) {
      return state.cupon_started_at
    },
    getCuponEnd(state) {
      return state.cupon_ended_at
    },
    getCuponCode(state) {
      return state.cupon_code
    }
  }
}
