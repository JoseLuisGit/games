import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import "./style.css";
import "./assets/css/bootstrap.min.css";

createApp(App).use(router).mount("#app");
