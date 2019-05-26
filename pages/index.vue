<template>
  <div
    class="home"
  >
    <section class="home__hero">
      <logo/>
      <h1 class="home__hero__heading">
        Vue Wordpress
      </h1>
      <div class="home__hero__actions">
        <button
        >
          <a href="https://docs.vuewordpress.io">
            Go to Documentation
          </a>
        </button>
      </div>
    </section>
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

@import 'hajime/core/mixins/mixins.scss';
@import '~/styles/theme/main.scss';

.home {

  &__hero {
    @include height--100vh;
    @include grid;
    @include place__content--center;

    &__heading {
      @include text__align--center;
      @include margin__top--ml;
      @include font__size--xxl;
    }
    
    &__actions {
      @include margin__top--lg;
      @include text__align--center;
      button {
        a {
          @include btn;
          background-color: #39ae77 !important;
        }
      }
    }
  }
}

</style>
