import VueRouter from "vue-router";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.component("el-table", ElementUI.Table);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
