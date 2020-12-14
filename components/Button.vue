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
  transition: transform 0.3s;
  &-text {
    display: inline-block;
    transform: translate(0.3rem, 0.3rem);
    transition: transform 0.3s;
  }
  &:before {
    content: '';
    position: absolute;
    border: 1px solid $color-black;
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    left: 0;
    top: 0;
    transform: translate(0.6rem, 0.6rem);
    transition: transform 0.3s;
  }
  &.mousedown,
  &:hover {
    transform: translate(0.3rem, 0.3rem);
    background-color: rgba(#fff, 0.1);
    .btn-text {
      transform: translate(0, 0);
    }
    &:before {
      transform: translate(0, 0);
      background-color: rgba(#fff, 0.1);
    }
  }
}
</style>
