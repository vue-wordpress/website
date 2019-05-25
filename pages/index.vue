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
        <button>
          <a href="https://docs.vuewordpress.io">
            Go to Documentation
          </a>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">

@import '~/styles/hajime/core/mixins/mixins.scss';
@import '~/styles/theme/main.scss';

.home {

  &__hero {
    @include height--100vh;
    @include grid;
    @include place__content--center;

    &__heading {
      @include text__align--center;
      @include margin__top--lg;
      @include font__size--xxl;
    }
    
    &__actions {
      @include margin__top--lg;
      @include text__align--center;
      button {
        @include btn;
      }
    }
  }
}

</style>
