import http from "../../service/index";
import router from "../../router/router";

const state = () => ({
    list_volunteer: [],
    list_groups: [],
    upcoming_activity: [],
    list_field: [],
    list_activity_joined: [],
    list_activity_register: [],
});

const getters = {
    getListVolunteer(state) {
        return state.list_volunteer;
    },
    getListGroup: (state) => {
        return state.list_groups;
    },
    getUpcomingActivity: (state) => {
        return state.upcoming_activity;
    },
    getListField: (state) => {
        return state.list_field;
    },
    getActivityJoined: (state) => {
        return state.list_activity_joined;
    },
    getActivityRegister: (state) => {
        return state.list_activity_register;
    },
};

const mutations = {
    //volunteers
    showListVolunteer(state, list_volunteer) {
        state.list_volunteer = list_volunteer;
    },
    deleteVolunteer(state, id) {
        var list = state.list_volunteer.filter((volunteer) => volunteer.id != id);
        state.list_volunteer = list;
    },
    //groups
    showListGroup(state, list_groups) {
        state.list_groups = list_groups;
    },
    deleteGroup(state, id) {
        var list = state.list_groups.filter((group) => group.id != id);
        state.list_groups = list;
    },
    //activity
    showUpcomingActivity(state, upcoming_activity) {
        state.upcoming_activity = upcoming_activity;
    },
    showActivityJoined(state, list_activity_joined) {
        state.list_activity_joined = list_activity_joined;
    },
    showActivityRegister(state, list_activity_register) {
        state.list_activity_register = list_activity_register;
    },
    //fields
    showListField(state, list_field) {
        state.list_field = list_field;
    },
};
const actions = {
    //volunteer
    showListVolunteer({ commit }) {
        http
            .getNormal("/admin/list-all-volunteers")
            .then((response) => {
                // console.log(response.data.message);
                commit("showListVolunteer", response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },

    deleteVolunteer({ dispatch }, id) {
        http
            .deleteNormal("/admin/delete-volunteer", id)
            .then((response) => {
                console.log(response);
                dispatch("showListVolunteer");
            })
            .catch((error) => {
                console.log(error);
            });
    },
    //group
    showListGroup({ commit }) {
        http
            .getNormal("/admin/list-all-groups")
            .then((response) => {
                console.log(response.data.message);
                commit("showListGroup", response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    deleteGroup({ dispatch }, id) {
        http
            .deleteNormal("/admin/delete-group", id)
            .then((response) => {
                console.log(response);
                // commit('deleteVolunteer', id);
                dispatch("showListGroup");
            })
            .catch((error) => {
                console.log(error);
            });
    },
    //activitya
    showUpcomingActivity({ commit }) {
        http
            .getNormal("/upcoming-activity")
            .then((response) => {
                console.log(response.data.message);
                commit("showUpcomingActivity", response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    showActivityJoined({ commit }, payload) {
        http
            .getNormal("/volunteer/activity-joined", payload)
            .then((response) => {
                commit("showActivityJoined", response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    showActivityRegister({ commit }, payload) {
        http
            .getNormal("/volunteer/activity-register", payload)
            .then((response) => {
                commit("showActivityRegister", response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    //field
    showListField({ commit }) {
        http
            .getNormal("/all-fields")
            .then((response) => {
                console.log(response.data.message);
                commit("showListField", response.data.data);
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