import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import "nprogress/nprogress.css";
import Vuelidate from "vuelidate";
import DateFilter from "./filters/date.js";

Vue.filter("date", DateFilter);

Vue.use(Vuelidate);

Vue.component("BaseIcon", BaseIcon);
Vue.component("BaseSelect", BaseSelect);
Vue.component("BaseInput", BaseInput);
Vue.component("BaseButton", BaseButton);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
