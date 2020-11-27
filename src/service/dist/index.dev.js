"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var URL = "http://127.0.0.1:8000/api";
var _default = {
  postNormal: function postNormal(endpoint, payload) {
    return _axios["default"].post(URL + endpoint, payload, {
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem('access_token'))
      }
    });
  },
  getNormal: function getNormal(endpoint, id) {
    if (id) {
      return _axios["default"].get(URL + endpoint + '/' + id, {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem('access_token'))
        }
      });
    }

    return _axios["default"].get(URL + endpoint, {
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem('access_token'))
      }
    });
  },
  deleteNormal: function deleteNormal(endpoint, id) {
    return _axios["default"]["delete"](URL + endpoint + '/' + id, {
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem('access_token'))
      }
    });
  }
};
exports["default"] = _default;