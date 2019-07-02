<template>
  <div
    class="wp-page apple__home"
  >
    <Sections
      :data="apple"
    />
  </div>
</template>

<script>

import Logo from '~/components/Logo.vue'
import loadSections from '@vue-wordpress/core/mixins/loadSections'
import { FetchHookTypes } from '@vue-wordpress/core/types'

export default {
  mixins: [loadSections('apple', FetchHookTypes.AsyncData)],
  layout: 'apple'
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
