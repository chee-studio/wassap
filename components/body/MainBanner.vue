<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src='item.src'
    >
      <div>와인 구매 사이트</div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://wassap.co/resources/wassap_mobile.png',
          },
          {
            src: 'https://wassap.co/resources/main-banner/wassap_banner.png',
          },
          {
            src: 'https://wassap.co/resources/main-banner/wine-glasses.jpg',
          },
        ],
      }
    },
  }
</script>
