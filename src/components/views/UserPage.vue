<template>
  <div>
    <!-- <main-navbar class="mt-0"></main-navbar> -->
    <div class="container pt-5">
      <div class="content pt-5">
        <div class="md-layout pt-5">
          <div class="md-layout-item md-medium-size-100 md-size-18">
            <md-card
              class="md-card-profile"
              v-for="profile in getUserProfile"
              :key="profile.index"
            >
              <div class="md-card-avatar">
                <img class="img" :src="profile.user_avatar_url" />
              </div>
              <md-card-content>
                <h4 class="card-title">{{ profile.name }}</h4>
                <p v-if="profile.gender" class="card-description">
                  <i class="fas fa-venus-mars"></i> Nam
                </p>
                <p v-else class="card-description">
                  <i class="fas fa-venus-mars"></i> Nữ
                </p>
              </md-card-content>
            </md-card>
          </div>
          <div class="md-layout-item md-medium-size-100 md-size-80 w-100">
            <form>
              <md-card>
                <md-card-content>
                  <div class="md-layout">
                    <div class="md-layout-item md-size-100 md-small-size-100">
                      <tabs
                        :tab-name="[
                          'Thông tin cá nhân',
                          'Hoạt động',
                          'Đăng ký',
                        ]"
                        :tab-icon="['', '', '']"
                        plain
                        nav-pills-icons
                        color-button="success"
                      >
                        <template slot="tab-pane-1">
                          <div
                            class="md-layout w-100"
                            v-for="profile in getUserProfile"
                            :key="profile.index"
                          >
                            <div
                              class="md-layout-item md-small-size-100 md-size-43"
                            >
                              <md-field>
                                <label>Tên </label>
                                <md-input
                                  v-model="profile.name"
                                  type="text"
                                ></md-input>
                              </md-field>
                            </div>
                            <div
                              class="md-layout-item md-small-size-100 md-size-43"
                            >
                              <md-field>
                                <label>Email</label>
                                <md-input
                                  v-model="profile.email"
                                  type="email"
                                ></md-input>
                              </md-field>
                            </div>
                            <div
                              class="md-layout-item md-small-size-100 md-size-100"
                            >
                              <md-field>
                                <label>Địa chỉ</label>
                                <md-input
                                  v-model="profile.address"
                                  type="text"
                                ></md-input>
                              </md-field>
                            </div>
                            <div class="md-layout-item md-size-100">
                              <md-field maxlength="5">
                                <label>Mô tả</label>
                                <md-textarea v-model="aboutme"></md-textarea>
                              </md-field>
                            </div>
                            <div class="md-layout-item md-size-100 text-right">
                              <md-button class="md-raised md-success"
                                >Update Profile</md-button
                              >
                            </div>
                          </div>
                        </template>
                        <template slot="tab-pane-2" class="w-100">
                          <activity-joied-form :img="img"></activity-joied-form>
                        </template>
                        <template slot="tab-pane-3">
                          <activity-register-from></activity-register-from>
                        </template>
                      </tabs>
                    </div>
                  </div>
                </md-card-content>
              </md-card>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
// import EditProfileForm from "../UserProfile/EditProfileForm.vue";
import { Tabs } from "@/components";
import ActivityJoiedForm from "../UserProfile/ActivityJoiedForm.vue";
import ActivityRegisterFrom from "../UserProfile/ActivityRegisterFrom.vue";

export default {
  components: {
    // EditProfileForm,
    Tabs,
    ActivityJoiedForm,
    ActivityRegisterFrom,
  },
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg"),
    },
  },
  data() {
    return {
      username: localStorage.getItem("user_name"),
      img: require("@/assets/img/handsup.jpg"),
      disabled: null,
      lastname: null,
      firstname: null,
      city: null,
      country: null,
      code: null,
      aboutme:
        "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.",
    };
  },
  methods: {},
  computed: {
    ...mapGetters({
      getUserProfile: "getUserProfile",
    }),
  },
  created() {
    this.$store.dispatch("showUserProfile");
  },
};
</script>
<style scoped>
</style>
