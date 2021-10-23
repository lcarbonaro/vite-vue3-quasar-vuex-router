# Vite + Vue 3 + Quasar including Vuex and Vue-Router

## Steps

1. npm init vite@latest
2. cd vite-project
3. npm install
4. npm install vuex@next --save
5. npm install vue-router@4
6. npm install quasar --save
7. npm install @quasar/app --save
8. added src/quasar.js 
``` javascript
import { Quasar, Notify, Loading } from "quasar";
import "quasar/dist/quasar.prod.css";

export function initQuasar(app) {
  app.use(Quasar, {
    config: {
      dark: true,
    },
    plugins: {
      Notify,
      Loading,
    },
  });
}
```
9. modified main.js
``` javascript
import { createApp } from "vue";
import App from "./App.vue";
import { initQuasar } from "./quasar";

//was:  createApp(App).mount('#app')

const app = createApp(App);
initQuasar(app);
app.mount("#app");
```
10. npm install @quasar/extras (for fonts and icons)
    - add import(s) in src/quasar.js

NEXT TO-DO:
- store example set-up
- routes example set-up