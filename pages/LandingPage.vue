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

    <section class="find-us">
      <h1 class="headline">Find us!</h1>
      <div class="instagram">
        <h2 class="title">On instagram <Instagram /></h2>
      </div>
      <div class="facebook">
        <h2 class="title">On Facebook <Facebook /></h2>
        <div class="facebook-ribbon">
          <div
            class="fb-page"
            data-href="https://www.facebook.com/minaskaffebar"
            data-tabs=""
            data-width=""
            data-height=""
            data-small-header="false"
            data-adapt-container-width="true"
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

    <ImageCluster :images="polariodPictures" />
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
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: $nav-height;
}

.top-section {
  height: calc(100vh - 110px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  .icon {
    background-image: url('/favicon.svg');
    width: 60%;
    padding-top: 60%;
  }
  .random-text {
    margin-top: -220px;
    display: inline-block;
    width: 50%;
    text-align: right;
    align-self: flex-start;
    font-size: 24px;
  }
  .random-word {
    display: inline-block;
    position: absolute;
    color: $color-yellow;
    font-weight: 700;
    left: 50%;
  }
}

.find-us {
  .headline {
    text-align: center;
  }
  .title {
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
  }
  svg {
    margin-left: 8px;
    height: 24px;
  }
  .facebook-ribbon {
    border: 3px solid $color-yellow;
    width: 90%;
    margin: auto;
  }
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
