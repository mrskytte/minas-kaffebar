<template>
  <div class="stopmotion-block">
    <div
      v-for="n in images.amount"
      :key="n"
      :class="{ hide: n !== currentImg }"
      :style="`background-image: url(${require('@/assets/stopmotion-bg/' +
        images.source +
        '/' +
        n +
        images.format)}`"
      class="image"
    ></div>
  </div>
</template>

<script>
import { loadImgs } from '@/utils.js'

export default {
  props: {
    images: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentImg: 1,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentImg = Math.floor(window.scrollY / 150)
      if (
        currentImg === this.currentImg ||
        currentImg > this.images.amount ||
        currentImg < 1
      ) {
        return
      }
      this.currentImg = currentImg
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>

<style lang="scss" scoped>
.image {
  width: 90%;
  padding-bottom: 70%;
  position: fixed;
  top: 10%;
  left: 5%;
  background-size: cover;
  background-position: center;
}

.hide {
  opacity: 0;
}
</style>
