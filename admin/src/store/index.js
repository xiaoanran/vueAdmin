import Vue from 'vue'
import Vuex from 'vuex'
import index from './module/index'
import gobal from './gobal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    gobal,
    index
  }
})
