import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
export default {
  state: {},
  mutations: {},
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
    }
  },
  getters: {}
}
