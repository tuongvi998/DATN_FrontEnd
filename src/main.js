import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import MaterialKit from "./plugins/material-kit";
import store from "./store/index";
import router from "./router/router";

import Notifications from 'vue-notification';
Vue.use(Notifications);
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.use(MaterialKit);


const token = localStorage.getItem("token");
if (token) {
    Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}
const NavbarStore = {
    showNavbar: false,
};
Vue.config.productionTip = false;
Vue.mixin({
    data() {
        return {
            NavbarStore,
        };
    },
});

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");