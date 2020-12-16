<template>
  <div class="event-page">
    <h1 class="page-headline">Minas Events</h1>
    <div class="events">
      <Event v-for="(event, idx) in events" :key="idx" :event="event" />
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import eventPageFragment from '@/queries/eventPageFragment'

export default {
  async asyncData({ $dato }) {
    const { data } = await $dato({
      query: gql`
        ${eventPageFragment}
        query {
          eventPage {
            ...EventPage
          }
        }
      `,
    })
    return data.eventPage
  },
}
</script>

<style lang="scss" scoped>
.event-page {
  @include container();
}
.events {
  @include media('>phone') {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
