<template>
  <div
    class="apple"
  >
    <apple-main-header />
    <nuxt />
    <apple-main-footer />
  </div>
</template>

<script>

import AppleMainHeader from '~/components/Apple/UI/Header/AppleMainHeader'
import AppleMainFooter from '~/components/Apple/UI/Footer/AppleMainFooter'

export default {
  components: {
    AppleMainHeader,
    AppleMainFooter
  }
}

</script>

<style lang="scss">

@import 'sxcss';

.apple {

  p, h1, h2, h3, h4, h5 {
    margin-bottom: initial !important;
  }

  .wp-page {
    // @include padding-top(2.75rem);

    p {
      @include line-height(1.33349);
      
      &.has-normal-font-size {
        @include font-size(22px);
      }
    }
  
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
      @include height(calc( #{map-deep-get($scale, proportion, xxs)} * .8 ));
      @include background-color(rgba(242,242,242,0.7));
    }
  
    .background-color--space-gray {
      background-color: map-get($color, space-gray);
    }
  }
}

</style>
