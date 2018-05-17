const state = {
  // 用户信息
  user: {
    userId: null,
    userName: '测试',
    msgs: 0
  }
}

const mutations = {
  // 设置user信息
  setUser (state, user) {
    state.user = user
  },
  // 清空用户信息
  clearUser () {
    state.user = null
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
