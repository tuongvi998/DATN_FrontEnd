<template>
  <div>
    <md-toolbar id="toolbar" md-elevation="0" class="md-white md-absolute">
      <div class="md-toolbar-row md-collapse-lateral">
        <div class="md-toolbar-section-start">
          <h3 class="md-title">Brand</h3>
        </div>
        <div class="md-toolbar-section-end">
          <md-button
            class="md-just-icon md-simple md-toolbar-toggle"
            :class="{ toggled: toggledClass }"
            @click="toggleNavbarMobile()"
          >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </md-button>

          <div class="md-collapse">
            <div class="md-collapse-wrapper">
              <mobile-menu nav-mobile-section-start="false"></mobile-menu>
              <md-list>
                <li class="md-list-item" v-if="!isLogin">
                  <a
                    href="javascript:void(0)"
                    class="md-list-item-router md-list-item-container md-button-clean dropdown"
                  >
                    <div class="md-list-item-content">
                      <drop-down>
      <a slot="title" class="dropdown-toggle" data-toggle="dropdown">
        <i class="material-icons">notifications</i>
        <span class="notification">5</span>
        <p class="hidden-lg hidden-md">Notifications</p>
      </a>
      <ul class="dropdown-menu dropdown-menu-right">
        <li><a href="#">Mike John responded to your email</a></li>
        <li><a href="#">You have 5 new tasks</a></li>
        <li><a href="#">You're now friend with Andrew</a></li>
        <li><a href="#">Another Notification</a></li>
        <li><a href="#">Another One</a></li>
      </ul>
    </drop-down>
                      <drop-down>
                        <md-button
                          slot="title"
                          class="md-button md-button-link md-white md-simple dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <i class="material-icons">apps</i>
                          <p>Components</p>
                        </md-button>
                        <ul class="dropdown-menu dropdown-with-icons">
                          <li>
                            <a href="#/">
                              <i class="material-icons">layers</i>
                              <p>All Components</p>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://demos.creative-tim.com/vue-material-kit/documentation/"
                            >
                              <i class="material-icons">content_paste</i>
                              <p>Documentation</p>
                            </a>
                          </li>
                        </ul>
                      </drop-down>
                      
                    </div>
                  </a>
                </li>
                <md-list-item href="#dashboard">
                  <i class="material-icons">dashboard</i>
                  <p class="">Dashboard</p>
                </md-list-item>
                <md-list-item href="#user">
                  <i class="material-icons">person</i>
                  <p class="hidden-lg hidden-md">Profile</p>
                </md-list-item>
              </md-list>
            </div>
          </div>
        </div>
      </div>
    </md-toolbar>
    
  </div>
</template>

<script>
import MobileMenu from "@/layout/MobileMenu.vue";
export default {
  components: {
    MobileMenu,
  },
  data() {
    return {
      toggledClass: false,
    };
  },
  computed: {
    isLogin() {
      return localStorage.getItem("access_token") !== null;
    },
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>