<template>
  <div
    class="home wp-page"
  >
    <Sections
      v-if="wpData"
      :data="wpData"
    />
  </div>
</template>

<script>

import Logo from '~/components/Logo.vue'
import loadSections from '@vue-wordpress/core/mixins/loadSections'
import { FetchHookTypes } from '@vue-wordpress/core/types'

export default {
  mixins: [loadSections('start', FetchHookTypes.AsyncData)],
  components: {
    Logo
  }
}
</script>

<style lang="scss">

@import 'fantastic-css/main.scss';
@import '~/styles/themes/apple/main.scss';

.home {
  .column {
    > div {
      @include width(100%);
    }
  }
}

</style>
