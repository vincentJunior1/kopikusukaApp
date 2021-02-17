import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
export default {
  state: {
    cupon_image: '',
    cupon_discount: 0,
    cupon_started_at: '',
    cupon_ended_at: '',
    cupon_code: '',
    cupon: [],
    cuponDetail: {}
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
    },
    setCuponDetail(state, payload) {
      state.cuponDetail = payload
    }
  },
  actions: {
    postCupon(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_ROOT_URL}/cupon/`, payload)
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
          .get(`${process.env.VUE_APP_ROOT_URL}/cupon`)
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
          .delete(`${process.env.VUE_APP_ROOT_URL}/cupon/` + payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            console.log(err)
            reject(new Error(err))
          })
      })
    },
    getCuponById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_ROOT_URL}/cupon/${payload}`)
          .then(result => {
            context.commit('setCuponDetail', result.data.data[0])
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    patchCupon(context, payload) {
      return new Promise((resolve, reject) => {
        console.log(context.state.cuponDetail.cupon_id)
        axios
          .patch(
            `${process.env.VUE_APP_ROOT_URL}/cupon/${context.state.cuponDetail.cupon_id}`,
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
    },
    getCuponDetail(state) {
      return state.cuponDetail
    }
  }
}
