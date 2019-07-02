<template>
  <div
    class="wp-page apple__category"
  >
    <apple-category-header
      :menu="macMenu"
    />
    <Sections
      v-if="mac"
      :data="mac"
    />
  </div>
</template>

<script>

import Logo from '~/components/Logo.vue'
import AppleCategoryHeader from '~/components/Apple/UI/Header/AppleCategoryHeader'

import wpData from '@vue-wordpress/core/mixins/wpData'
import { FetchHookTypes } from '@vue-wordpress/core/types'

export default {
  layout: 'apple',
  mixins: [wpData('mac', FetchHookTypes.AsyncData)],
  components: {
    Logo,
    AppleCategoryHeader
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

@import 'fantastic-css/main.scss';
@import '~/styles/themes/apple/main.scss';

</style>
