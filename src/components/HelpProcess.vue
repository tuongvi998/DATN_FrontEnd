<template>
  <div>
    <div class="row"> 
      <div class="col-md-4 col-sm-12 help-process">
        <div class="text-center ikon-box">
          <img class="helpprocess-img" :src="donate_img" alt="" />
        </div>
        <h5>Tài trợ</h5>
        <p>
          Hãy chung tay bằng cả vật chất lẫn tinh thần để chung tôi có thể thực hiện nhiều hơn các hoạt động tình nguyện.
        </p>
      </div>
      <div class="col-md-4 col-sm-12 help-process">
        <div class="text-center ikon-box">
          <img class="helpprocess-img" :src="volunteer_img" alt="" />
        </div>
        <h5>Đăng ký tình nguyện viên</h5>
        <p>
          Hãy cũng đồng hành với chúng tôi, chung tay giúp đỡ cho xã hội ngày càng tốt đẹp hơn!
        </p>
      </div>
      <div class="col-md-4 col-sm-12 help-process">
        <div class="text-center ikon-box">
          <img class="helpprocess-img" :src="group_img" alt="" />
        </div>
        <h5>Đăng ký tổ chức</h5>
        <p>
          Đăng ký để có thể thực hiện nhiều hơn những hoạt động thiết thực, giúp đỡ cộng đồng. Mang các thông tin đến
          gần với mọi người hơn.
        </p>
      </div>
    </div>
    <div class="row how-help text-center mt-4">
      <div class="buttons">
        <router-link to="/"> <a class="btn-primary mr-2 ml-2" id="donate-btn">Tài trợ</a></router-link>
        <router-link to="/login"> <a class="btn-primary btn-outline mr-2 ml-2" id="volunteer-btn">Đăng ký</a></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      donate_img: require("@/assets/img/donate_img.png"),
      volunteer_img: require("@/assets/img/become_volunteer.png"),
      group_img: require("@/assets/img/group_img.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.helpprocess-img {
  height: 75px;
}
.help-process h5 {
  font-size: 0.715rem;
  letter-spacing: 0.7px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
  color: #34495e;
  margin: 20px 0;
  text-align: center;
  font-family: 'Inter', sans-serif;
;
}
.help-process p {
  color: #34495e;
  text-align: center;
}

.how-help {
  display: table;
  margin: 0 auto;
  text-align: center;
}
.how-help a {
  float: left;
  margin-bottom: 0;
}
.how-help a + a {
  border-color: #435061;
  color: #435061;
}
.how-help a {
  float: left;
  margin-bottom: 0;
}
.buttons .btn-primary {
  margin-bottom: 15px;
}
#donate-btn {
    border-color: #4ba64f;
    background: #4ba64f;//linear-gradient(60deg, #66bb6a, #388e3c);
    color: #fff;
    border: none;
}
#volunteer-btn:hover{
border-color: #4ba64f;
    background: #4ba64f;//linear-gradient(60deg, #66bb6a, #388e3c);
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
@media (max-width: 576px) {
  .helpprocess-img {
    height: 50px;
  }
  .how-help {
    text-align: center;
  }
  .btn-primary {
  padding: 0 8px;
  border: 1px solid;
  border-radius: 3px;
  font: 500 12px/38px "Montserrat", sans-serif;
}
}
</style>