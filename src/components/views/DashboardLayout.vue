<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>
    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
      :imgLogo="imgLogo" :title="title"
      :showLogo="true"
    >
      <logo></logo>
      <!-- <mobile-menu slot="content"></mobile-menu> -->
      <sidebar-link to="/admin/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/users">
        <md-icon>person</md-icon>
        <p>Người dùng</p>
      </sidebar-link>
      <sidebar-link to="/admin/groups">
        <md-icon>group</md-icon>
        <p>Tổ chức</p>
      </sidebar-link>
      <sidebar-link to="/admin/fields">
        <md-icon>content_paste</md-icon>
        <p>Lĩnh Vực hoạt động</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content> </dashboard-content>  
      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "../Dashboard/TopNavbar";
import ContentFooter from "../Dashboard/ContentFooter.vue";
import DashboardContent from "../Dashboard/Content.vue";
// import MobileMenu from "./Dashboard/MobileMenu.vue";
// import FixedPlugin from "../Dashboard/FixedPlugin.vue";
import UserList from "../Dashboard/UserList.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    // MobileMenu,
    // FixedPlugin,
    // UserList
  },
  data() {
    return {
      sidebarBackground: "green",
      title: localStorage.getItem("user_name"),
      imgLogo: require("@/assets/img/vue-logo.png"),
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  }
};
</script>
