import http from "../../service/index";
import router from "../../router/router";

const state = () => ({
    token: localStorage.getItem("token") || null,
});

const getters = {
    getToken: (state) => state.token,
};

const mutations = {
    login(state, token) {
        state.token = token;
    },
};
const actions = {
    login({ commit }, payload) {
        http.postNormal("/auth/login", payload)
            .then((response) => {
                const token = response.data.access_token;
                localStorage.setItem("access_token", token);
                commit("login", token);
                router.push("/theme");
            })
            .catch((error) => {
                console.log(error);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};