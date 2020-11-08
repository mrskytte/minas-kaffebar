<template>
  <div class="stopmotion-block">
    <div class="image" v-html="imageArray[currentImg]"></div>
  </div>
</template>

<script>
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
      imageArray: [],
    }
  },
  mounted() {
    this.loadImgs()
    window.addEventListener('scroll', this.onScroll)
  },
  async mounted() {
    let imgs = []
    for (let i = 1; i <= images.amount; i++) {
      imgs.pushrequire(
        '@/assets/stopmotion-bg/' +
          this.images.source +
          '/' +
          (i + 1) +
          this.images.format
      )
    }

    await loadImgs(imgs)
  },
  methods: {
    // loadImgs() {
    //   for (let i = 0; i < this.images.amount; i++) {
    //     const image = new Image()
    //     image.src = require('@/assets/stopmotion-bg/' +
    //       this.images.source +
    //       '/' +
    //       (i + 1) +
    //       this.images.format)
    //     console.log('☝', image)
    //     this.imageArray.push(image)
    //   }
    // },
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
</style>
