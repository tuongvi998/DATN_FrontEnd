<template>
  <div class="bg-light">
    <!-- <main-navbar class="mt-0"></main-navbar> -->
    <div
      class="container-fluid pt-"
      :class="{ 'nav-open': $sidebar.showSidebar }"
    >
      <div class="content pt-5">
        <div class="md-layout pt-5">
          <div class="md-layout-item md-medium-size-100 active-expandedmd-size-17">
            <side-bar
              :sidebar-item-color="sidebarBackground"
              :sidebar-background-image="sidebarBackgroundImage"
              :showLogo="false"
              v-for="field in listField" :key="field.index"
            >
            <sidebar-link to="/admin/dashboard">
                <md-icon>dashboard</md-icon>
                <p>{{field.field_name}}</p>
              </sidebar-link>
              <!-- <mobile-menu slot="content"></mobile-menu> -->
              <!-- <sidebar-link to="/admin/dashboard">
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
              </sidebar-link> -->
            </side-bar>
          </div>
          <div class="md-layout-item md-medium-size-100 md-size-80">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              obcaecati minus, voluptas corporis odit cupiditate dolorum vitae
              totam enim aspernatur, ratione voluptate animi consequuntur
              deserunt magnam! Animi expedita dolores id?
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  components: {},
  props: {},
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
    };
  },
  methods: {},
  computed: {
    ...mapGetters({
      listField: "getListField"
    })
  },
  created() {
    this.$store.dispatch("showListField");
    console.log(this.listField);
  },
};
</script>
<style scoped>
</style>
