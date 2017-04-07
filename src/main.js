// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Counter from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import * as getters from './getters'

Vue.use(iView)
Vue.use(Vuex)

Vue.config.productionTip = false

// 创建一个 store
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    unincrement (state) {
      state.count--
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  getters,
  store,
  template: `<div id="app"><counter></counter></div>`,
  components: { Counter }
})

// 通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更
// store.commit('increment')

console.log(store.state.count) // -> 1
