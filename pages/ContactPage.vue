<template>
  <div class="contact">
    <h1 class="page-headline">Minas Contacts</h1>
    <h4 class="contact-info mail">
      Write us on <a :href="'mailto:' + eMail">{{ eMail }}</a>
    </h4>
    <h4 class="contact-info phone">
      Call us on <a :href="'tel:' + phone">{{ phone }}</a>
    </h4>
    <h4 class="map-headline">Find us at</h4>
    <div class="map-wrapper">
      <div class="map">
        <GMap
          ref="gMap"
          :center="center"
          :options="{ fullscreenControl: false }"
          :zoom="15"
        >
          <GMapMarker :position="center"> </GMapMarker>
        </GMap>
      </div>
    </div>
    <div class="some">
      <h3>Visit us on</h3>
      <div class="links">
        <a :href="instagram"><Instagram /></a
        ><a :href="facebook"><Facebook /></a>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import contactFragment from '@/queries/contactFragment'
import Facebook from '@/assets/icons/facebook.svg?inline'
import Instagram from '@/assets/icons/instagram.svg?inline'

export default {
  components: {
    Facebook,
    Instagram,
  },
  async asyncData({ $dato }) {
    const { data } = await $dato({
      query: gql`
        ${contactFragment}
        query {
          contact {
            ...Contact
          }
        }
      `,
    })
    return data.contact
  },
  computed: {
    center() {
      const lat = Number.parseFloat(this.location.latitude)
      const lng = Number.parseFloat(this.location.longitude)
      return { lat, lng }
    },
  },
}
</script>

<style lang="scss" scoped>
.contact {
  @include container();
}
.contact-info {
  font-weight: 700;
  text-transform: initial;
  font-size: 26px;
  text-align: center;
}

.map-wrapper {
  width: 90%;
  border: 5px solid $color-yellow;
  margin: auto;
  margin-bottom: 30px;
  padding-top: 60%;
  position: relative;
  @include media('<=tablet') {
    padding-bottom: 100%;
    width: 100%;
    margin: auto;
  }
  .map {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    ::v-deep {
      .GMap {
        height: 100%;
      }
      .GMap__Wrapper {
        height: 100%;
      }
    }
  }
}
.map-headline {
  text-align: center;
  font-weight: 900;
  font-size: 30px;
  text-transform: initial;
  margin: 40px auto 15px;
}
.some {
  h3 {
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    text-transform: initial;
  }
  .links {
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: center;
    a {
      display: inline-block;
      &:not(:last-of-type) {
        margin-right: 20px;
      }
      svg {
        height: 40px;
      }
    }
  }
}
</style>
