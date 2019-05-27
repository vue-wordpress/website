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
import loadSections from 'vue-wp-json/mixins/loadSections'
import { FetchHookTypes } from 'vue-wp-json/types'

export default {
  mixins: [loadSections(FetchHookTypes.AsyncData)],
  components: {
    Logo
  }
}
</script>

<style lang="scss">

@import 'hajime/main.scss';
@import '~/styles/theme/main.scss';

.home {
  .column {
    > div {
      @include width(100%);
    }
  }
}

</style>
