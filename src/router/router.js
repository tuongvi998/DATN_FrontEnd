import Vue from "vue";
import Router from "vue-router";
import Index from "../components/views/Index.vue";
import Landing from "../components/views/Landing.vue";
import Login from "../components/views/Login.vue";
import Profile from "../components/views/Profile.vue";
import MainNavbar from "../layout/MainNavbar.vue";
import MainFooter from "../layout/MainFooter.vue";
import Register from "../components/views/Register.vue";
import Home from "../components/views/HomePage.vue";
import UserPage from "../components/views/UserPage.vue";
import AllActivity from "../components/views/AllActivity.vue";
import ActivityDetail from "../components/views/ActivityDetail.vue";
import AllGroup from "../components/views/AllGroup.vue";
import GroupByField from "../components/views/GroupByField.vue";
import GroupDetail from "../components/views/GroupDetail.vue";
//
import GroupLayout from "../components/views/GroupLayout.vue";
import DashboardLayout from "../components/views/DashboardLayout.vue";
import Dashboard from "../components/Dashboard/DashBoard.vue";
import TableList from "../components/Dashboard/TableList.vue";
import Typography from "../components/Dashboard/Typography.vue";
import Icons from "../components/Dashboard/Icons.vue";
import Notifications from "../components/Dashboard/Notifications.vue";
import UpgradeToPRO from "../components/Dashboard/UpgradeToPRO.vue";
import UserList from "../components/Dashboard/UserList.vue";
import GroupList from "../components/Dashboard/GroupList.vue";
import FieldList from "../components/Dashboard/FieldList.vue";

import ActivityCard from "../components/Activity/ActivityCard.vue";
import ActivityByField from "../components/Activity/ActivityByField.vue";
import ActivityByGroup from "../components/Activity/ActivityByGroup.vue";
import {
    GroupDashboard,
    GroupActivity,
    GroupActivityDetail,
    GroupAllActivity,
    GroupActivityHappen,
    GroupActivityDetail_happen,
} from "../components/Group/index";
// import GroupActivity from "../components/Group/GroupActivity.vue";
Vue.use(Router);

