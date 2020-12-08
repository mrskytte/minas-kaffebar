<template>
  <button
    :class="{ mousedown }"
    class="btn"
    @mousedown="mousedown = true"
    @touchstart="mousedown = true"
    @mouseup="mousedown = false"
    @touchend="mousedown = false"
    @click="$emit('click')"
  >
    <span class="btn-text">{{ text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    text: { type: String, default: 'Reserve' },
  },
  data() {
    return {
      mousedown: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.btn {
  @include button-reset();
  position: relative;
  font-size: 20px;
  padding: 12px 24px;
  border: 1px solid $color-black;
  &-text {
    display: inline-block;
    transform: translate(0.3rem, 0.3rem);
  }
  &:before {
    content: '';
    position: absolute;
    border: 1px solid $color-black;
    width: 100%;
    height: 100%;
    left: 0.4rem;
    top: 0.4rem;
  }
  &.mousedown {
    background-color: rgba(#fff, 0.5);
    &:before {
      background-color: rgba(#fff, 0.5);
    }
  }
}
</style>
