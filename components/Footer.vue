<template>
  <div class="footer">
    <p class="footer-text">Come down for some hygge</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  padding: 10px 0;
  background-color: $color-yellow;
  width: 100vw;
  text-align: center;
  &-text {
    font-family: $font-title;
    font-size: 20px;
    line-height: 20px;
    margin: 0;
  }
}
</style>
