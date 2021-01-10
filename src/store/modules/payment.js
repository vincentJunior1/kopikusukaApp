import axios from 'axios'
export default {
  state: {},
  mutations: {},
  actions: {
    postPayment(_context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/payment/', payload)
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
