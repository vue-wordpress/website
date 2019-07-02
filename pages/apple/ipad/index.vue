<template>
  <div
    class="wp-page apple__category"
  >
    <apple-category-header
      :slug="'apple-ipad-menu'"
    />
    <Sections
      :data="iphone"
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

</style>
