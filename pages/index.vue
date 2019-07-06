<template>
  <div
    class="start wp-page"
  >
    <Sections
      v-if="home"
      :data="home"
    />
  </div>
</template>

<script>

import Logo from '~/components/Logo.vue'
import wpData from '@vue-wordpress/core/mixins/wpData'
import { FetchHookTypes } from '@vue-wordpress/core/types'

export default {
  mixins: [wpData('home', FetchHookTypes.AsyncData)],
  components: {
    Logo
  }
}
</script>

<style lang="scss">

// @import 'sxcss';

</style>
