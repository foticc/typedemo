import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"
import getters from "./getters"
import user from "./modules/user"
import setting from "./modules/setting"

const store = createStore({
  modules: {
    user,
    setting,
  },
  getters,
  plugins: [createPersistedState({ storage: window.sessionStorage })],
})

export default store
