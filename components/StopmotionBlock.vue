<template>
  <div ref="stopmotionBlock" class="stopmotion-block">
    <div class="text-box left" v-html="data.leftText"></div>
    <div class="text-box right" v-html="data.rightText"></div>
    <div class="images-wrapper">
      <div
        v-for="(image, idx) of data.images"
        :key="idx"
        :class="{ hide: idx !== currentImg }"
        class="image-container"
      >
        <img
          class="image"
          alt="Stop motion frame"
          :src="image.responsiveImage.src"
          :srcset="image.responsiveImage.srcSet"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      currentImg: 0,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const blockTop = this.$refs.stopmotionBlock.offsetTop
      const scrollY = window.scrollY
      if (blockTop > scrollY) {
        return
      }
      const changeImgEvery = (window.innerHeight * 4) / this.data.images.length
      const currentImg = Math.floor((scrollY - blockTop) / changeImgEvery)
      if (
        currentImg === this.currentImg ||
        currentImg > this.data.images.length - 1 ||
        currentImg < 0
      ) {
        return
      }
      this.currentImg = currentImg
    },
  },
}
</script>

<style lang="scss" scoped>
.stopmotion-block {
  position: relative;
  height: 500vh;
  margin-bottom: 60px;
}
.text-box {
  height: 250vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  top: 0;
  width: 60%;
  @include media('>phone') {
    font-size: 20px;
  }
  @include media('>tablet') {
    font-size: 24px;
  }
  ::v-deep {
    p {
      width: fit-content;
      display: block;
      background-color: $color-white;
      padding: 8px 8px 8px 8px;
      margin-bottom: 8px;
    }
  }
  &.right {
    text-align: right;
    right: 0;
    top: 50%;
    align-items: flex-end;
    ::v-deep {
      p {
        padding: 8px 8px 8px 8px;
      }
    }
  }
}
.images-wrapper {
  position: sticky;
  top: $nav-height;
  height: calc(100vh - 110px);
}
.image-container {
  width: 100%;
  height: calc(100vh - 110px);
  position: absolute;
  top: 0;
  background-size: cover;
  background-position: center;
  .image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
  }
}

.hide {
  opacity: 0;
}
</style>
