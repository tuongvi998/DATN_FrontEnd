<template>
  <div
    class="sidebar"
    :data-color="sidebarItemColor"
    :data-image="sidebarBackgroundImage"
    :style="sidebarStyle"
  >
    <slot name="logo" v-if="showLogo" >
      <logo :imgLogo="imgLogo" :title="title"></logo>
    </slot>
    <div class="sidebar-wrapper">
      <slot name="content"></slot>
      <md-list class="nav" :class="sidebar_color">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot>
          <sidebar-link
            v-for="(link, index) in sidebarLinks"
            :key="link.name + index"
            :to="link.path"
            :link="link"
          >
          </sidebar-link>
        </slot>
      </md-list>
    </div>
  </div>
</template>
<script>
import SidebarLink from "./SidebarLink.vue";
import Logo from "./Logo.vue";
export default {
  components: {
    SidebarLink,
    Logo
  },
  props: {
    showLogo: {
      type: Boolean
    },
    sidebar_color:{
      type: String,
    },
    title: {
      type: String,
    },
    sidebarBackgroundImage: {
      type: String,
    },
    imgLogo: {
      type: String,
    },
    sidebarItemColor: {
      type: String,
      default: "green",

    },
    sidebarLinks: {
      type: Array,
      default: () => []
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
  computed: {
    sidebarStyle() {
      return {
        backgroundImage: `url(${this.sidebarBackgroundImage})`
      };
    }
  }
};
</script>
<style>
@media screen and (min-width: 991px) {
  .nav-mobile-menu {
    display: none;
  }
}
</style>
