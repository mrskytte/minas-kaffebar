<template>
  <div class="personalities">
    <div class="image-wrapper">
      <img
        :src="data.image.responsiveImage.src"
        alt=""
        :srcset="data.image.responsiveImage.srcSet"
      />
    </div>
    <div class="text-content">
      <h2 class="headline">{{ data.name }}</h2>
      <div class="body" v-html="data.aboutText" />
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
}
</script>

<style lang="scss" scoped>
.personalities {
  width: 100%;
  background-color: $color-grey;
  padding: 20px 20px;
  .image-wrapper {
    width: 100%;
    padding-bottom: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      object-position: center;
    }
  }
  .headline {
    font-weight: 900;
    transform: rotate(-7deg) translateY(-10px);
    transform-origin: center;
    text-transform: capitalize;
    margin-bottom: 20px;
  }
  .body {
    width: 90%;
    margin: auto;
    text-align: center;
    line-height: 16px;
  }
}
</style>
