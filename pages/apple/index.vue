<template>
  <div
    class="wp-page apple-home"
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
import AppleHeader from '~/components/UI/Header/AppleHeader'

export default {
  layout: 'apple',
  components: {
    AppleHeader
  },
  mixins: [loadSections('apple', FetchHookTypes.AsyncData)]
}
</script>

<style lang="scss">

@import 'hajime/main.scss';
@import '~/styles/theme/main.scss';

.apple-home {
  @include padding-top(2.75rem);

  .wp-block-spacer {
    margin-top: -5px;
    margin-bottom: -5px;
  }

  a {
    &:hover {
      text-decoration: underline;
    }
  }
}

</style>
