<template>
  <div
    class="start wp-page"
  >
    <Sections
      v-if="start"
      :data="start"
    />
  </div>
</template>

<script>

import Logo from '~/components/Logo.vue'
import wpData from '@vue-wordpress/core/mixins/wpData'
import { FetchHookTypes } from '@vue-wordpress/core/types'

export default {
  mixins: [wpData('start', FetchHookTypes.AsyncData)],
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
