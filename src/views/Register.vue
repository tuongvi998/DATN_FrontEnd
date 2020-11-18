<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <register-card header-color="green">
              <h4 slot="title" class="card-title">Đăng ký</h4>
              <!-- <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-facebook-square"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-twitter"></i>
              </md-button>
              <md-button
                slot="buttons"
                href="javascript:void(0)"
                class="md-just-icon md-simple md-white"
              >
                <i class="fab fa-google-plus-g"></i>
              </md-button>
              <p slot="description" class="description">Or Be Classical</p> -->
              <!-- <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>First Name...</label>
                <md-input v-model="firstname"></md-input>
              </md-field> -->
              <md-field class="md-form-group mt-4" slot="inputs">
                <md-icon>face</md-icon>
                <label>Tên...</label>
                <md-input v-model="name" type="text"></md-input>
              </md-field>
              <md-field class="md-form-group mt-4" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Mật khẩu...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Xác nhận mật khẩu...</label>
                <md-input v-model="password"></md-input>
              </md-field>
              <md-button @click="register" slot="footer" class="md-simple md-success md-lg">
                Đăng ký
              </md-button>
            </register-card>
            <p class="text-center">
                Bạn đã có tài khoản?
                <router-link to="/login" class="text-white">
                Đăng nhập ngay <md-icon class="text-white">login</md-icon>
                </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RegisterCard } from "@/components/index.js";

export default {
  components: {
    RegisterCard
  },
  bodyClass: "login-page",
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="css"></style>
