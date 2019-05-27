<template>
  <div>
    <apple-header />
    <nuxt />
  </div>
</template>

<script>

import AppleHeader from '~/components/UI/Header/AppleHeader'

export default {
  components: {
    AppleHeader
  }
}

</script>

<style lang="scss">

@import 'hajime';

p, h1, h2, h3, h4, h5 {
  margin-bottom: initial !important;
}

.apple-page {
  @include padding-top(2.75rem);

  .wp-block-spacer {
    margin-top: -5px;
    margin-bottom: -5px;
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }

  .apple-product-menu {
    @include height(calc( #{$height-xxs} * .8 ));
    @include background-color(rgba(242,242,242,0.7));
  }

  .background-color--space-gray {
    background-color: #121217;
  }
}

</style>
