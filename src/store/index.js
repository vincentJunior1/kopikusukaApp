import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth },
  state: {
    name: 'vincent junior'
  },
  mutations: {},
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
    }
  },
  getters: {}
})
