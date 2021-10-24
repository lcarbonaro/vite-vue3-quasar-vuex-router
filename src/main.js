import { createApp } from "vue";
import App from "./App.vue";
import { initQuasar } from "./quasar";

import store from './store';
import router from './router';

//was:  createApp(App).mount('#app')

const app = createApp(App);
initQuasar(app);

app.use(store);
app.use(router);

app.mount("#app");
