<template>
  <div
    class="wp-page apple__home"
  >
    <Sections
      v-if="apple"
      :data="apple"
    />
  </div>
</template>

<script>

import Logo from '~/components/Logo.vue'
import wpData from '@vue-wordpress/core/mixins/wpData'
import { FetchHookTypes } from '@vue-wordpress/core/types'

export default {
  layout: 'apple',
  components: {
    // AppleCategoryHeader
  },
  mixins: [wpData('apple', FetchHookTypes.AsyncData)]
}
</script>

<style lang="scss">

@import 'sxcss';
@import '~/styles/themes/apple/main.scss';

.apple__home {

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
