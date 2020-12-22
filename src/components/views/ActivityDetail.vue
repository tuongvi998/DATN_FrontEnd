<template>
  <div class="bg-white" ref="homeCont">
    <div class="container pt-5">
      <div
        class="-fluid mt-5"
        v-for="activity in activityDetail"
        :key="activity.index"
      >
        <div class="row w-100">
          <div class="col-md-4 col-sm-6 col-12 text-left">
            <h2 id="activity-title">
              {{activity.title}}
            </h2>
            <small
              ><i class="fas fa-stream mr-3"></i
              >{{ activity.field_name }}</small
            >
            <br />
            <small
              ><i class="far fa-envelope-open mr-3"></i
              >{{ activity.email }}</small
            >
            <br />
            
          </div>
          <div class="col-md-8 col-sm-6 col-12 d-flex text-center">
            <img
              id="card-image"
              class="rounded"
              :src="activity.image_url"
              alt="Snowy Mountains"
            />
          </div>
        </div>
        <div class="content p-3 mt-4">
          <div class="row w-100 mt-2">
            <div class="col-md-2 col-sm-3 ac-title">Nội dung:</div>
            <div class="col-md-10 col-sm-9 ac-content">
              {{ activity.content }}
            </div>
          </div>
          <div class="row w-100 mt-2">
            <div class="col-md-2 col-sm-3 ac-title">Địa chỉ:</div>
            <div class="col-md-10 col-sm-9 ac-content">
              {{ activity.address }}
            </div>
          </div>
          <div class="row w-100 mt-2">
            <div class="col-md-2 col-sm-3 ac-title">Hạn đăng ký:</div>
            <div class="col-md-10 col-sm-9 ac-content">
              {{ activity.close_date }}
            </div>
          </div>
          <div class="row w-100 mt-2">
            <div class="col-md-2 col-sm-3 ac-title">Ngày diễn ra:</div>
            <div class="col-md-10 col-sm-9 ac-content">
              {{ activity.start_date }} ~ {{ activity.end_date }}
            </div>
          </div>
          <div class="row w-100 mt-2">
            <div class="col-md-2 col-sm-3 ac-title">Email liên hệ:</div>
            <div class="col-md-10 col-sm-9 ac-content">
              {{ activity.email }}
            </div>
          </div>
          <div class="row w-100 mt-2">
            <div class="col-md-2 col-sm-3 ac-title">Yêu cầu:</div>
            <div class="col-md-10 col-sm-9 ac-content">
              {{ activity.require }}
            </div>
          </div>
          <div class="row w-100 mt-2">
            <div class="col-md-2 col-sm-3 ac-title">Quyền lợi:</div>
            <div class="col-md-10 col-sm-9 ac-content">
              {{ activity.benefit }}
            </div>
          </div>
          <div>
            <md-button id="register-btn" v-if="!isLogin && !isRegister" @click="notifi()"
              >Bấm để đăng ký</md-button
            >
            <md-button v-if="isRegister">Da Dang ky</md-button>
            <md-button
              v-else-if="isLogin"
              v-b-toggle.register-volunteer
              class="md-success"
              @click="showRegisterForm"
              >Bấm để đăng ký</md-button
            >
            <b-collapse id="register-volunteer" class="mt-2">
              <div class="container">
                <b-card>
                  <form class="row p-5">
                    <div class="col-md-4">
                      <md-field>
                        <label>Tên đăng ký</label>
                        <md-input v-model="name" disabled></md-input>
                      </md-field>
                    </div>
                    <div class="col-md-4">
                      <md-field>
                        <label>Email</label>
                        <md-input v-model="email" disabled></md-input>
                      </md-field>
                    </div>
                    <div class="col-md-4">
                      <md-field>
                        <label>Ngay sinh</label>
                        <md-input v-model="birthday" disabled></md-input>
                      </md-field>
                    </div>
                    <div class="col-md-12">
                      <md-field>
                        <label>Địa chỉ</label>
                        <md-input v-model="address" disabled></md-input>
                      </md-field>
                    </div>
                    <div class="col-md-12">
                      <md-field :class="{ 'md-error': !checkIntro }">
                        <label>Giới thiệu bản thân</label>
                        <md-input v-model="introduction"></md-input>
                        <md-icon v-if="!checkIntro">clear</md-icon>
                      </md-field>
                      <small v-if="!checkIntro" class="text-danger"
                        >Bạn chưa nhập giới thiệu bản thân!</small
                      >
                    </div>
                    <div class="col-md-12">
                      <md-field :class="{ 'md-error': !checkExperience }">
                        <label>Kinh nghiệm: </label>
                        <md-input v-model="experience"></md-input>
                        <md-icon v-if="!checkExperience">clear</md-icon>
                      </md-field>
                      <small v-if="!checkExperience" class="text-danger"
                        >Bạn chưa nhập kinh nghiệm bản thân!</small
                      >
                    </div>
                    <div class="col-md-12">
                      <md-field :class="{ 'md-error': !checkInterest }">
                        <label>Sở thích cá nhân</label>
                        <md-input v-model="interest"></md-input>
                        <md-icon v-if="!checkInterest">clear</md-icon>
                      </md-field>
                      <small v-if="!checkInterest" class="text-danger"
                        >Bạn chưa nhập sở thích cá nhân!</small
                      >
                    </div>
                    <div class="col-12">
                      <md-button @click="registerVolunteer" class="md-success"
                        >Đăng ký</md-button
                      >
                    </div>
                  </form>
                </b-card>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notifications from "./components/NotificationsSection";
