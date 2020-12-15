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
import ActivityByField from "../components/Activity/ActivityByField.vue"
import { GroupDashboard, GroupActivity, GroupActivityDetail, GroupAllActivity } from "../components/Group/index";
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
        },
        {
            path: "/login",
            name: "login",
            components: { default: Login },
            // props: {
            //     header: { colorOnScroll: 400 },
            // },
        },
        {
            path: "/register",
            name: "register",
            components: { default: Register },
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
            redirect: 'activity/all',
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
                    component: ActivityCard
                },
                {
                    path: "/activity/:fieldname",
                    name: "field-name",
                    component: ActivityByField
                },
            ],
        },
        {
            path: "/activity/detail/:id",
            name: "activity-detail",
            components: { default: ActivityDetail, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
            },
        },
        {
            path: "/user/:username",
            name: "user-page",
            components: { default: UserPage, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
                footer: { backgroundColor: "black" },
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
                },
                {
                    path: "activity",
                    name: "Hoạt động sắp tới",
                    component: GroupActivity,
                    redirect: "/group/activity/",
                    children: [{
                        path: "/",
                        component: GroupAllActivity,
                        name: "Hoạt động sắp tới:"
                    }, {
                        path: "/group/activity/:actiId",
                        component: GroupActivityDetail,
                        name: "Group Acti Detail"
                    }]
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
                },
                {
                    path: "table",
                    name: "Table List",
                    component: TableList,
                },
                {
                    path: "groups",
                    name: "Group List",
                    component: GroupList,
                },
                {
                    path: "fields",
                    name: "fields",
                    component: FieldList,
                },
                {
                    path: "typography",
                    name: "Typography",
                    component: Typography,
                },
                {
                    path: "icons",
                    name: "Icons",
                    component: Icons,
                },
                {
                    path: "users",
                    name: "Users",
                    meta: {
                        hideFooter: true,
                    },
                    component: UserList,
                },
                {
                    path: "notifications",
                    name: "Notifications",
                    component: Notifications,
                },
                {
                    path: "upgrade",
                    name: "Upgrade to PRO",
                    component: UpgradeToPRO,
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
    // }
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
            router.replace("/home");
        } else {
            next();
        }
    } else {
        next();
    }
});
export default router;