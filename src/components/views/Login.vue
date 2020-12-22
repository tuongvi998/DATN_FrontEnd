<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Đăng nhập</h4>
              <md-field
                :class="{ 'md-error': !checkEmail }"
                class="md-form-group mt-4"
                slot="inputs"
              >
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
                <md-icon v-if="!checkEmail">clear</md-icon>
              </md-field>
              <md-field
                :class="{ 'md-error': !checkPassword }"
                class="md-form-group"
                slot="inputs"
              >
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input v-model="password" type="password"></md-input>
                <md-icon v-if="!checkPassword">clear</md-icon>
              </md-field>
              <div
                class="md-error md-form-group"
                slot="inputs"
                v-for="er in errors"
                :key="er.index"
                id="notify"
              >
                <small v-if="!check" class="text-danger ml-3">{{ er }}</small
                ><br />
                
              </div>
              <md-button
                @click="loginFun()"
                slot="footer"
                class="md-simple md-success md-lg"
              >
                Đăng nhập
              </md-button>
            </login-card>
            <p class="text-center">
              Bạn chưa đăng ký thành viên?
              <router-link to="/register" class="text-white">
                Đăng ký ngay
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components/index.js";
import { mapActions, mapMutations, mapState } from "vuex";
import http from "../../service/index";

export default {
  components: {
    LoginCard,
  },
  bodyClass: "login-page",
  data() {
    return {
      firstname: '',
      email: null,
      password: null,
      checkEmail: true,
      checkPassword: true,
      errors: [],
      check: true,
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/joinus_hand.jpg"),
    },
  },
  computed: {
    ...mapState({
      showNoti: "showNoti"
    }),
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  methods: {
    ...mapActions({
      login: "login",
    }),
    ...mapMutations({
      disableNotify: "disableNotify"
    }),
    loginFun() {
      this.check = true;
      this.errors = []
      // console.log(this.email + 'v ' + this.password)
      if (this.email  && this.password) {
         this.checkEmail = true;
        this.checkPassword = true;
        this.check = true;
        // return  this.login({
        //   email: this.email,
        //   password: this.password,
        // });
        http.postAuth("/auth/login",{
          email: this.email,
          password: this.password,
        })
        .then(response=> {
                const token = response.data.access_token;
                const role = response.data.user.role_id;
                localStorage.setItem("access_token", token);
                localStorage.setItem("user_name", response.data.user.name);
                localStorage.setItem("role_id", role);
                if(role == 1){
                  this.$router.push({ path: '/admin' })
                }else if(role == 2){
                  this.$router.push({ path: '/group' })
                }else{
                  this.$router.back();
                }
        })
        .catch( error=> {
          if(error.response){
            this.check = false;
            this.checkEmail = false;
            this.checkPassword = false;
            this.errors.push(error.response.data);
          }
        })
      }else{
          if(!this.email){
            this.checkEmail = false;
            this.check = false;
            this.errors.push("Bạn chưa nhập email");
          }
          if(!this.password){
            this.checkPassword = false;
            this.check = false;
            this.errors.push("Bạn chưa nhập mật khẩu");
          }
      } 
    },
  },
  watch:{
    login(error){
      console.log(error)
    }
  }
};
</script>

<style lang="css">
  #notify{
    font-weight: 700;
  }
</style>
