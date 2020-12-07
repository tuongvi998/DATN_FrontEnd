import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import MaterialKit from "./plugins/material-kit";
import store from "./store/index";
import router from "./router/router";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";
import Chartist from "chartist";
import Notifications from 'vue-notification';
import VueConfirmDialog from 'vue-confirm-dialog';
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'


Vue.use(VueConfirmDialog);
Vue.component('vue-confirm-dialog', VueConfirmDialog.default);
Vue.use(Notifications);
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.use(MaterialKit);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(VueSidebarMenu);
// Vue.component(Modal);
Vue.prototype.$Chartist = Chartist;


// //vue boostrap : 
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue)
    //     // Optionally install the BootstrapVue icon components plugin
    // Vue.use(IconsPlugin)

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
    data: {
        Chartist: Chartist
    }
}).$mount("#app");