import { mapActions, mapGetters } from "vuex";
import VueJwtDecode from "vue-jwt-decode";
import http from "../../service/index";
export default {
  name: "activity-detail",
  data() {
    return {
      loader: "dots",
      activity_id: this.$route.params.id,
      birthday: "20/10/2020",
      name: "",
      email: "",
      introduction: "",
      interest: "",
      address: "",
      checkIntro: true,
      checkInterest: true,
      checkExperience: true,
      experience:'',
      user_id: '',
      date: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
      isAccept: false,
      profile: {
        volunteer_user_id: '',
        activity_id: '',
        isAccept: '',
        register_date: '',
        introduction:'',
        interest: '',
        experience: ''
      }
    };
  },
  computed: {
    ...mapGetters({
      activityDetail: "getActivityDetail",
      isRegister: "getIsRegister",
      getUserProfile: "getUserProfile",
    }),
    isLogin() {
      return localStorage.getItem("access_token") !== null;
    },
  },
  methods: {
    ...mapActions({
      postRegisterProfile: "postRegisterProfile"
    }),
    btn() {
      console.log(this.activity_id);
    },
    notifi() {
      this.$confirm({
        title: "Bạn chưa đăng nhập",
        message: "Bạn có muốn đăng nhập để tiếp tục?",
        button: {
          yes: "Có",
          no: "Không"
        },
        callback: (confirm) => {
          if (confirm == true) {
            this.$router.push({ name: 'login' })
          }

    },})},
    showRegisterForm() {
      this.checkIntro = true;
      this.checkInterest = true;
      this.checkExperience = true;
      this.getUserProfile.forEach((user) => {
        this.name = user.name;
        this.birthday = user.birthday;
        this.email = user.email;
        this.address = user.address;
      });
      console.log(this.name);
    },
    registerVolunteer() {
      var checkIntro = this.introduction
        .replace(/^\s+/, "")
        .replace(/\s+$/, "");
      var checkInterest = this.interest
        .replace(/^\s+/, "")
        .replace(/\s+$/, "");
      var checkExperience = this.experience.replace(/^\s+/, "")
        .replace(/\s+$/, "");
     if (checkIntro == "" && checkInterest == "" && checkExperience=="") {
        this.checkIntro = false;    
        this.checkInterest = false;
        this.checkExperience =false
      } else if (checkIntro == "") {
        this.checkIntro = false;
      } else if (checkInterest == "") {
        this.checkInterest = false;
      } else if (checkExperience == "") {
        this.checkExperience = false;
      }
      else if (checkIntro !== "" && checkInterest !== "" && checkExperience !=="") {
        this.checkIntro = true;
        this.checkInterest = true;
        this.checkExperience = true;
        // const date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
        // const user_id = VueJwtDecode.decode(localStorage.getItem("access_token"))
          // console.log('ds', user_id, '  ', date)
          this.profile.volunteer_user_id = this.user_id;
          this.profile.activity_id = this.activity_id;
          this.profile.isAccept = this.isAccept;
          this.profile.register_date = this.date;
          this.profile.introduction = this.introduction;
          this.profile.interest = this.interest;
          this.profile.experience = this.experience;
          console.log(this.profile)
          http.postNormal("/volunteer/register-profile", this.profile)
          .then(response => {
            console.log(response);
            this.$store.dispatch("showIsRegister", this.activity_id);
            this.$notify({
          group: "foo",
          type: "success",
          title: "Đăng ký thành công",
          text: "Kiểm tra trạng thái hồ sơ ở trang cá nhân!",
          duration: 1000,
          speed: 1000,
          width: 1000,
        });
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
  },
  created() {
    let homeCont = this.$refs.homeCont;
    let loader = this.$loading.show(
          {
            container: homeCont,
            loader: this.loader,
          }
        );
        setTimeout(() => {
          loader.hide();
        }, 3000);
    //  | VueJwtDecode.decode(localStorage.getItem("access_token")).sub,
    if(localStorage.getItem("access_token")){
      this.user_id = VueJwtDecode.decode(localStorage.getItem("access_token")).sub;
      this.$store.dispatch("showIsRegister", this.activity_id);
      this.$store.dispatch("showUserProfile");
    }
    this.$store.dispatch("showActivityDetail", this.activity_id);
    
    // this.$store.dispatch("showUserProfile");
  },
};
</script>

<style scoped>
.vue-notification {
  padding: 15px;
  margin: 0 8px 8px;
}
.ac-title {
  font-size: 17px;
  color: #2e7e32;
  font-family: monospace;
  font-weight: 550;
  padding-left: 30px;
}
.ac-content {
  font-size: 15px;
  color: #333;
  font-weight: normal;
  font-style: normal;
  line-height: normal;
  font-family: "Segoe UI", monospace, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
}
#activity-title {
  /* font-size: 0.715rem; */
  letter-spacing: 0.7px;
  line-height: 1.3;
  font-weight: 500;
  text-transform: uppercase;
  color: #2e7e32;
  margin: 20px 0;
  /* text-align: center; */
  font-family: "Inter", sans-serif;
}
#card-image {
  width: 100%;
  max-height: 270px;
  /* height: 250px; */
}
.card-title {
  text-transform: uppercase;
  letter-spacing: 0.7px;
  line-height: 1.5;
  font-weight: 500;
  font-family: Segoe UI, SegoeUI, Helvetica Neue, Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  color: #3d4652;
  /* margin: 18px 0; */
  /* text-align: center; */
  margin-bottom: 0;
  transform: scale(1, 0.9);
}
#activity-content {
  display: block;
  display: -webkit-box;
  max-width: 100%;
  margin: 0 auto;
  font-size: 14px;
  line-height: 1.5;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #3c4858;
}
.activity-detail {
  width: 50%;
}
.btn-primary {
  margin-top: 25px;
  /* padding: 0 22px; */
  padding: 0 12px;
  border: 1px solid;
  border-radius: 3px;
  font: 700 11px/30px "Montserrat", sans-serif;
  text-transform: uppercase;
  -webkit-box-shadow: none;
  box-shadow: none;
  display: inline-block;
  white-space: nowrap;
  text-shadow: none;
  text-align: center;
  -webkit-transition: all 300ms linear 0s;
  transition: all 300ms linear 0s;
}
#detail-btn {
  border-color: #4ba64f;
  background: #4ba64f;
  /* linear-gradient(60deg, #66bb6a, #388e3c); */
  color: #fff;
  border: none;
}
</style>