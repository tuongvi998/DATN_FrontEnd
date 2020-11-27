"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../../service/index"));

var _router = _interopRequireDefault(require("../../router/router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = function state() {
  return {
    list_volunteer: [],
    list_groups: []
  };
};

var getters = {
  getListVolunteer: function getListVolunteer(state) {
    return state.list_volunteer;
  },
  getListGroup: function getListGroup(state) {
    return state.list_groups;
  }
};
var mutations = {
  //volunteers
  showListVolunteer: function showListVolunteer(state, list_volunteer) {
    state.list_volunteer = list_volunteer;
  },
  deleteVolunteer: function deleteVolunteer(state, id) {
    var list = state.list_volunteer.filter(function (volunteer) {
      return volunteer.id != id;
    });
    state.list_volunteer = list;
  },
  //groups
  showListGroup: function showListGroup(state, list_groups) {
    state.list_groups = list_groups;
  },
  deleteGroup: function deleteGroup(state, id) {
    var list = state.list_groups.filter(function (group) {
      return group.id != id;
    });
    state.list_groups = list;
  }
};
var actions = {
  //volunteer
  showListVolunteer: function showListVolunteer(_ref) {
    var commit = _ref.commit;

    _index["default"].getNormal('/admin/list-all-volunteers').then(function (response) {
      console.log(response.data.message);
      commit('showListVolunteer', response.data.data);
    })["catch"](function (error) {
      console.log(error);
    });
  },
  deleteVolunteer: function deleteVolunteer(_ref2, id) {
    var dispatch = _ref2.dispatch;

    _index["default"].deleteNormal('/admin/delete-volunteer', id).then(function (response) {
      console.log(response);
      dispatch('showListVolunteer');
    })["catch"](function (error) {
      console.log(error);
    });
  },
  //group
  showListGroup: function showListGroup(_ref3) {
    var commit = _ref3.commit;

    _index["default"].getNormal('/admin/list-all-groups').then(function (response) {
      console.log(response.data.message);
      commit('showListGroup', response.data.data);
    })["catch"](function (error) {
      console.log(error);
    });
  },
  deleteGroup: function deleteGroup(_ref4, id) {
    var dispatch = _ref4.dispatch;

    _index["default"].deleteNormal('/admin/delete-group', id).then(function (response) {
      console.log(response); // commit('deleteVolunteer', id);

      dispatch('showListGroup');
    })["catch"](function (error) {
      console.log(error);
    });
  }
};
var _default = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
exports["default"] = _default;