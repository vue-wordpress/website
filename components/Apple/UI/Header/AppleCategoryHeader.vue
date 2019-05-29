<template>
  <div
    class="apple__category__header"
  >
    <ul
      class="apple__category__header__menu"
    >
      <li
        class="apple__category__header__menu__item"
        v-for="item in menu"
        :key="item.label"
      >
        <nuxt-link
          :to="item.link"
          class="apple__category__header__menu__item__inner"
        >
          <img
            :src="item.icon"
            :alt="item.label"
            height="54px"
          >
          {{ item.label }}
          <span
            class="new-product"
            v-if="item.new"
          >
            New
          </span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      required: true,
      default: null
    }
  }
}
</script>

<style lang="scss">

@import 'fantastic-css';

@mixin apple__category__header {

  .apple__category__header{

    &__menu {
      @include flex;
      @include align-items(center);
      @include justify-content(center);
      
      &__item {
        @include margin-right(calc( 1.05 * #{map-get($gap, ms)} ));
        
        &__inner {
          @include flex;
          @include align-items(center);
          @include justify-content(center);
          @include font-size(11px);
          @include flex-direction(column);
          &:last-of-type {
            margin-right: 0;
          }
          &:hover {
            color: #0070c9;
            cursor: pointer;
            text-decoration: none !important;
          }
          
          .new-product {
            font-size: 9px;
            line-height: 1.22226;
            font-weight: 400;
            letter-spacing: -.006em;
            color: #ef5602;
            @include position(absolute);
            transform: translateY(2.54rem);
          }
        }
      }
    }
  }
}

@include apple__category__header;

</style>
