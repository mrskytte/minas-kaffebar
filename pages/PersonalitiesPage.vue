<template>
  <div class="personalities">
    <h1 class="page-headline">Minas Personalities</h1>
    <div class="swiper-container">
      <Swiper type="personalities" :data="personalities" />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import personalitiesPageFragment from '@/queries/personalitiesPageFragment'

export default {
  async asyncData({ $dato }) {
    const { data } = await $dato({
      query: gql`
        ${personalitiesPageFragment}
        query {
          personalitiesPage {
            ...PersonalitiesPage
          }
        }
      `,
    })
    return data.personalitiesPage
  },
}
</script>

<style lang="scss" scoped></style>
