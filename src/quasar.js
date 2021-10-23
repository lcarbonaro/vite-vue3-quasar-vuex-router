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
