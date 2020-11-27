"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Index = _interopRequireDefault(require("../components/views/Index.vue"));

var _Landing = _interopRequireDefault(require("../components/views/Landing.vue"));

var _Login = _interopRequireDefault(require("../components/views/Login.vue"));

var _Profile = _interopRequireDefault(require("../components/views/Profile.vue"));

var _MainNavbar = _interopRequireDefault(require("../layout/MainNavbar.vue"));

var _MainFooter = _interopRequireDefault(require("../layout/MainFooter.vue"));

var _Register = _interopRequireDefault(require("../components/views/Register.vue"));

var _HomePage = _interopRequireDefault(require("../components/views/HomePage.vue"));

var _GroupLayout = _interopRequireDefault(require("../components/views/GroupLayout.vue"));

var _DashboardLayout = _interopRequireDefault(require("../components/views/DashboardLayout.vue"));

var _DashBoard = _interopRequireDefault(require("../components/views/Dashboard/DashBoard.vue"));

var _TableList = _interopRequireDefault(require("../components/views/Dashboard/TableList.vue"));

var _Typography = _interopRequireDefault(require("../components/views/Dashboard/Typography.vue"));

var _Icons = _interopRequireDefault(require("../components/views/Dashboard/Icons.vue"));

var _Notifications = _interopRequireDefault(require("../components/views/Dashboard/Notifications.vue"));

var _UpgradeToPRO = _interopRequireDefault(require("../components/views/Dashboard/UpgradeToPRO.vue"));

var _UserList = _interopRequireDefault(require("../components/views/Dashboard/UserList.vue"));

var _GroupList = _interopRequireDefault(require("../components/views/Dashboard/GroupList.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//
// import Maps from "../components/views/Dashboard/Maps.vue";
_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  routes: [{
    path: "/theme",
    name: "index",
    components: {
      "default": _Index["default"],
      header: _MainNavbar["default"],
      footer: _MainFooter["default"]
    },
    props: {
      header: {
        colorOnScroll: 400
      },
      footer: {
        backgroundColor: "black"
      }
    },
    meta: {
      requireAuth: true
    }
  }, {
    path: "/landing",
    name: "landing",
    components: {
      "default": _Landing["default"],
      header: _MainNavbar["default"],
      footer: _MainFooter["default"]
    },
    props: {
      header: {
        colorOnScroll: 400
      },
      footer: {
        backgroundColor: "black"
      }
    }
  }, {
    path: "/",
    name: "homepage",
    components: {
      "default": _HomePage["default"],
      header: _MainNavbar["default"],
      footer: _MainFooter["default"]
    },
    props: {
      header: {
        colorOnScroll: 400
      },
      footer: {
        backgroundColor: "black"
      }
    }
  }, {
    path: "/login",
    name: "login",
    components: {
      "default": _Login["default"],
      header: _MainNavbar["default"],
      footer: _MainFooter["default"]
    },
    props: {
      header: {
        colorOnScroll: 400
      }
    }
  }, {
    path: "/register",
    name: "register",
    components: {
      "default": _Register["default"],
      header: _MainNavbar["default"],
      footer: _MainFooter["default"]
    },
    props: {
      header: {
        colorOnScroll: 400
      }
    }
  }, {
    path: "/profile",
    name: "profile",
    components: {
      "default": _Profile["default"],
      header: _MainNavbar["default"],
      footer: _MainFooter["default"]
    },
    props: {
      header: {
        colorOnScroll: 400
      },
      footer: {
        backgroundColor: "black"
      }
    }
  }, {
    path: '/group',
    component: _GroupLayout["default"],
    redirect: "group/dashboard",
    children: [{
      path: "dashboard",
      name: "Dashboard",
      component: _DashBoard["default"]
    }]
  }, {
    path: "/admin",
    component: _DashboardLayout["default"],
    redirect: "admin/dashboard",
    children: [{
      path: "dashboard",
      name: "Dashboard",
      component: _DashBoard["default"]
    }, {
      path: "table",
      name: "Table List",
      component: _TableList["default"]
    }, {
      path: "groups",
      name: "Group List",
      component: _GroupList["default"]
    }, {
      path: "typography",
      name: "Typography",
      component: _Typography["default"]
    }, {
      path: "icons",
      name: "Icons",
      component: _Icons["default"]
    }, {
      path: "users",
      name: "Users",
      meta: {
        hideFooter: true
      },
      component: _UserList["default"]
    }, {
      path: "notifications",
      name: "Notifications",
      component: _Notifications["default"]
    }, {
      path: "upgrade",
      name: "Upgrade to PRO",
      component: _UpgradeToPRO["default"]
    }]
  }],
  mode: "history",
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active" // scrollBehavior: to => {
  //     if (to.hash) {
  //         return { selector: to.hash };
  //     } else {
  //         return { x: 0, y: 0 };
  //     }
  // }

});
router.beforeEach(function (to, from, next) {
  if (to.matched.some(function (record) {
    return record.meta.requireAuth;
  })) {
    var isLogin = localStorage.getItem("access_token");

    if (isLogin != null) {
      next();
    } else {
      router.replace("/login");
    }
  } else if (to.matched.some(function (record) {
    return record.meta.requiresVisitor;
  })) {
    if (localStorage.getItem("access_token")) {
      router.replace("/home");
    } else {
      next();
    }
  } else {
    next();
  }
});
var _default = router;
exports["default"] = _default;