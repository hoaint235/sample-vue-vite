import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { Quasar } from "@plugins";
import "./styles/main.scss";

createApp(App).use(router).use(Quasar, { plugins: {} }).mount("#app");
