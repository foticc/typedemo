import { MutationTree } from "vuex"

// 全局的一些状态
export interface Setting {
  isCollapse: boolean
  tabViews: Array<any>
}

const state: Setting = {
  isCollapse: false,
  tabViews: [],
}

const mutations: MutationTree<Setting> = {
  reverse(state: Setting) {
    state.isCollapse = !state.isCollapse
  },
  pushTag(state: Setting, tab: any) {
    state.tabViews.push(tab)
  },
  removeTab(state: Setting, tag: any) {
    let index = state.tabViews.indexOf(tag)
    if (index > -1) {
      state.tabViews.splice(index, 1)
    }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
