<template>
  <div class="bg-light">
    <div class="container">
      <div class="content mt-5">
        <div class="md-layout bg-white rounded mt-5 mb-2">
          <div class=" mt-2">
              <div class="row w-100">
                  <div class="col-md-4 d-flex justify-content-center">
                      <img class="img" src="http://www.philoinhuan.org/files/user/avatar/lin-image-1600761159056.png" alt="">
                  </div>
                  <div class="col-md-8">
                      <h2 class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                       <a class="btn-primary btn-outline mt-2 mr-2 ml-2" id="volunteer-btn">Liên hệ</a>
                  </div>
              </div>
            <div class="row w-100 p-3" >
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "all-group",
  data() {
    return {
      image: require("@/assets/img/allgr_card.jpg"),
    };
  },
  computed: {
      ...mapGetters({
          listFieldGroup: "getListFieldGroup"
      })
  },
  created() {
      this.$store.dispatch("showListFieldGroup");
  }
};
</script>

<style scoped>
#volunteer-btn:hover{
border-color: #4ba64f;
    background: #4ba64f;
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
.img {
    box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.2);
    display: inline-block;
    width: 180px;
    vertical-align: middle;
    border-radius: 100%;
    padding: 0px;
    background: #fff;
}
#image {
  opacity: 0.95;
  background-color: rgba(0, 0, 0, 0.3);
}
.item {
  padding-left: 5px;
  padding-right: 5px;
}
.item-card {
  transition: 0.5s;
  cursor: pointer;
      border: aliceblue;
    border-radius: 50%;
}
.card-title{
    text-align: center;
    font-size: 24px;
    color: #43884b;
}
.item-card-title {
  font-size: 15px;
  transition: 1s;
  cursor: pointer;
}
.item-card-title i {
  font-size: 15px;
  transition: 1s;
  cursor: pointer;
  color: #ffa710;
}
.card-title i:hover {
  transform: scale(1.25) rotate(100deg);
  color: #18d4ca;
}
.card:hover {
  transform: scale(1.01);
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
}

.card::before,
.card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform 0.3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: "";
  pointer-events: none;
}
.card::before {
  transform-origin: left top;
}
.card::after {
  transform-origin: right bottom;
}
.card:hover::before,
.card:hover::after,
.card:focus::before,
.card:focus::after {
  transform: scale3d(1, 1, 1);
}
</style>