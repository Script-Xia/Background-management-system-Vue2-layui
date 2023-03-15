import Vue from 'vue'
import VueX from 'vuex'

Vue.use(Vuex)
git config --global --list
export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})