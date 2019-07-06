<template>
  <footer
    class="main-footer"
  >
    <div
      class="main-footer__content"
    >
      <base-menu
        class="main-footer__menu"
        slug="apple-footer-main-menu"
      />
      <div
        class="main-footer__disclaimer"
      >
        <p>
          More ways to shop: <a href="#">Find an Apple Store</a> or other <a href="#">retailer</a> near you. Or call 1-800-MY-APPLE.
        </p>
      </div>
      <div
        class="main-footer__bottom-credits"
      >
        <p
          class="main-footer__bottom-credits__copyright-text"
        >
          Copyright © 2019 Apple Inc. All rights reserved.
        </p>
        <base-menu
          class="main-footer__bottom-credits__help-menu"
          slug="apple-help-menu"
        />
        <a
          class="main-footer__bottom-credits__country-selection"
          href="#"
        >
          <img
            src="/img/apple/icons/navigation/usFlag_icon.png"
          >
          United States
        </a>
      </div>
    </div>
  </footer>
</template>

<script>

import BaseMenu from '@vue-wordpress/core/components/Base/BaseMenu';

export default {
  components: {
    BaseMenu
  }
}

</script>

<style lang="scss">

@import 'sxcss';

.main-footer {
  @include background($color: #f2f2f2);
  @include padding-y(1rem);

  &__content {
    @include boxed($max-width: 980px);
    * {
      @include font-size(12px);
    }
  }

  &__menu {
    @include flex(
      $direction: column,
      $wrap: wrap,
      $align-items: flex-start
    );
    max-height:24rem;

    > li {
      width: 20%;
      height: auto;
      min-height: 10%;
      margin-bottom: 1rem;

      a {
        @include color(black !important);
      }

      > a {
        @include font-weight(bold);
        @include opacity(.7);
      }
    }
  }

  &__disclaimer {
    @include padding-y(.5rem);
    @include border($bottom: true, $width: 1px, $color: #d6d6d6);
  }

  &__bottom-credits {
    @include flex($justify-content: space-between, $align-items: center);
    @include padding-y(.3rem);

    a {
      @include color(black !important);
    }

    &__copyright-text {
      @include opacity(.6);
    }

    &__help-menu {
      @include flex($justify-content: center, $align-items: center);

      li {

        a {
          @include padding-x(.6rem);
          @include border($right: true, $width: 1px, $color: #d6d6d6);
        }

        &:last-child a {
          border: none !important; // @include reset($properties) would be ultra cool
        }
      }
    }

    &__country-selection  {
      @include flex($align-items: center);
      margin-left: 8rem;

      img {
        height: .9rem;
        margin-right: .5rem;
      }
    }
  }
}

</style>
