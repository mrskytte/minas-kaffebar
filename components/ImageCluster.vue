<template>
  <div class="image-cluster">
    <div class="cluster first">
      <div
        v-for="(image, idx) of images.slice(6)"
        :key="idx"
        class="polaroid-wrap"
        :id="idx"
      >
        <div class="polaroid">
          <div class="image-wrap">
            <img
              class="image"
              alt="Experiences from Minas"
              :src="image.responsiveImage.src"
              :srcset="image.responsiveImage.srcSet"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="cluster second">
      <div
        v-for="(image, idx) of images.slice(5, 11)"
        :key="idx"
        class="polaroid-wrap"
      >
        <div class="polaroid">
          <div class="image-wrap">
            <img
              class="image"
              alt="Experiences from Minas"
              :src="image.responsiveImage.src"
              :srcset="image.responsiveImage.srcSet"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.image-cluster {
  position: relative;
  margin-top: 100px;

  .cluster {
    position: relative;
    height: 400px;
    margin-top: 30px;

    @include media('>phone') {
      height: 600px;
      &.second {
        padding-bottom: 130px;
      }
    }
    @include media('>tablet') {
      height: 700px;
      .polaroid {
        left: 5%;
      }
      &.second .polaroid {
        left: 15%;
      }
    }
  }
}
.polaroid-wrap {
  &:nth-child(1) .polaroid {
    z-index: 1;
    transform: translateX(25%) rotate(-15deg);
    @include media('>phone') {
      transform: translateX(40%) rotate(-15deg);
    }
    @include media('>tablet') {
      width: 210px;
      height: 245px;
    }
  }
  &:nth-child(2) .polaroid {
    z-index: 2;
    transform: translateX(130%) rotate(18deg);
    @include media('>phone') {
      transform: translateX(230%) rotate(18deg);
    }
    @include media('>tablet') {
      width: 210px;
      height: 245px;
    }
  }
  &:nth-child(3) .polaroid {
    z-index: 1;
    transform: translate(80%, 80%);
    @include media('>phone') {
      transform: translate(120%, 80%);
    }
    @include media('>tablet') {
      width: 210px;
      height: 245px;
    }
  }
  &:nth-child(4) .polaroid {
    z-index: 2;
    transform: translate(185%, 95%) rotate(-25deg);
    @include media('>phone') {
      transform: translate(285%, 95%) rotate(-25deg);
    }
    @include media('>tablet') {
      width: 210px;
      height: 245px;
    }
  }
  &:nth-child(5) .polaroid {
    z-index: 1;
    transform: translate(30%, 160%) rotate(-15deg);
    @include media('>tablet') {
      width: 210px;
      height: 245px;
    }
  }
  &:nth-child(6) .polaroid {
    z-index: 2;
    transform: translate(160%, 182%);
    @include media('>phone') {
      transform: translate(200%, 182%);
    }
    @include media('>tablet') {
      width: 210px;
      height: 245px;
    }
  }
}
.polaroid {
  background-color: $color-white;
  border: 0.5px solid rgba($color-black, 0.1);
  padding: 6px 6px 20px 6px;
  width: 120px;
  height: 140px;
  left: 0;
  position: absolute;
  box-shadow: 2px 2px 4px 1px rgba($color-black, 0.2);
  @include media('>phone') {
    width: 180px;
    height: 210px;
  }
  @include media('>tablet') {
    width: 210px;
    height: 245px;
  }

  .image-wrap {
    width: 100%;
    padding-top: 100%;
    position: relative;
  }
  .image {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: center;
  }
}
</style>
