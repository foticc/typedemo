import { createStore } from "vuex"
import getters from "./getters"
import user from "./modules/user"
import setting from "./modules/setting"

const store = createStore({
  modules: {
    user,
    setting,
  },
  getters,
})

export default store
