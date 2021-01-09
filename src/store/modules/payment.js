import axios from 'axios'
export default {
  state: {},
  mutations: {},
  actions: {
    postPayment(_context, payload) {
      // resolve, reject
      return new Promise(() => {
        axios
          .post('http://localhost:3000/payment/', payload)
          .then(result => {
            console.log(result)
          })
          .catch(err => {
            console.log(err)
          })
      })
    }
  },
  getters: {}
}
