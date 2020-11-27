"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _Auth = _interopRequireDefault(require("./module/Auth"));

var _User = _interopRequireDefault(require("./module/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

_vue["default"].config.productionTip = false;
var store = new _vuex["default"].Store({
  modules: {
    auth: _Auth["default"],
    user: _User["default"]
  }
});
var _default = store;
exports["default"] = _default;