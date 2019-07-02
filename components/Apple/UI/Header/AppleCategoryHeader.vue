<template>
  <div
    class="apple__category__header"
  >
    <!-- <base-menu
      class="apple__category__header__menu"
      :slug="slug"
    /> -->
  </div>
</template>

<script>

import BaseMenu from '@vue-wordpress/core/components/Base/BaseMenu';

export default {
  components: {
    BaseMenu
  },
  props: {
    slug: {
      type: String,
      required: true,
      default: null
    }
  }
}
</script>

<style lang="scss">

@import 'sxcss';

@mixin apple__category__header {

  .apple__category__header{
    @include padding-y(1rem);
    @include background($color: rgba(242,242,242,0.7) !important);

    &__menu {
      @include flex;
      @include align-items(center);
      @include justify-content(center);
      // @include padding($padding-bottom: 1rem);
      
      > li{
        @include margin-right(calc( 1.1 * #{map-get($gap, ms)}));
        line-height: 1.96;
        &:last-child {
          margin-right: 0 !important;
        }

        &::before {
          height: 54px;
          @include flex($justify-content: center);
        }
        
        a {
          @include flex($direction: column, $justify-content: center, $align-items: center);
          @include font-size(11px);
          @include color(black);
          &:last-of-type {
            margin-right: 0;
          }
          &:hover {
            color: #0070c9;
            cursor: pointer;
            text-decoration: none !important;
          }
          
          &.new-product {
            &::after {
              content: 'New';
              font-size: 9px;
              line-height: 1.22226;
              font-weight: 400;
              letter-spacing: -.006em;
              color: #ef5602;
              @include position(absolute);
              transform: translateY(2.5rem);
            }
          }
        }
      }
    }
  }
}

@include apple__category__header;

</style>
