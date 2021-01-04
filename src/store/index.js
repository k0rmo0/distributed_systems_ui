import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    service:"http://192.168.0.19:8010",
    service2:"http://192.168.0.28:3013",
    errorMessage: false,
    diodeStatus: "upali",
    statusFromBoard : "",
    loading: false,
    values: [],

  },
  getters: {
    diodeState: state => {
      return state.diodeState
    }
  },
  mutations: {
    setValues(state, payload) {
      if (payload) return state.values = payload

      return state.values = []
    },
    setLoading(state, payload){
      state.loading = payload
    },
    changeDiodeStatus (state, payload) {
      if (payload == "LOW") {
        return state.diodeStatus = "upali"
      } else return state.diodeStatus = "ugasi"
    }   
  },
  actions: {
    getValues (context) {
      context.commit('setLoading', true)
      return new axios.get(this.state.service + '/data').
      then((response) => {
        context.commit('setValues', response.data)
        context.commit('setLoading', false)
      })
    },
    changeStatus(context, payload) {
      return new axios.post(this.state.service2 + "/?" + payload).
      then((response) => {
        console.log(response.data)
        context.commit('changeDiodeStatus', response.data)
      })
    }
  },
  modules: {
  }
})
