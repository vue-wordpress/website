<template>
  <div>
    <apple-header />
    <nuxt />
  </div>
</template>

<script>

import AppleHeader from '~/components/UI/Header/AppleHeader'

export default {
  components: {
    AppleHeader
  }
}

</script>

<style lang="scss">

p {
  margin-bottom: initial;
}

</style>