const router = new Router({
    routes: [{
            path: "/theme",
            name: "index",
            components: { default: Index, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
            meta: { requireAuth: true },
        },
        {
            path: "/landing",
            name: "landing",
            components: { default: Landing, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/",
            name: "homepage",
            components: { default: Home, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 300 },
                footer: { backgroundColor: "black" },
            },
            meta: {
                title: "Trang chủ",
            },
        },
        {
            path: "/detail",
            name: "groupdetail",
            components: {
                default: GroupDetail,
                header: MainNavbar,
                footer: MainFooter,
            },
            props: {
                header: { colorOnScroll: 300 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/all-groups",
            name: "allgroup",
            components: { default: AllGroup, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 300 },
                footer: { backgroundColor: "black" },
            },
            meta: {
                title: "Danh bạ tổ chức",
            },
        },
        {
            path: "/all-groups/:fieldname",
            name: "group by field",
            components: {
                default: GroupByField,
                header: MainNavbar,
                footer: MainFooter,
            },
            props: {
                header: { colorOnScroll: 300 },
                footer: { backgroundColor: "black" },
            },
            meta: {
                title: "Danh bạ tổ chức",
            },
        },
        {
            path: "/login",
            name: "login",
            components: { default: Login },
            meta: {
                title: "Đăng nhập",
                requiresVisitor: true
            },
        },
        {
            path: "/register",
            name: "register",
            components: { default: Register },
            meta: {
                title: "Đăng ký",
                requiresVisitor: true
            },
        },
        {
            path: "/profile",
            name: "profile",
            components: { default: Profile, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/activity",
            name: "activity",
            redirect: "activity/all",
            components: {
                default: AllActivity,
                header: MainNavbar,
                footer: MainFooter,
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
            children: [{
                    path: "all",
                    name: "all-activity",
                    component: ActivityCard,
                    meta: { title: "Hoạt động" },
                },
                {
                    path: "/activity/byfield/:fieldname",
                    name: "field-name",
                    component: ActivityByField,
                    meta: { title: "Hoạt động" },
                },
                {
                    path: "/activity/bygroup/:groupname/:groupid",
                    name: "activity-by-group",
                    component: ActivityByGroup,
                    meta: { title: "Hoạt động" },
                },
            ],
        },
        {
            path: "/activity/detail/:id",
            name: "activity-detail",
            components: {
                default: ActivityDetail,
                header: MainNavbar,
                footer: MainFooter,
            },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
            meta: { title: "Chi tiết hoạt động" },
        },
        {
            path: "/user/:username",
            name: "user-page",
            components: { default: UserPage, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
            meta: {
                title: "Trang cá nhân",
                requiresAuth: true
            },
        },
        {
            path: "/group",
            component: GroupLayout,
            redirect: "group/dashboard",
            children: [{
                    path: "dashboard",
                    name: "Group Dashboard",
                    component: GroupDashboard,
                    meta: {
                        title: "Quản lý",
                        requiresGroup: true
                    },
                },
                {
                    path: "activity",
                    name: "Hoạt động sắp tới",
                    component: GroupActivity,
                    redirect: "/group/activity/",
                    children: [{
                            path: "/",
                            component: GroupAllActivity,
                            name: "Hoạt động sắp tới:",
                            meta: {
                                title: "Quản lý hoạt động",
                                requiresGroup: true
                            },
                        },
                        {
                            path: "/group/activity/:actiId",
                            component: GroupActivityDetail,
                            name: "Chi tiết hoạt động",
                            meta: {
                                title: "Quản lý chi tiết hoạt động",
                                requiresGroup: true
                            },
                        },
                    ],
                },
                {
                    path: "activity-happen",
                    name: "Hoạt động đã diễn ra",
                    component: GroupActivity,
                    redirect: "/group/activity-happen/",
                    children: [{
                            path: "/",
                            component: GroupActivityHappen,
                            name: "Hoạt động đã diễn ra:",
                            meta: {
                                title: "Quản lý hoạt động",
                                requiresGroup: true
                            },
                        },
                        {
                            path: "/group/activity-happen/:actiId",
                            component: GroupActivityDetail_happen,
                            name: "Chi tiết hoạt động đã diễn ra",
                            meta: {
                                title: "Quản lý chi tiết hoạt động",
                                requiresGroup: true
                            },
                        },
                    ],
                },
            ],
        },
        {
            path: "/admin",
            component: DashboardLayout,
            redirect: "admin/dashboard",
            children: [{
                    path: "dashboard",
                    name: "Dashboard",
                    component: Dashboard,
                    meta: {
                        title: "Trang quản lý",
                        requiresAdmin: true
                    },
                },
                {
                    path: "groups",
                    name: "Danh sách các tổ chức",
                    component: GroupList,
                    meta: {
                        title: "Quản lý tổ chức",
                        requiresAdmin: true
                    },
                },
                {
                    path: "fields",
                    name: "Lĩnh vực hoạt động",
                    component: FieldList,
                    meta: {
                        title: "Quản lý lĩnh vực hoạt động",
                        requiresAdmin: true
                    },
                },
                {
                    path: "typography",
                    name: "Typography",
                    component: Typography,
                },
                {
                    path: "users",
                    name: "Danh sách người dùng",
                    meta: {
                        hideFooter: true,
                        title: "Quản lý người dùng",
                        requiresAdmin: true
                    },
                    component: UserList,
                },
            ],
        },
    ],
    mode: "history",
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    // scrollBehavior: to => {
    //     if (to.hash) {
    //         return { selector: to.hash };
    //     } else {
    //         return { x: 0, y: 0 };
    //     }
    // },
});
const DEFAULT_TITLE = "Tình nguyện";
router.afterEach((to, from) => {
    Vue.nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requireAuth)) {
        const isLogin = localStorage.getItem("access_token");
        if (isLogin != null) {
            next();
        } else {
            router.replace("/login");
        }
    } else if (to.matched.some((record) => record.meta.requiresVisitor)) {
        if (localStorage.getItem("access_token")) {
            router.replace("/");
        } else {
            next();
        }
    } else if (to.matched.some((record) => record.meta.requiresGroup)) {
        if (localStorage.getItem("role_id") != 2) {
            router.replace("/");
        } else {
            next();
        }
    } else if (to.matched.some((record) => record.meta.requiresAdmin)) {
        if (localStorage.getItem("role_id") != 1) {
            router.replace("/");
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router;