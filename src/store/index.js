import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Quiz from "@/store/modules/quiz/quiz.module";

const modules = () => {
  return {
    Quiz,
  }
}

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: modules(),
  plugins: [
  ],
  storage: window.localStorage
})
