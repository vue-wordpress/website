<template>
  <header
    class="apple__header"
  >
    <div
      class="apple__header__inner"
    >
      <router-link
        :to="'/apple'"
      >
        <logo
          class="apple__header__logo"
          :height="'46px'"
          :image="'/img/apple/appleLogo.svg'"
        />
      </router-link>
      <base-menu
        class="apple__header__nav"
        slug="apple-header-main-menu"
      />
      <ul
        class="apple__header__icons"
      >
        <li>
          <router-link
            :to="'#'"
          >
            <img
              src="/img/apple/icons/navigation/appleSearchIcon.svg"
              alt="Search"
              width="16px"
              height="44px"
            >
          </router-link>
        </li>
        <li>
          <router-link
            :to="'#'"
          >
            <img
              src="/img/apple/icons/navigation/appleBagIcon.svg"
              alt="Search"
              width="14px"
              height="44px"
            >
          </router-link>
        </li>
      </ul>
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

.apple__header {
  @include background-color(rgba(45,45,45,0.98));
  @include width(100% !important);
  z-index: 999;

  &__inner {
    @include boxed($max-width: 980px);
    @include flex;
    @include justify-content(space-between);
    @include align-items(center);
    height: 2.75rem;
  }

  &__nav,
  &__icons {
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
      @include margin-right(calc( #{map-deep-get($scale, proportion, ml)} * 1.05 ));
      @include hover($hover-opacity: map-get($opacity, md));
      @include transition(all map-deep-get($transition, duration, xs) ease-out);
      &:last-of-type {
        margin-right: 0;
      }
      &:hover {

        > ul {
          @include flex;
        }
      }

      > a {
        @include height(100);
        @include flex;
        @include place-items(center);
        @include font-size(14px);
        line-height: -.01em;
        @include color(white);
        @include padding-bottom(1px);
        &.router-link-active {
          @include opacity(map-get($opacity, ml));
        }

      }
      > ul {
        display: none;
        @include position(absolute);
        transform: translateY(4rem);
        @include min-width(map-deep-get($scale, proportion, xxs));
        @include justify-content(center);
        @include padding(map-deep-get($scale, proportion, xs));
      }

    }
  }
}

</style>
