import axios from "axios"
import store from "../store/index"

const instance = axios.create({
  baseURL: "/dev-api",
  timeout: 5000,
})

instance.interceptors.request.use(
  function(config) {
    config.headers = {
      token: store.getters.token,
    }
    console.log(store.getters.token)
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

export default instance
