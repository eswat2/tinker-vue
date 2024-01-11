import { createApp } from "vue"
import Vuex from "vuex"

import App from "./App.vue"
import { storeDefs } from "./utils"

const store = new Vuex.Store({
  modules: {
    app: storeDefs,
  },
})

createApp(App).use(store).mount("#app")
