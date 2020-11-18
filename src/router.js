import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import Register from "./views/Register.vue";

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
            path: "/login",
            name: "login",
            components: { default: Login, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
            },
        },
        {
            path: "/register",
            name: "register",
            components: { default: Register, header: MainNavbar, footer: MainFooter },
            props: {
                header: { colorOnScroll: 400 },
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