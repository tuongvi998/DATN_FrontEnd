"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _axios = _interopRequireDefault(require("axios"));

var _materialKit = _interopRequireDefault(require("./plugins/material-kit"));

var _index = _interopRequireDefault(require("./store/index"));

var _router = _interopRequireDefault(require("./router/router"));

var _globalComponents = _interopRequireDefault(require("./globalComponents"));

var _globalDirectives = _interopRequireDefault(require("./globalDirectives"));

var _materialDashboard = _interopRequireDefault(require("./material-dashboard"));

var _chartist = _interopRequireDefault(require("chartist"));

var _vueNotification = _interopRequireDefault(require("vue-notification"));

var _vueConfirmDialog = _interopRequireDefault(require("vue-confirm-dialog"));

var _bootstrapVue = require("bootstrap-vue");

require("bootstrap/dist/css/bootstrap.css");

require("bootstrap-vue/dist/bootstrap-vue.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Plugins
// MaterialDashboard plugin
_vue["default"].use(_vueConfirmDialog["default"]);

_vue["default"].component('vue-confirm-dialog', _vueConfirmDialog["default"]["default"]);

_vue["default"].use(_vueNotification["default"]);

_vue["default"].config.productionTip = false;
_vue["default"].prototype.$http = _axios["default"];

_vue["default"].use(_materialKit["default"]);

_vue["default"].use(_materialDashboard["default"]);

_vue["default"].use(_globalComponents["default"]);

_vue["default"].use(_globalDirectives["default"]);

_vue["default"].prototype.$Chartist = _chartist["default"]; // //vue boostrap : 

_vue["default"].use(_bootstrapVue.BootstrapVue); //     // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)


var token = localStorage.getItem("token");

if (token) {
  _vue["default"].prototype.$http.defaults.headers.common["Authorization"] = token;
}

var NavbarStore = {
  showNavbar: false
};
_vue["default"].config.productionTip = false;

_vue["default"].mixin({
  data: function data() {
    return {
      NavbarStore: NavbarStore
    };
  }
});

new _vue["default"]({
  router: _router["default"],
  store: _index["default"],
  render: function render(h) {
    return h(_App["default"]);
  },
  data: {
    Chartist: _chartist["default"]
  }
}).$mount("#app");