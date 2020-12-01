<template>
  <div>
        <div class="md-layout">
          <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
            <h2 class="text-center title">Work with us</h2>
            <h4 class="text-center description">
              Divide details about your product or agency work into parts.
            </h4>
            <form class="contact-form">
              <div class="md-layout">
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label>Your Name</label>
                    <md-input v-model="name" type="text"></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-size-50">
                  <md-field>
                    <label>Your Email</label>
                    <md-input v-model="email" type="email"></md-input>
                  </md-field>
                </div>
              </div>
              <md-field maxlength="5">
                <label>Your Message</label>
                <md-textarea v-model="message"></md-textarea>
              </md-field>
              <div class="md-layout">
                <div class="md-layout-item md-size-33 mx-auto text-center">
                  <md-button class="md-success">Send Message</md-button>
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