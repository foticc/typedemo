import axios from "axios"
import { ElMessage } from "element-plus"
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

instance.interceptors.response.use(
  (res) => {
    // 对响应数据做点什么
    if (res.status != 200) {
      ElMessage(res.status + "!!@#!#!@")
    }
    return res
  },
  (err) => {
    // 对响应错误做点什么
    ElMessage({ message: err.message })
    return Promise.reject(err)
  }
)

export default instance
