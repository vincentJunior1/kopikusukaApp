import axios from 'axios'
import router from '../../router'
import dotenv from 'dotenv'
dotenv.config()
export default {
  state: {
    user: {},
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      state.token = payload.token
    },
    delUser(state) {
      state.user = {}
      state.token = null
    }
  },
  actions: {
    register(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/user/register/', payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err.response))
          })
      })
    },
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/user/login', payload)
          .then(result => {
            context.commit('setUser', result.data.data)
            localStorage.setItem('token', result.data.data.token)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    editProfiles(context, payload) {
      return new Promise((resolve, reject) => {
        console.log(payload)
        axios
          .patch(`${process.env.VUE_APP_ROOT_URL}/user/editProfile`, payload)
          .then(result => {
            let newData = { ...context.state.user, ...result.data.data }
            console.log(newData)
            context.commit('setUser', newData)
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    confirmationEmail(_context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_ROOT_URL}/user/confirmationEmail/${payload}`
          )
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(new Error(err))
          })
      })
    },
    logout(context) {
      localStorage.removeItem('token')
      context.commit('delUser')
      router.push('/login')
    },
    interceptorRequest(context) {
      console.log('interceptor request works')
      axios.interceptors.request.use(
        function(config) {
          config.headers.Authorization = `Bearer ${context.state.token}`
          // Do something before request is sent
          return config
        },
        function(error) {
          // Do something with request error
          return Promise.reject(error)
        }
      )
    },
    interceptorResponse(context) {
      console.log('interceptor response works')
      axios.interceptors.response.use(
        function(response) {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          return response
        },
        function(error) {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error

          if (
            error.response.data.status == 403 &&
            (error.response.data.message === 'invalid token' ||
              error.response.data.message === 'invalid signature' ||
              error.response.data.message === 'jwt expired' ||
              error.reponse.data.message === 'jwt malformed')
          ) {
            context.dispatch('logout')
            alert(error.response.data.message)
          }
          return Promise.reject(error)
        }
      )
    }
  },
  getters: {
    isLogin(state) {
      return state.token !== null
    },
    setUser(state) {
      return state.user
    }
  }
}
