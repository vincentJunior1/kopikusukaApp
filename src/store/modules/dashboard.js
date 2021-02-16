import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
export default {
  state: {
    dataDashboard: {}
  },
  mutations: {
    setDataDashboard(state, payload) {
      state.dataDashboard = payload
    }
  },
  actions: {
    getDashboard(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_ROOT_URL}/dashboard/`)
          .then(result => {
            context.commit('setDataDashboard', result.data.data)
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    }
  },
  getters: {
    getDataDashboard(state) {
      return state.dataDashboard
    }
  }
}
