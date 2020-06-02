import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import EleForm from "vue-ele-form";
import OpenFormDrawer from "./components/openFormDrawer";

import store from "./store";
import Transation from "./core/transation";

Vue.use(ElementUI);
Vue.use(EleForm);

Vue.prototype.$transation = new Transation();
Vue.prototype.$openForm = OpenFormDrawer;
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
