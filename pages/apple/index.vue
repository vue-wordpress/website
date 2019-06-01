<template>
  <div
    class="wp-page apple__home"
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
// // import AppleCategoryHeader from '~/components/UI/Header/AppleCategoryHeader'

export default {
  layout: 'apple',
  components: {
    // AppleCategoryHeader
  },
  mixins: [loadSections('apple', FetchHookTypes.AsyncData)]
}
</script>

<style lang="scss">

@import 'fantastic-css/main.scss';
@import '~/styles/themes/apple/main.scss';

.apple__home {
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
