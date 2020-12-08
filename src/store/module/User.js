import http from "../../service/index";
import router from "../../router/router";

const state = () => ({
    list_volunteer: [],
    list_groups: [],
    upcoming_activity: [],
    list_field: [],
    list_field_controler: [],
    list_activity_joined: [],
    list_activity_register: [],
    list_all_upcoming_activity: [],
    list_activity_by_field: [],
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
    getAllUpcomingActivity: (state) => {
        return state.list_all_upcoming_activity;
    },
    getListField: (state) => {
        return state.list_field;
    },
    getListFieldController: (state) => {
        return state.list_field_controler;
    },
    getListAvtivityByField: (state) => {
        return state.list_activity_by_field;
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
    showAllUpcomingActivity(state, list_all_upcoming_activity) {
        state.list_all_upcoming_activity = list_all_upcoming_activity;
    },
    showActivityJoined(state, list_activity_joined) {
        state.list_activity_joined = list_activity_joined;
    },
    showActivityRegister(state, list_activity_register) {
        state.list_activity_register = list_activity_register;
    },
    showActivityByField(state, list_activity_by_field) {
        state.list_activity_by_field = list_activity_by_field;
    },
    //fields
    showListField(state, list_field) {
        state.list_field = list_field;
    },
    showListFieldController(state, list_field) {
        state.list_field_controler = list_field;
    },
    deleteField(state, id) {
        var list = state.list_field_controler.filter((field) => field.id != id);
        state.list_field_controler = list;
    },
};
const actions = {
    //volunteer
    showListVolunteer({ commit }) {
        http
            .getNormal("/admin/volunteers")
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
            .deleteNormal("/admin/volunteer", id)
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
            .getNormal("/groups")
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
            .deleteNormal("/admin/group", id)
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
            .getNormal("/activity/upcoming-activity")
            .then((response) => {
                // console.log(response.data.message);
                commit("showUpcomingActivity", response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    showAllUpcomingActivity({ commit }) {
        http
            .getNormal("/activity/all-upcoming-activity")
            .then((response) => {
                // console.log(response.data.message);
                commit("showAllUpcomingActivity", response.data.data);
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
    showActivityByField({ commit }, payload) {
        http.getNormal("/activities/field", payload)
            .then(response => {
                commit("showActivityByField", response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    //field
    showListField({ commit }) {
        http
            .getNormal("/fields")
            .then((response) => {
                // console.log(response.data.message);
                commit("showListField", response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    showListFieldController({ commit }) {
        http
            .getNormal("/admin/fields")
            .then((response) => {
                // console.log(response.data.message);
                commit("showListFieldController", response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    },
    createField({ dispatch }, payload) {
        http
            .postNormal("/admin/field", payload)
            .then((response) => {
                // console.log(response);
                dispatch("showListFieldController");
            })
            .catch((error) => {
                console.log(error);
            });
    },
    deleteField({ dispatch }, id) {
        http
            .deleteNormal("/admin/field", id)
            .then((response) => {
                // console.log(response);
                // commit('deleteVolunteer', id);
                dispatch("showListFieldController");
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