import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/main.scss";
import { initPrime } from '@plugins';

const app = createApp(App);

initPrime(app);
app.use(router).mount("#app");
