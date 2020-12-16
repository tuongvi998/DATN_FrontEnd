<template>
  <div class="wrapper bg-light" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
      :imgLogo="imgLogo" :title="title"
      :showLogo="true"
    >
      <!-- <mobile-menu slot="content"></mobile-menu> -->
      <sidebar-link :to="{name: 'Group Dashboard'}">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link :to="{name: 'Hoạt động sắp tới'}">
        <md-icon>person</md-icon>
        <p>Hoạt động sắp tới</p>
      </sidebar-link>
      <sidebar-link :to="{name: 'Hoạt động đã diễn ra'}">
        <md-icon>content_paste</md-icon>
        <p>Hoạt động đã diễn ra</p>
      </sidebar-link>
      <!-- <sidebar-link to="/to-chuc/typography">
        <md-icon>library_books</md-icon>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/to-chuc/icons">
        <md-icon>bubble_chart</md-icon>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/to-chuc/maps">
        <md-icon>location_on</md-icon>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/to-chuc/notifications">
        <md-icon>notifications</md-icon>
        <p>Notifications</p>
      </sidebar-link> -->
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <!-- <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin> -->

      <!-- <dashboard-content> </dashboard-content> -->
      <group-content></group-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "../Dashboard/TopNavbar";
import ContentFooter from "../Dashboard/ContentFooter.vue";
// import GroupContent
// import MobileMenu from "./Dashboard/MobileMenu.vue";
// import FixedPlugin from "../Dashboard/FixedPlugin.vue";
import UserList from "../Dashboard/UserList.vue";
import GroupContent from '../Group/GroupContent.vue';

export default {
  components: {
    TopNavbar,
    ContentFooter,
    // MobileMenu,
    // FixedPlugin,
    GroupContent,
    // UserList
  },
  data() {
    return {
     sidebarBackground: "green",
      title: localStorage.getItem("user_name"),
      // imgLogo: require("@/assets/img/vue-logo.png"),
      imgLogo: "data:image/jpeg;base64,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",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  }
};
</script>
