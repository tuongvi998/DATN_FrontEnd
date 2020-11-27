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
    showNoti: false
  };
};

var getters = {
  getToken: function getToken(state) {
    return state.token;
  }
};
var mutations = {
  login: function login(state, token) {
    state.token = token;
  },
  showNotify: function showNotify(state) {
    state.showNoti = true;
  },
  disableNotify: function disableNotify(state) {
    state.showNoti = false;
  }
};
var actions = {
  login: function login(_ref, payload) {
    var commit = _ref.commit;

    _index["default"].postNormal("/auth/login", payload).then(function (response) {
      var token = response.data.access_token;
      var role = response.data.user.role_id;
      localStorage.setItem("access_token", token);
      localStorage.setItem("role_id", role);
      commit("login", token);

      if (role == 3) {
        _router["default"].push("/theme");
      } else if (role == 2) {
        _router["default"].push("/group");
      } else if (role == 1) {
        _router["default"].push("/admin");
      }
    })["catch"](function (error) {
      commit("showNotify"); // document.getElementById("notify").innerHTML =
      //     "<p class='text-danger'><i class='far fa-exclamation-triangle'></i> Please check your Username/Password</p>";
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