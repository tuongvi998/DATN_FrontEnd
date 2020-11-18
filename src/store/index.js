import Vue from 'vue';
import Vuex from 'vuex';
import auth from './module/Auth';

Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
    modules: {
        auth
    }
});
export default store;