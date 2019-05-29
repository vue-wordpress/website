<template>
  <div
    class="wp-page test"
  >
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
  // layout: 'apple',
  mixins: [loadSections('test', FetchHookTypes.AsyncData)],
  components: {
    Logo
  }
}
</script>

<style lang="scss">

@import 'fantastic-css/main.scss';
@import '~/styles/themes/apple/main.scss';

</style>
