<template>
  <v-carousel style="margin-top: 10px"
              height="170px"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src='item.src'
    />
  </v-carousel>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            src: 'https://wassap.co/resources/main-banner/wassap_mobile2.webp',
          },
        ],
      }
    },
  }
</script>
