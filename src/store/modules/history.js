import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()
export default {
  state: {
    historyDetail: {}
  },
  mutations: {
    setHistoryDetail(state, payload) {
      state.historyDetail = payload
    }
  },
  actions: {
    getAllHistory(context) {
      //   resolve, reject
      return new Promise(() => {
        axios
          .get(`${process.env.VUE_APP_ROOT_URL}/payment/allhistory`)
          .then(result => {
            context.commit('setHistoryDetail', result.data.data)
          })
          .catch(err => {
            console.log(err)
          })
      })
    },
    deleteHistory(_context, payload) {
      return new Promise(() => {
        axios
          .delete(
            `${process.env.VUE_APP_ROOT_URL}/payment/deletehistory/${payload}`
          )
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
    getDataDetailHistory(state) {
      return state.historyDetail
    }
  }
}
