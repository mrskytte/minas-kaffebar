<template>
  <nav class="mobile-nav">
    <div class="nav-wrap">
      <nuxt-link class="nav-icon" :to="'/'"> </nuxt-link>
      <button
        :class="{ open: isMenuOpen }"
        class="menu"
        @click="isMenuOpen = !isMenuOpen"
      >
        <div class="menu-line"></div>
        <div class="menu-line"></div>
        <div class="menu-line"></div>
      </button>
    </div>

    <transition name="fade">
      <div v-show="isMenuOpen" class="open-menu">
        <ul class="nav-list">
          <li class="nav-items" @click="isMenuOpen = !isMenuOpen">
            <nuxt-link :to="'/'">Home</nuxt-link>
          </li>
          <li class="nav-items" @click="isMenuOpen = !isMenuOpen">
            <nuxt-link :to="'/events'">Events</nuxt-link>
          </li>
          <li class="nav-items" @click="isMenuOpen = !isMenuOpen">
            <nuxt-link :to="'/menus'">Menus</nuxt-link>
          </li>
          <li class="nav-items" @click="isMenuOpen = !isMenuOpen">
            <nuxt-link :to="'/personalities'">Personalities</nuxt-link>
          </li>
          <li class="nav-items" @click="isMenuOpen = !isMenuOpen">
            <nuxt-link :to="'/contact'">Contact</nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.mobile-nav {
  width: 100vw;
  z-index: 5;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: $nav-height;
  background-color: $color-white;
  .nav-wrap {
    position: relative;
    z-index: 6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(50% + 30px);
    .nav-icon {
      display: block;
      height: 60px;
      width: 60px;
      background-image: url('/minas-kaffebar/favicon.svg');
    }
    .menu {
      @include button-reset();
      height: 18px;
      width: 46px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 40px;
      &-line {
        width: 100%;
        height: 4px;
        background-color: $color-black;
        transition: transform 0.3s;
        &:last-of-type {
          width: 80%;
          align-self: flex-end;
        }
      }
      &.open {
        .menu-line {
          &:last-of-type {
            transform: translateY(-7px);
          }
          &:first-of-type {
            transform: translateY(7px);
          }
        }
      }
    }
  }
  .open-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: $color-white;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    .nav-items {
      list-style: none;
      padding: 20px 0;
      text-align: right;
      a {
        font-family: $font-title;
        font-size: 40px;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s, transform 0.5s;
}
.fade-enter,
.fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
