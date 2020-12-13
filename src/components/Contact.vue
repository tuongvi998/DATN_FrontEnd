<template>
  <div>
        <div class="md-layout">
          <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
            <h2 class="text-center title">Liên hệ với chúng tôi</h2>
            <h4 class="text-center description">
              Chia sẻ với chúng tôi về những điều bạn quan tâm
            </h4>
            <form class="contact-form">
              <div class="md-layout">
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label>Tên</label>
                    <md-input v-model="name" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label>Email</label>
                    <md-input v-model="email" type="email"></md-input>
                  </md-field>
                </div>
              </div>
              <md-field maxlength="5">
                <label>Lời nhắn</label>
                <md-textarea v-model="message"></md-textarea>
              </md-field>
              <div class="md-layout">
                <div class="md-layout-item md-size-33 mx-auto text-center">
                  <md-button class="md-success">Gửi</md-button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      
      email: null,
      name: null,
      message: null,
      helpinghand: require("@/assets/img/helping-hand.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>