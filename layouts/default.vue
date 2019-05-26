<template>
  <div>
    <base-menu
      slug="main-menu"
    />
    <div
      class="height--xxs"
    />
    <nuxt />
  </div>
</template>

<script>

import BaseMenu from 'vue-wp-json/components/Base/BaseMenu';

export default {
  components: {
    BaseMenu
  }
}
</script>
