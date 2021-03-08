// 全局的一些状态
const state = {
  isCollapse: false,
  tagViews: [],
}

const mutations = {
  reverse(state: any) {
    state.isCollapse = !state.isCollapse
  },
  pushTag(state: any, tag: any) {
    state.tagViews.push(tag)
  },
  removeTag(state: any, tag: any) {
    console.log(tag)
  },
}

export default {
  namespace: true,
  state,
  mutations,
}
