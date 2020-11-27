import http from "../../service/index";
import router from "../../router/router";

const state = () => ({
    showNoti: false,
});

const getters = {
    getToken: (state) => state.token,
};

const mutations = {
    login(state, token) {
        state.token = token;
    },
    showNotify(state) {
        state.showNoti = true;
    },
    disableNotify(state) {
        state.showNoti = false;
    },
};
const actions = {
    login({ commit }, payload) {
        http
            .postNormal("/auth/login", payload)
            .then((response) => {
                const token = response.data.access_token;
                const role = response.data.user.role_id;
                localStorage.setItem("access_token", token);
                localStorage.setItem("role_id", role);
                commit("login", token);
                if (role == 3) {
                    router.push("/theme");
                } else if (role == 2) {
                    router.push("/group");
                } else if (role == 1) {
                    router.push("/admin");
                }
            })
            .catch((error) => {
                commit("showNotify");
                // document.getElementById("notify").innerHTML =
                //     "<p class='text-danger'><i class='far fa-exclamation-triangle'></i> Please check your Username/Password</p>";
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};