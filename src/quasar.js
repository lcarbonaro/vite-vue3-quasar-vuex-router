import { Quasar, Notify, Loading } from "quasar";
import "quasar/dist/quasar.prod.css";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";

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
