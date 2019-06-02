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

@import '/Users/aleksandergrygier/git/fantastic-css/fantastic-css';
// @import 'fantastic-css';
@import '~/styles/themes/apple/main.scss';

.home {

  &__logo {
    @include media('<=sm') {
      @include width(3 * map-get($size, md));
      @include margin-x(auto);

      img {
        @include object-fit(contain);
      }
    }
  }

  &__heading {
    @include media('<=ms') {
      @include font-size(map-deep-get($font, size, md) !important);
    }
    @include media('<=sm') {
      @include font-size(map-deep-get($font, size, ms) !important);
    }
  }

  .column {

    > div {
      @include width(90% !important);
      @include margin-x(auto);

      .has-2-columns {
        @include media('<=md') {
          @include grid-layout(1, 1fr, map-get($gap, ms));
          @include max-width(90vw);
        }
      }
    }
  }
}

</style>
