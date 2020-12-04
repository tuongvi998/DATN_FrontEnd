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
        <p>Tình nguyện viên</p>
      </sidebar-link>
      <sidebar-link to="/admin/groups">
        <md-icon>group</md-icon>
        <p>Tổ chức</p>
      </sidebar-link>
      <sidebar-link to="/admin/table">
        <md-icon>content_paste</md-icon>
        <p>Thể loại</p>
      </sidebar-link>
      <sidebar-link to="/admin/typography">
        <md-icon>library_books</md-icon>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/admin/icons">
        <md-icon>bubble_chart</md-icon>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/admin/maps">
        <md-icon>location_on</md-icon>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/admin/notifications">
        <md-icon>notifications</md-icon>
        <p>Notifications</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <!-- <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin> -->

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
      title: "Vue MD",
      imgLogo: require("@/assets/img/vue-logo.png"),
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  }
};
</script>
