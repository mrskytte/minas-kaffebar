<template>
  <div class="menus">
    <h1 class="page-headline">Minas Menus</h1>
    <div class="swiper-container">
      <Swiper type="menus" :data="menus" />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import menuPageFragment from '@/queries/menuPageFragment'

export default {
  async asyncData({ $dato }) {
    const { data } = await $dato({
      query: gql`
        ${menuPageFragment}
        query {
          menuPage {
            ...MenuPage
          }
        }
      `,
    })
    return data.menuPage
  },
}
</script>

<style lang="scss" scoped>
.menus {
  @include container();
}
</style>
