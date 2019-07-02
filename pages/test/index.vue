<template>
  <div
    class="wp-page test"
  >
    <Sections
      v-if="test"
      :data="test"
    />
  </div>
</template>

<script>

import Logo from '~/components/Logo.vue'
import wpData from '@vue-wordpress/core/mixins/wpData'
import { FetchHookTypes } from '@vue-wordpress/core/types'

export default {
  // layout: 'apple',
  mixins: [wpData('test', FetchHookTypes.AsyncData)],
  components: {
    Logo
  }
}
</script>

<style lang="scss">

@import 'sxcss';
@import '~/styles/themes/apple/main.scss';

</style>
