<template>
  <div class="container">
    <section class="top-section">
      <div class="icon"></div>
      <div class="random-text">
        <p>
          Come for the
          <transition-group name="fade">
            <span
              v-for="(text, idx) in comeForThe"
              v-show="idx === cft"
              :key="text.text"
              class="random-word"
            >
              {{ text.text }}
            </span>
          </transition-group>
        </p>
      </div>
    </section>

    <section
      v-for="(oneStopmotion, idx) in stopmotion"
      :key="idx"
      class="stopmotion-wrap"
    >
      <StopmotionBlock :data="oneStopmotion" />
    </section>

    <section ref="content" class="find-us">
      <h1 class="headline">Find us!</h1>
      <div class="instagram ribbons">
        <h2 class="title">On instagram <Instagram /></h2>
        <!-- Place <div> tag where you want the feed to appear -->
        <div id="curator-feed-default-feed-layout">
          <a href="https://curator.io" target="_blank" class="crt-logo crt-tag"
            >Powered by Curator.io</a
          >
        </div>
      </div>
      <div class="facebook ribbons">
        <h2 class="title">On Facebook <Facebook /></h2>
        <div class="facebook-ribbon">
          <div
            class="fb-page"
            data-href="https://www.facebook.com/minaskaffebar"
            data-tabs="messages"
            data-width="2000"
            data-height="300"
            data-small-header="false"
            data-adapt-container-width="false"
            data-hide-cover="false"
            data-show-facepile="false"
          >
            <blockquote
              cite="https://www.facebook.com/minaskaffebar"
              class="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/minaskaffebar"
                >Minas kaffebar</a
              >
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <section class="images-clusters">
      <ImageCluster :images="polariodPictures" />
    </section>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import frontpageFragment from '@/queries/frontpageFragment'

import Instagram from '@/assets/icons/instagram.svg?inline'
import Facebook from '@/assets/icons/facebook.svg?inline'

export default {
  components: {
    Instagram,
    Facebook,
  },
  async asyncData({ $dato }) {
    const { data } = await $dato({
      query: gql`
        ${frontpageFragment}
        query {
          frontpage {
            ...Frontpage
          }
        }
      `,
    })
    return data.frontpage
  },
  data() {
    return {
      cft: 0,
      interval: '',
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.setCFT()
    }, 1200)
    this.curator()
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    getRandomNumber(max) {
      return Math.floor(Math.random() * Math.floor(max))
    },
    setCFT() {
      const randomNumber = this.getRandomNumber(
        this._data.comeForThe.length - 1
      )
      if (this.cft === randomNumber) {
        this.setCFT()
        return
      }
      this.cft = randomNumber
    },
    curator() {
      /* eslint-disable one-var, prefer-const */
      ;(function () {
        let i,
          e,
          d = document,
          s = 'script'
        i = d.createElement('script')
        i.async = 1
        i.src =
          'https://cdn.curator.io/published/771a87ef-0634-4442-a3c1-2b84560776b3.js'
        e = d.getElementsByTagName(s)[0]
        e.parentNode.insertBefore(i, e)
      })()
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: $nav-height;
}
.top-section {
  @include container();
  height: calc(100vh - 110px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  .icon {
    background-image: url('/minas-kaffebar/favicon.svg');
    width: 60%;
    padding-top: 60%;
    @include media('>phone') {
      width: 40%;
      padding-top: 40%;
    }
    @include media('>tablet') {
      width: 30%;
      padding-top: 30%;
    }
  }
  .random-text {
    margin-top: -220px;
    display: inline-block;
    width: 60%;
    text-align: right;
    align-self: flex-start;
    font-size: 28px;
    font-family: $font-title;
    @include media('>phone') {
      width: 50%;
      margin-top: -100;
      font-size: 48px;
    }
    @include media('>tablet') {
      width: 50%;
      margin-top: 0;
      font-size: 48px;
    }
  }
  .random-word {
    display: inline-block;
    position: absolute;
    color: $color-yellow;
    font-weight: 900;
    left: 60%;
    @include media('>phone') {
      left: 50%;
    }
  }
}

.find-us {
  @include container();
  margin-top: 40px;
  .headline {
    text-align: center;
  }
  .ribbons {
    max-width: 500px;
    margin: auto;
    .crt-logo {
      color: $color-white;
    }
  }
  .title {
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
  }
  .facebook > .title {
    justify-content: flex-end;
  }
  svg {
    margin-left: 8px;
    height: 24px;
  }
  .facebook-ribbon {
    border: 3px solid $color-yellow;
    width: fit-content;
    margin: auto;
    text-align: center;
  }
}

.images-clusters {
  width: 100vw;
  overflow-x: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 1s;
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-150%);
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(150%);
}
</style>
