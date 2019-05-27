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
          link: '/apple/mac/macbook'
        },
        {
          label: 'MacBookAir',
          icon: '/img/apple/mac/appleMacBookAir.svg',
          link: '/apple/mac/macbook-air'
        },
        {
          label: 'MacBookPro',
          icon: '/img/apple/mac/appleMacBookPro.svg',
          link: '/apple/mac/macbook-pro'
        },
        {
          label: 'iMac',
          icon: '/img/apple/mac/appleiMac.svg',
          link: '/apple/mac/imac'
        },
        {
          label: 'iMacPro',
          icon: '/img/apple/mac/appleiMacPro.svg',
          link: '/apple/mac/imac-pro'
        },
        {
          label: 'MacPro',
          icon: '/img/apple/mac/appleMacPro.svg',
          link: '/apple/mac/mac-pro'
        },
        {
          label: 'MacMini',
          icon: '/img/apple/mac/appleMacMini.svg',
          link: '/apple/mac/mac-mini'
        },
        {
          label: 'Accessories',
          icon: '/img/apple/mac/appleMacAccessories.svg',
          link: '/apple/mac/accessories'
        },
        {
          label: 'Mojave',
          icon: '/img/apple/mac/appleMacOSX.svg',
          link: '/apple/mac/mac-os'
        },
        {
          label: 'Compare',
          icon: '/img/apple/mac/appleMacCompare.svg',
          link: '/apple/mac/compare'
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
      }
    }
  }
}

</style>
