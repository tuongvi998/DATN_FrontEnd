import http from "../../service/index";
import router from "../../router/router";

const state = () => ({
    showNoti: false,
    token: localStorage.getItem("access_token") || null,
    user_profile: [],
});

const getters = {
    getToken: (state) => state.token,
    getUserProfile(state) {
        return state.user_profile;
    }
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
    showUserProfile(state, user_profile) {
        state.user_profile = user_profile;
    },
    logout(state) {
        state.user_profile = null;
    },
};
const actions = {
    login({ commit }, payload) {
        http.postNormal("/auth/login", payload)
            .then((response) => {
                const token = response.data.access_token;
                const role = response.data.user.role_id;
                localStorage.setItem("access_token", token);
                localStorage.setItem("user_name", response.data.user.name);
                localStorage.setItem("role_id", role);
                commit("login", token);
                if (role == 3) {
                    router.push("/");
                } else if (role == 2) {
                    router.push("/group");
                } else if (role == 1) {
                    router.push("/admin");
                }
            })
            .catch((error) => {
                commit("showNotify");
                document.getElementById("notify").innerHTML =
                    "<small class='text-danger ml-3'> </small>";
            });
    },
    showUserProfile({ commit }) {
        http.getAuth("/auth/user")
            .then((response) => {
                // console.log("showUserProfile", response.data);
                commit("showUserProfile", response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    logout({ commit }) {
        http
            .postAuth("/auth/logout")
            .then((response) => {
                localStorage.clear();
                commit("logout");
                // console.log(response.data.message);
                router.push("/");
                location.reload();
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