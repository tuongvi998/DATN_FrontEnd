<template>
  <form>
    <md-card>
      <!-- <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">Edit Profile</h4>
        <p class="category">Complete your profile</p>
      </md-card-header> -->
      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-size-100 md-small-size-100">
            <tabs
              :tab-name="['Thông tin cá nhân', 'Hoạt động']"
              :tab-icon="['', '']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- ['dashboard', 'schedule', 'list'] -->
              <template slot="tab-pane-1">
                <div
                  class="md-layout"
                  v-for="profile in profileUser"
                  :key="profile.index"
                >
                  <div class="md-layout-item md-small-size-100 md-size-33">
                    <md-field>
                      <label>Company (disabled)</label>
                      <md-input v-model="disabled" disabled></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-33">
                    <md-field>
                      <label>Tên </label>
                      <md-input v-model="profile.name" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-33">
                    <md-field>
                      <label>Email</label>
                      <md-input v-model="profile.email" type="email"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 md-size-100">
                    <md-field>
                      <label>Địa chỉ</label>
                      <md-input
                        v-model="profile.address"
                        type="text"
                      ></md-input>
                    </md-field>
                  </div>
                  <!-- <div class="md-layout-item md-small-size-100 md-size-33">
                    <md-field>
                      <label>Postal Code</label>
                      <md-input v-model="code" type="number"></md-input>
                    </md-field>
                  </div> -->
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
              <template slot="tab-pane-2">
                <div class="container">
                  <!-- <div class="md-layout-item md-small-size-100 md-size-33">
                    
                  </div> -->
                  <div class="row">
                    <div class="col-md-6 col-sm-6 col-8">
                      <img :src="img" class="rounded" alt="" />
                    </div>
                    <div class="col-md-6 col-sm-6 col-12">
                      <h5>Đây là tiêu đề</h5>
                      <p>Đây là mô tả : content</p>
                      <a
                        href=""
                        class="btn-primary btn-outline mr-2 ml-2 mt-3"
                        id="activity-btn"
                        >Xem thêm <i class="fas fa-arrow-right"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </template>
              <template slot="tab-pane-3">
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas.
                <br /><br />
                Dynamically innovate resource-leveling customer service for
                state of the art customer service.
              </template>
            </tabs>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import { Tabs } from "@/components";
export default {
  name: "edit-profile-form",
  components: {
    Tabs,
  },
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
    profileUser: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
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
};
</script>
<style scoped>
#activity-btn {
  border-color: #435061;
  color: #435061;
}
#activity-btn:hover {
  border-color: #4ba64f;
  background: linear-gradient(60deg, #66bb6a, #388e3c);
  color: #fff;
  border: none;
}
.btn-primary {
  padding: 0 22px;
  border: 1px solid;
  border-radius: 3px;
  font: 700 12px/36px "Montserrat", sans-serif;
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
.btn-primary.btn-outline {
  background: none;
}
</style>
