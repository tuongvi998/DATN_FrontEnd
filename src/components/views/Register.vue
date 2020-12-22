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
              <md-field
                :class="{ 'md-error': !checkName }"
                class="md-form-group mt-4"
                slot="inputs"
              >
                <md-icon>face</md-icon>
                <label>Tên...</label>
                <md-input v-model="name" type="text"></md-input>
              </md-field>
              <md-field
                :class="{ 'md-error': !checkEmail }"
                class="md-form-group mt-4"
                slot="inputs"
              >
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field
                :class="{ 'md-error': !checkPass }"
                class="md-form-group"
                slot="inputs"
              >
                <md-icon>lock_outline</md-icon>
                <label>Mật khẩu...</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>
              <md-field
                :class="{ 'md-error': !checkPass }"
                class="md-form-group"
                slot="inputs"
              >
                <md-icon>lock_outline</md-icon>
                <label>Xác nhận mật khẩu...</label>
                <md-input v-model="password_confirm" type="password"></md-input>
              </md-field>
              <div
                class="md-error md-form-group"
                slot="inputs"
                v-for="er in errors"
                :key="er.index"
              >
                <small v-if="!check" class="text-danger ml-3">{{ er }}</small
                ><br />
              </div>
              <md-button
                @click="register()"
                slot="footer"
                class="md-simple md-success md-lg"
              >
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
import http from "../../service/index";
export default {
  components: {
    RegisterCard,
  },
  bodyClass: "login-page",
  data() {
    return {
      check: true,
      name: null,
      email: null,
      password: null,
      password_confirm: null,
      checkPass: true,
      checkName: true,
      checkEmail: true,
      notiPass: "",
      errors: [],
      data: {
        email: "",
        name: "",
        password: "",
        role_id: "",
      },
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/joinus_hand.jpg"),
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  methods: {
   async  register() {
      this.errors = [];
      this.check = true;
      this.checkPass = true;
      this.checkName = true;
      this.checkEmail = true;
      // this.data.email = this.email;
      // this.data.name = this.name;
      // this.data.password = this.password;
      // this.data.role_id = 3;
      // http
      //   .postAuth("/auth/register", this.data)
      //   .then((res) => {
      //     alert("dasdad");
      //   })
      //   .catch((error) => {
      //     //  this.serverError = true;
      //     if (error.response) {
      //       var noti = error.response.data;
      //       if (noti.hasOwnProperty("name")) {
      //         this.checkName = false;
      //         this.check = false;
      //         this.errors.push(noti.name[0]);
      //       }
      //       if (noti.hasOwnProperty("email")) {
      //         this.checkEmail = false;
      //         this.check = false;
      //         this.errors.push(noti.email[0]);
      //       }
      //       if (noti.hasOwnProperty("password")) {
      //         this.check = false;
      //         this.checkPass = false;
      //         this.errors.push(noti.password[0]);
      //       }
      //     }
      //   });
      // ////////////////////////////////-------------------
      if(this.name && this.email && this.password && this.password_confirm){
        if(this.password == this.password_confirm){
          this.errors = [];
          this.data.email = this.email;
        this.data.name = this.name;
        this.data.password = this.password;
        this.data.role_id = 3;
          http
          .postAuth("/auth/register", this.data)
          .then((res) => {
            setTimeout(()=>{
   this.$notify({
          group: "foo",
          type: "success",
          title: "Đăng ký thành công",
          text: "Vui lòng đăng nhập để tiếp tục!",
          duration: 800,
          speed: 700,
          width: 1000,
        });
},1000);
           this.$router.push({ path: '/login' })
          })
          .catch((error) => {
            if (error.response) {
              var noti = error.response.data
              if(noti.hasOwnProperty('name')){
                this.checkName = false;
                this.check = false;
                this.errors.push(noti.name[0]);
              }
              if(noti.hasOwnProperty('email')){
                this.checkEmail = false;
                this.check = false;
                this.errors.push(noti.email[0]);
              }
              if(noti.hasOwnProperty('password')){
                this.check = false;
                this.checkPass = false;
                this.errors.push(noti.password[0]);
              }
            }
          });
        }else{
            this.errors =[];
            this.check = false;
            this.errors.push('Mật khẩu xác nhận không trùng khớp')
          }
      }else{
        if(!this.name){
          this.checkName = false;
          this.check =false;
          this.errors.push('Vui lòng nhập tên đăng ký');
        }
        if(!this.email){
          this.checkEmail = false;
          this.check =false;
          this.errors.push('Vui lòng nhập email đăng ký');
        }
        if(!this.password){
          this.checkPass = false;
          this.check =false;
          this.errors.push('Vui lòng nhập mật khẩu đăng ký');
        }
        if(!this.password_confirm){
          this.checkPass = false;
          this.check =false;
          this.errors.push('Vui lòng xác nhận mật khẩu mật khẩu đăng ký');
        }
      }
    },
  },
};
</script>

<style lang="css"></style>
