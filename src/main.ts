import { createApp } from "vue"
import store from "./store/index"
import router from "./router/Index"
import installElementPlus from "./plugins/element"
import App from "./App.vue"

const app = createApp(App).use(router)
// app.use(router)
// app.use(ElementPlus)
installElementPlus(app)
app
  .use(router)
  .use(store)
  .mount("#app")
