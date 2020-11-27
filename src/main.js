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
import VueConfirmDialog from 'vue-confirm-dialog'
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';

Vue.use(Vuesax)
Vue.use(VueConfirmDialog);
Vue.component('vue-confirm-dialog', VueConfirmDialog.default);
Vue.use(Notifications);
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.use(MaterialKit);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.prototype.$Chartist = Chartist;


//vue boostrap : 
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//carousel 
// import VueSlickCarousel from '@bit/gsshop.vue-slick-carousel.vue-slick-carousel';
// import '@bit/gsshop.vue-slick-carousel.vue-slick-carousel-theme';
import VueSlickCarousel from 'vue-slick-carousel'
// Vue.component('VueSlickCarousel', VueSlickCarousel);
Vue.use(VueSlickCarousel);
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

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