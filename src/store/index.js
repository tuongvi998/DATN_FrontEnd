import Vue from 'vue';
import Vuex from 'vuex';
import auth from './module/Auth';
import user from './module/User';

Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
    modules: {
        auth,
        user
    }
});
export default store;