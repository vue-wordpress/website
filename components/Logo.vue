<template>
  <div class="logo">
    <img
      :src="image"
      alt="Vue Wordpress"
      :width="width"
      :height="height"
    >
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: false,
      default: 'auto'
    },
    height: {
      type: String,
      required: false,
      default: '120px'
    },
    image: {
      type: String,
      required: true,
      default: '/img/logo.png'
    }
  }
}
</script>

<style lang="scss">

@import 'fantastic-css';

.logo {
  @include flex;
  @include justify-content(center);

  img {
    @include object-fit(contain);
  }
}

</style>
