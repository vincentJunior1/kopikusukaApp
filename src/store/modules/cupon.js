import axios from 'axios'
export default {
  state: {
    cupon_image: '',
    cupon_discount: 0,
    cupon_started_at: '',
    cupon_ended_at: '',
    cupon_code: ''
  },
  mutations: {
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
      return new Promise(() => {
        axios
          .post('http://localhost:3000/cupon/', payload)
          .then(result => {
            console.log(result)
          })
          .catch(err => {
            console.log(err)
          })
      })
    }
  },
  getters: {
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
