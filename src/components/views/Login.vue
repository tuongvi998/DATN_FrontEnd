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
              <div slot="alert" class="text-center" id="notify">
              </div>
              <!-- <md-field v-if="!check" slot="alert">
                
              </md-field> -->
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
export default {
  components: {
    LoginCard,
  },
  bodyClass: "login-page",
  data() {
    return {
      firstname: '',
      email: '',
      password: '',
      checkEmail: true,
      checkPassword: true,
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/handsup.jpg"),
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
      console.log(this.email + 'v ' + this.password)
      if (this.email == '' && this.password == '') {
        this.checkEmail = false;
        this.checkPassword = false;
        this.$notify({
          group: "foo",
          type: "error",
          title: "This is title",
          text: "Vui lòng nhập email và mật khẩu",
          duration: 800,
          speed: 700,
          width: 1000,
        });
      }else if (this.password == '' && this.email != '') {
        this.checkPassword = false;
        this.checkEmail = true;
        console.log('pw ', this.checkPassword)
        this.$notify({
          group: "foo",
          type: "error",
          title: "",
          text: "Vui lòng nhập mật khẩu!",
          duration: 800,
          speed: 700,
          width: 1000,
        });
      } else if (this.email == '' && this.password != '') {
        this.checkEmail = false;
        this.checkPassword = true;
        console.log('email ', this.checkEmail);
        this.$notify({
          group: "foo",
          type: "error",
          title: "",
          text: "Vui lòng nhập email!",
          duration: 800,
          speed: 700,
          width: 1000,
        });
      }
      else if (this.email != '' && this.password != '') {
        this.checkEmail = true;
        this.checkPassword = true;
        return  this.login({
          email: this.email,
          password: this.password,
        }).then(response =>{

        }).catch(error=>{console.log(error.status)});
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
