<template>
  <div
    id="mac-page"
    class="wp-page apple__category"
  >
    <apple-category-header
      :slug="'apple-mac-menu'"
    />
    <Sections
      :data="mac"
    />
  </div>
</template>

<script>

import Logo from '~/components/Logo.vue'
import AppleCategoryHeader from '~/components/Apple/UI/Header/AppleCategoryHeader'

import loadSections from '@vue-wordpress/core/mixins/loadSections'
import { FetchHookTypes } from '@vue-wordpress/core/types'

export default {
  mixins: [loadSections('mac', FetchHookTypes.AsyncData)],
  layout: 'apple',
  name: 'AppleMac',
  components: {
    Logo,
    AppleCategoryHeader
  }
}
</script>

<style lang="scss">

@import 'sxcss';
@import '~/styles/themes/apple/main.scss';

#mac-page {
  .apple__category__header{

    &__menu {
      
      > li{
        &:nth-child(1) {
          &::before {
            content: url('/img/apple/icons/products/appleMacBook_icon.svg');
          }
        }
        &:nth-child(2) {
          &::before {
            content: url('/img/apple/icons/products/appleMacBookAir_icon.svg');
          }
        }
        &:nth-child(3) {
          &::before {
            content: url('/img/apple/icons/products/appleMacBookPro_icon.svg');
          }
        }
        &:nth-child(4) {
          &::before {
            content: url('/img/apple/icons/products/appleiMac_icon.svg');
          }
        }
        &:nth-child(5) {
          &::before {
            content: url('/img/apple/icons/products/appleiMacPro_icon.svg');
          }
        }
        &:nth-child(6) {
          &::before {
            content: url('/img/apple/icons/products/appleMacPro_icon.svg');
          }
        }
        &:nth-child(7) {
          &::before {
            content: url('/img/apple/icons/products/appleMacMini_icon.svg');
          }
        }
        &:nth-child(8) {
          &::before {
            content: url('/img/apple/icons/products/appleMacCompare_icon.svg');
          }
        }
        &:nth-child(9) {
          &::before {
            content: url('/img/apple/icons/products/appleProDisplayXDR_icon.svg');
          }
        }
        &:nth-child(10) {
          &::before {
            content: url('/img/apple/icons/products/appleMacAccessories_icon.svg');
          }
        }
        &:nth-child(11) {
          &::before {
            content: url('/img/apple/icons/products/appleMacOSX_icon.svg');
          }
        }
      }
    }
  }
}
</style>
