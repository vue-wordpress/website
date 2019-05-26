<template>
  <div class="logo">
    <img
      src="/logo.png"
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
    }
  }
}
</script>

<style lang="scss">

@import 'hajime/core/mixins/mixins.scss';

.logo {
  @include width--100;
  @include flex;
  @include justify__content--center;

  img {
    @include object-fit--contain;
  }
}

</style>
