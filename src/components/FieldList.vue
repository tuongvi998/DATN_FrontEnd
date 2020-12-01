<template>
  <div class="container">
    <div id="images">
      <div class="title">
        <h2>Images</h2>
      </div>
      <div class="row text-center ">
        <div class="circle-with-text">
    Here is some text in circle
</div>
        <div
          class="col-md-3 col-sm-3 col-4 mb-3 text-center d-flex justify-content-center"
        >
          <!-- <div class="field-name bg-danger text-center rounded-circle">
            <p class="quantity">[17]</p>
            <p class="text">Giải trí</p>
          </div> -->
            <div class=" field-name card shadow border-0 rounded-circle">
          <div class="card-body">
            <div class="field">
              <h6>Moi truong va Thien</h6>
              <!-- <h6>12</h6> -->
            </div>
          </div>
        </div>

        </div>
        <div class="col-md-3 col-sm-3 col-4 mb-3 d-flex justify-content-center">
          <div class="field-name rounded-circle">
            <p class="quantity">[17]</p>
            <p class="text">Giải trí</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-3 col-4 mb-3 d-flex justify-content-center">
          <div class="field-name rounded-circle">
            <p class="quantity">[17]</p>
            <p class="text">Giải trí</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-3 col-4 mb-3 d-flex justify-content-center">
          <div class="field-name rounded-circle">
            <p class="quantity">[17]</p>
            <p class="text">Giải trí</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-3 col-4 mb-3 d-flex justify-content-center">
          <div class="field-name rounded-circle">
            <p class="quantity">[17]</p>
            <p class="text">Giải trí</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-3 col-4 mb-3 d-flex justify-content-center">
          <div class="field-name rounded-circle">
            <p class="quantity">[17]</p>
            <p class="text">Giải trí</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-3 col-4 mb-3 d-flex justify-content-center">
          <div class="field-name rounded-circle">
            <p class="quantity">[17]</p>
            <p class="text">Giải trí</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-3 col-4 mb-3 d-flex justify-content-center">
          <div class="field-name rounded-circle">
            <p class="quantity">[17]</p>
            <p class="text">Giải trí</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-3 col-4 mb-3 d-flex justify-content-center">
          <div class="field-name rounded-circle">
            <p class="quantity">[17]</p>
            <p class="text">Giải trí</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-3 col-4 mb-3 d-flex justify-content-center">
          <div class="field-name rounded-circle">
            <p class="quantity">[17]</p>
            <p class="text">Giải trí</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require("@/assets/img/bg2.jpg"),
      responsive: false,
    };
  },
  methods: {
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
};
</script>

<style lang="scss" scoped>
.circle-with-text {
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  text-align: center;
  display: flex;
}
.field{
  padding-top: 24px;
}
.field h6{
  font-size: 15px;
  display: inline-block;

}
.field-name {
  background: #abebc6; /* fallback for old browsers */
  vertical-align: middle;
}
@media (max-width: 393.98px) {
  .field-name {
    width: 58px;
    height: 58px;
  }
  .field{
    padding-top: 2px;
  }
  .field h6{
  font-size: 8px;
  display: inline-block;
  
}
}
@media (min-width: 394px) and (max-width: 575.98px) {
  .field-name {
    width: 88px;
    height: 88px;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .field-name {
    width: 103px;
    height: 103px;
  }
  .field{
    padding-top: 12px;
  }
  .field h6{
    font-size: 14px;
  }
}
@media (min-width: 768px) {
  .field-name {
    width: 125px;
    height: 125px;
  }
}
</style>