<template>
  <div ref="swiper" class="swiper-container">
    <div v-if="type === 'menus'" class="swiper-wrapper">
      <div v-for="(menu, idx) in data" :key="idx" class="swiper-slide">
        <Menu :data="menu" />
      </div>
    </div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([Navigation])

export default {
  props: {
    type: { type: String, required: true },
    data: { type: Array, required: true },
  },
  data() {
    return {
      swiper: null,
    }
  },
  mounted() {
    this.swiper = new Swiper(this.$refs.swiper, {
      // Optional parameters
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: -25,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.swiper-container {
  overflow: visible;
}
.swiper-slide {
  width: 70%;
  transition: transform 0.7s, box-shadow 0.7s;
  box-shadow: 1px 4px 2px 2px rgba(black, 0.1);
  &-active {
    transform: translateY(-10%);
    z-index: 1000;
    box-shadow: 1px 4px 6px 4px rgba(black, 0.2);
  }
}
</style>
