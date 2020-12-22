<template>
  <footer
    class="footer mt-4"
    :class="{ [`footer-${type}`]: type }"
  >
    <div class="">
      <div class="container">
        <div class="footer w-100">
        <div class="row w-100">
          <div class="col-lg-6 col-xs-12 about-company">
            <h4>Tình nguyện cho tương lai</h4>
            <p class="pr-5 text-green-50">
              Cùng chúng tôi, chúng ta chia sẽ với mọi người để có thể xây dựng một thế giới tốt hơn.
            </p>
            <p>
              <a href="#"><i class="fa fa-facebook-square mr-1"></i></a
              ><a href="#"><i class="fa fa-linkedin-square"></i></a>
            </p>
          </div>
          <div class="col-lg-3 col-xs-12 links">
            <h4 class="mt-lg-0 mt-sm-3">Liên kết</h4>
            <ul class="m-0 p-0">
              <li><router-link tag="p" to="/activity/all">Hoạt động sắp tới</router-link></li>
              <li><router-link tag="p" to="">Danh sách tổ chức</router-link></li>
              <li><router-link tag="p" to="/">Liên hệ</router-link></li>
              <li>Fusce scelerisque</li>
            </ul>
          </div>
          <div class="col-lg-3 col-xs-12 location">
            <h4 class="mt-lg-0 mt-sm-4">Liên hệ</h4>
            <p>Hải Châu, Đà Nẵng</p>
            <p class="mb-0"><i class="fa fa-phone mr-3"></i>(541) 754-3010</p>
            <p><i class="fa fa-envelope-o mr-3"></i>tuongvii.lee@gmail.com</p>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col copyright">
            <p class="">
              <small class="text-green-50">© 2020. Bởi Lê Tường Vi.</small>
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style>
.footer {
  background: #dcefdb !important;
  color: #4a7749;
}
.footer .links ul {
  list-style-type: none;
}
.footer .text-green-50{
  color: #478254;
}
.footer .links li{
  color: #478254;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
  display: block;
}
.footer .links li:hover {
  text-decoration: none;
  color: #4180cb;
}
.footer .about-company i {
  font-size: 25px;
}
.footer .about-company a {
  color: white;
  -webkit-transition: color 0.2s;
  transition: color 0.2s;
}
.footer .about-company a:hover {
  color: #4180cb;
}
.footer .location i {
  font-size: 18px;
}
.footer .copyright p {
  border-top: 1px solid #478254;
}
</style>
