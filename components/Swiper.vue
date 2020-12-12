<template>
  <div ref="swiper" class="swiper-container">
    <div v-if="type === 'menus'" class="swiper-wrapper">
      <div v-for="(menu, idx) in data" :key="idx" class="swiper-slide">
        <Menu :data="menu" />
      </div>
    </div>
    <div v-if="type === 'personalities'" class="swiper-wrapper">
      <div
        v-for="(personality, idx) in data"
        :key="idx"
        class="swiper-slide personality"
      >
        <Personality :data="personality" />
      </div>
    </div>

    <div class="swiper-button-prev"><LeftArrow /></div>
    <div class="swiper-button-next"><RightArrow /></div>
  </div>
</template>

<script>
import Swiper, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import LeftArrow from '@/assets/icons/left-arrow.svg?inline'
import RightArrow from '@/assets/icons/right-arrow.svg?inline'

Swiper.use([Navigation])

export default {
  components: {
    LeftArrow,
    RightArrow,
  },
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
      spaceBetween: this.type === 'personalities' ? -50 : -25,

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
  &.personality {
    width: 85%;
  }
  @include media('>phone') {
    width: 50%;
    &.personality {
      width: 50%;
    }
  }
  @include media('>tablet') {
    width: 40%;
    &.personality {
      width: 40%;
    }
  }
  &-active {
    transform: translateY(-10%);
    z-index: 1000;
    box-shadow: 1px 4px 6px 4px rgba(black, 0.2);
  }
}
.swiper-button-prev::after,
.swiper-container-rtl,
.swiper-button-next::after {
  content: none;
}

.swiper-button-prev,
.swiper-button-next {
  color: $color-black;
  svg {
    background-color: white;
    border-radius: 50%;
  }
}
</style>
