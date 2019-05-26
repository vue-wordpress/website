<template>
  <header
    class="basic-header"
  >
    <div
      class="basic-header__inner"
    >
      <logo
        class="basic-header__logo"
        :height="'30px'"
      />
      <base-menu
        class="basic-header__nav"
        slug="main-menu"
      />
    </div>
  </header>
</template>

<script>

import Logo from '~/components/Logo';
import BaseMenu from 'vue-wp-json/components/Base/BaseMenu';

export default {
  components: {
    Logo,
    BaseMenu
  }
}

</script>

<style lang="scss">

@import 'hajime/main.scss';

.basic-header {
  @include background__color--extra-light-gray;
  border-bottom: 1px solid #f1f1f1;

  &__inner {
    @include boxed;
    @include flex;
    @include justify__content--space-between;
    @include align__items--center;
    height: 4rem;
  }

  &__nav {
    @include height--100;
    @include flex;
    @include align__items--center;
    width: auto;

    > li {
      @include height--100;
      @include flex;
      @include place__content--center;
      @include flex__direction--column;
      @include align__items--center;
      @include margin__right--sm;
      &:hover {

        > ul {
          @include flex;
        }
      }

      > a {
        @include height--100;
        @include flex;
        @include place__items--center;
        @include font__weight--semibold;
        @include font__size--sm;
      }

      > ul {
        display: none;
        @include position--absolute;
        transform: translateY(4rem);
        @include min-width--xxs;
        @include justify__content--center;
        @include padding__y--xs;
      }

    }
  }
}

</style>
