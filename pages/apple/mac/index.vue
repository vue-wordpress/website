<template>
  <div
    class="wp-page apple-page apple-page apple-mac"
  >
    <ul
      class="apple-mac__menu apple-product-menu"
    >
      <li
        class="apple-mac__menu__item"
        v-for="item in macMenu"
        :key="item.label"
      >
        <nuxt-link
          :to="item.link"
          class="apple-mac__menu__item__inner"
        >
          <img
            :src="item.icon"
            :alt="item.label"
            height="54px"
          >
          {{ item.label }}
          <span
            class="new-product"
            v-if="item.new"
          >
            New
          </span>
        </nuxt-link>
      </li>
    </ul>
    <Sections
      v-if="wpData"
      :data="wpData"
    />
  </div>
</template>

<script>

import Logo from '~/components/Logo.vue'
import loadSections from 'vue-wp-json/mixins/loadSections'
import { FetchHookTypes } from 'vue-wp-json/types'

export default {
  layout: 'apple',
  mixins: [loadSections('mac', FetchHookTypes.AsyncData)],
  components: {
    Logo
  },
  data () {
    return {
      macMenu: [
        {
          label: 'MacBook',
          icon: '/img/apple/mac/appleMacBook.svg',
          link: '/apple/mac/macbook',
          new: false
        },
        {
          label: 'MacBookAir',
          icon: '/img/apple/mac/appleMacBookAir.svg',
          link: '/apple/mac/macbook-air',
          new: false
        },
        {
          label: 'MacBookPro',
          icon: '/img/apple/mac/appleMacBookPro.svg',
          link: '/apple/mac/macbook-pro',
          new: true
        },
        {
          label: 'iMac',
          icon: '/img/apple/mac/appleiMac.svg',
          link: '/apple/mac/imac',
          new: true
        },
        {
          label: 'iMacPro',
          icon: '/img/apple/mac/appleiMacPro.svg',
          link: '/apple/mac/imac-pro',
          new: false
        },
        {
          label: 'MacPro',
          icon: '/img/apple/mac/appleMacPro.svg',
          link: '/apple/mac/mac-pro',
          new: false
        },
        {
          label: 'MacMini',
          icon: '/img/apple/mac/appleMacMini.svg',
          link: '/apple/mac/mac-mini',
          new: false
        },
        {
          label: 'Accessories',
          icon: '/img/apple/mac/appleMacAccessories.svg',
          link: '/apple/mac/accessories',
          new: false
        },
        {
          label: 'Mojave',
          icon: '/img/apple/mac/appleMacOSX.svg',
          link: '/apple/mac/mac-os',
          new: false
        },
        {
          label: 'Compare',
          icon: '/img/apple/mac/appleMacCompare.svg',
          link: '/apple/mac/compare',
          new: false
       }
      ]
    }
  }
}
</script>

<style lang="scss">

@import 'hajime/main.scss';
@import '~/styles/theme/main.scss';

.apple-mac {


  &__menu {
    @include flex;
    @include align-items(center);
    @include justify-content(center);

    &__item {
      @include margin-right(calc( 1.05 * #{$gap-ms} ));

      &__inner {
        @include flex;
        @include align-items(center);
        @include justify-content(center);
        @include font-size(11px);
        @include flex-direction(column);
        // @include transition($transition-ease-out-medium);
        &:last-of-type {
          margin-right: 0;
        }
        &:hover {
          color: #0070c9;
          cursor: pointer;
          text-decoration: none !important;
        }

        .new-product {
          font-size: 9px;
          line-height: 1.22226;
          font-weight: 400;
          letter-spacing: -.006em;
          color: #ef5602;
          @include position(absolute);
          transform: translateY(2.54rem);
        }
      }
    }
  }
}

</style>
