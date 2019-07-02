<template>
  <div
    class="wp-page apple__category"
  >
    <apple-category-header
      :slug="'apple-ipad-menu'"
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
