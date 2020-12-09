<template>
  <div class="event">
    <div class="event-image">
      <img
        :src="event.image.responsiveImage.src"
        alt=""
        :srcset="event.image.responsiveImage.srcSet"
      />
    </div>
    <div class="price-date">
      <div class="date-time">
        <p class="date">{{ date }}</p>
        <p class="time">{{ time }}</p>
      </div>
      <p class="price">{{ event.price }}kr.</p>
    </div>
    <div class="event-text-content">
      <h3 class="event-headline">{{ event.headline }}</h3>
      <div class="event-body" v-html="event.body" />
    </div>
    <div class="event-btn">
      <Button />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: { type: Object, required: true },
  },
  computed: {
    date() {
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }
      const getDate = new Date(this.event.time)
      return getDate.toLocaleDateString('da-DK', options)
    },
    time() {
      const getTime = new Date(this.event.time)
      return getTime.toLocaleTimeString('da-DK', {
        hour: '2-digit',
        minute: '2-digit',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.event {
  background-color: rgba($color-greyblue, 0.25);
  width: 80%;
  margin: auto;
  position: relative;
  box-shadow: 2px 2px 4px 2px rgba($color-black, 0.1);
  border-radius: 4px;
  margin-top: 60px;
  &:not(:first-of-type) {
    margin-top: 100px;
  }
  &-body {
    ::v-deep {
      p {
        line-height: 20px;
      }
    }
  }
  &-image {
    width: 100%;
    padding-top: 60%;
    position: relative;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .price-date {
    display: flex;
    justify-content: space-between;
    padding: 10px 1rem 0;
    p {
      margin-bottom: 4px;
      font-size: 12px;
    }
  }
  &-text-content {
    padding: 0 1rem 1rem;
  }
  &-headline {
    font-size: 20px;
    line-height: 20px;
  }
  &-body {
    font-size: 14px;
  }
  &-btn {
    text-align: center;
    padding-bottom: 30px;
  }
}
</style>
