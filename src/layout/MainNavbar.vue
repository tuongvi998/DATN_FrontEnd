<template>
  <md-toolbar id="toolbar" md-elevation="0" class="md-white md-absolute">
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <router-link to="/">
          <img id="nav-icon" :src="image" alt=""
        /></router-link>
        <div class="md-autocomplete">
          <md-autocomplete
            class="search"
            v-model="selectedEmployee"
            :md-options="employees"
          >
            <label>Tìm...</label>
          </md-autocomplete>
        </div>
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
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <md-button
                class="md-button md-button-link md-white md-simple"
                id="md-item"
              >
                <router-link @click="getActi" :to="{ name: 'activity' }" tag="a">
                  <a id="md-item">Hoạt động</a>
                </router-link>
              </md-button>
              <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        id="md-item"
                        class="md-button md-button-link md-white md-simple"
                        data-toggle="dropdown"
                        @click="getFields"
                      >
                        <!-- dropdown-toggle -->
                        <p id="md-item">Danh bạ tổ chức</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li v-for="field in getListField" :key="field.id">
                          <router-link
                          @click="getField(field.name)"
                            :to="{
                              name: 'group by field',
                              params: { fieldname: field.name },
                            }"
                          >
                            {{ field.name }}
                          </router-link>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
              <md-button
                id="md-item"
                v-if="!isLogin"
                class="md-button md-button-link md-white md-simple"
              >
                <router-link :to="{ name: 'login' }">
                  <a id="md-item">
                    Đăng nhập/Đăng ký <i class="material-icons">login</i></a
                  >
                </router-link>
              </md-button>
              <li class="md-list-item" v-if="isLogin">
                <a
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple"
                        data-toggle="dropdown"
                        @click="getNameLink"
                        id="md-item"
                      >
                        <!-- dropdown-toggle -->
                        <p id="md-item">{{ user_name }}</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li @click="profile()">
                          <router-link
                            :to="{
                              name: 'user-page',
                              params: { username: userpage_link },
                            }"
                          >
                            Trang cá nhân
                          </router-link>
                        </li>
                        <li @click="logoutFun()">
                          <a>Đăng xuất</a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
import { mapActions, mapGetters } from "vuex";
import VueJwtDecode from "vue-jwt-decode";
export default {
  components: {
    MobileMenu,
  },
  props: {},
  data() {
    return {
      image: require("@/assets/img/nav_icon.png"),
      extraNavClasses: "",
      toggledClass: false,
      user_name: localStorage.getItem("user_name"),
      name: "",
      userpage_link: "",
      selectedEmployee: null,
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone",
      ],
    };
  },
  computed: {
    ...mapGetters({
      getListField: "getListField",
    }),
    isLogin() {
      return localStorage.getItem("access_token") !== null;
    },
  },
  methods: {
    ...mapActions({
      showListField: "showListField",
    }),
    getActi(){
      // this.$store.dispatch("showAllUpcomingActivity");
    },
    getField(field){
    // console.log(field);
    // this.$store.dispatch("showListGroupByField",field);
    },
    logoutFun() {
      return this.$store.dispatch("logout");
    },
    getFields() {
      return this.showListField();
    },
    getNameLink() {
      const token = localStorage.getItem("access_token");
      if (token == null) {
        console.log("null");
      } else {
        const str = VueJwtDecode.decode(token);
        console.log("token", str.sub);
      }
      this.name = localStorage.getItem("user_name");
      var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ",
        "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ",
      ];
      for (var i = 0; i < AccentsMap.length; i++) {
        var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
        var char = AccentsMap[i][0];
        this.name = this.name.replace(re, char);
      }
      this.userpage_link = this.name.replace(/\s+/g, "-");
    },
    profile() {
      this.name = localStorage.getItem("user_name");
      var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ",
        "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ",
      ];
      for (var i = 0; i < AccentsMap.length; i++) {
        var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
        var char = AccentsMap[i][0];
        this.name = this.name.replace(re, char);
      }
      this.userpage_link = this.name.replace(/\s+/g, "-");
    },

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
  mounted() {
    // document.addEventListener("scroll", this.scrollListener);
    // console.log(this.$router.currentRoute.path)
  },
  beforeDestroy() {
    // document.removeEventListener("scroll", this.scrollListener);
  },
};
</script>
<style scoped>
#nav-icon {
  width: 48px;
  height: 48px;
  object-fit: cover;
}
.search {
  z-index: 20;
}
#md-item {
  color: rgb(35, 126, 50);
  font-size: 13px;
  font-weight: 500;
}
#md-item:hover {
  transition: 0.5s;
  -ms-transform: scale(1.05); /* IE 9 */
  -webkit-transform: scale(1.05); /* Safari 3-8 */
  transform: scale(1.05);
  color: #9c27b0;
  /* opacity: 0.9; */
  /* background-color: rgb(47, 153, 47); */
}
</style>