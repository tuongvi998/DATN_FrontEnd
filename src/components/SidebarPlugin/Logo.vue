<template>
  <div class="logo">
    <a href="#" class="simple-text logo-mini">
      <div class="logo-img">
        <img :src="imgLogo" alt="" />
      </div>
    </a>
    <a target="_blank" class="simple-text logo-normal">
      {{ title }}
    </a>
  </div>
</template>

<script>
export default {
    name: 'logo',
    props: {
            imgLogo: {
      type: String
    },
    title: {
      type: String
    },
    }
};
</script>

<style scoped>
</style>