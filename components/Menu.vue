<template>
  <div class="menu">
    <h2 class="menu-headline">{{ headline }}</h2>
    <div v-for="(menuItem, idx) in menuItems" :key="idx" class="menu-row">
      <p class="name">{{ menuItem.name }}</p>
      <p class="price">{{ menuItem.price }},-</p>
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
  computed: {
    headline() {
      let headline = ''
      this.data.menu.forEach((menu) => {
        if (menu.headline) {
          headline = menu.headline
        }
      })
      return headline
    },
    menuItems() {
      const menuItems = []
      this.data.menu.forEach((menu) => {
        if (menu.name) {
          menuItems.push(menu)
        }
      })
      return menuItems
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  background-color: $color-yellow;
  padding: 10px 20px;

  &-headline {
    text-align: center;
  }
  &-row {
    display: flex;
    justify-content: space-between;
    .name {
      font-family: $font-title;
      font-size: 20px;
    }
  }
}
</style>
