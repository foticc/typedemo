// 全局的一些状态
const state = {
  isCollapse: false,
}

const mutations = {
  reverse(state: any) {
    state.isCollapse = !state.isCollapse
  },
}

export default {
  namespace: true,
  state,
  mutations,
}
