// 全局的一些状态
const state = {
  isCollapse: false,
  tagViews: [],
}

const mutations = {
  reverse(state: any) {
    state.isCollapse = !state.isCollapse
  },
  pushTag(state: any, tab: any) {
    state.tagViews.push(tab)
  },
  removeTab(state: any, tag: any) {
    let index = state.tagViews.indexOf(tag)
    if (index > -1) {
      state.tagViews.splice(index, 1)
    }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
