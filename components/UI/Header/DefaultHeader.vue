<template>
  <header
    class="basic-header"
  >
    <div
      class="basic-header__inner"
    >
      <router-link
        :to="'/'"
      >
        <logo
          class="basic-header__logo"
          :height="'30px'"
        />
      </router-link>
      <!-- <base-menu
        class="basic-header__nav"
        slug="main-menu"
      /> -->
    </div>
  </header>
</template>

<script>

import Logo from '~/components/Logo';
import BaseMenu from '@vue-wordpress/core/components/Base/BaseMenu';

export default {
  components: {
    Logo,
    BaseMenu
  }
}

</script>

<style lang="scss">

@import 'sxcss';

.basic-header {
  @include background-color(map-get($color, extra-light-gray));
  border-bottom: 1px solid #f1f1f1;

  &__inner {
    @include boxed;
    @include flex;
    @include justify-content(space-between);
    @include align-items(center);
    height: 4rem;
  }

  &__nav {
    @include height(100);
    @include flex;
    @include align-items(center);
    width: auto;

    > li {
      @include height(100);
      @include flex;
      @include place-content(center);
      @include flex-direction(column);
      @include align-items(center);
      @include margin-right(map-deep-get($scale, proportion, sm));
      &:hover {

        > ul {
          @include flex;
        }
      }

      > a {
        @include height(100);
        @include flex;
        @include place-items(center);
        @include font-weight(600);
        @include font-size(map-deep-get($font, size, sm));
      }

      > ul {
        display: none;
        @include position(absolute);
        transform: translateY(4rem);
        @include min-width(map-deep-get($scale, proportion, xxs));
        @include justify-content(center);
        @include padding-y(map-deep-get($scale, proportion, xs));
      }
    }
  }
}

</style>
