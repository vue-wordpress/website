<template>
  <div
    class="start wp-page"
  >
    <Sections
      :data="start"
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

@import 'sxcss';
@import '~/styles/themes/apple/main.scss';

.start {
  .column {
    > div {
      @include width(100%);
    }
  }
}

</style>
