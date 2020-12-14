<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
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
      <sidebar-link to="/to-chuc/posts">
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

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

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
import FixedPlugin from "../Dashboard/FixedPlugin.vue";
import UserList from "../Dashboard/UserList.vue";
import GroupContent from '../Group/GroupContent.vue';

export default {
  components: {
    TopNavbar,
    ContentFooter,
    // MobileMenu,
    FixedPlugin,
    GroupContent,
    // UserList
  },
  data() {
    return {
     sidebarBackground: "green",
      title: "Minh",
      imgLogo: require("@/assets/img/vue-logo.png"),
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  }
};
</script>
