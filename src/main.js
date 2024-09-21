import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
//需要先安装ElementPlus的依赖
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import Avue from "@smallwei/avue";
import "@smallwei/avue/lib/index.css";
import Antd from "ant-design-vue";
import { createApp } from "vue";

import axios from "axios";

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(Avue, { axios })
  .use(Antd)
  .mount("#app");
