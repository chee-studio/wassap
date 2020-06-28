<template>
  <v-carousel style="margin-top: 10px"
              height="300px"
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
            src: 'https://wassap.co/resources/wassap_mobile.png',
          },
        ],
      }
    },
  }
</script>
